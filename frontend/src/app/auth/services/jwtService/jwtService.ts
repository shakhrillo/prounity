import FuseUtils from '@fuse/utils/FuseUtils';
import axios, { AxiosError, AxiosResponse } from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import UserType from 'app/store/user/UserType';
import { PartialDeep } from 'type-fest';
import jwtServiceConfig from './jwtServiceConfig';
/* eslint-disable camelcase, class-methods-use-this */

/**
 * The JwtService class is a utility class for handling JSON Web Tokens (JWTs) in the Fuse application.
 * It provides methods for initializing the service, setting interceptors, and handling authentication.
 */
class JwtService extends FuseUtils.EventEmitter {
	/**
	 * Initializes the JwtService by setting interceptors and handling authentication.
	 */
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}

	/**
	 * Sets the interceptors for the Axios instance.
	 */
	setInterceptors = () => {
		axios.interceptors.response.use(
			(response: AxiosResponse<unknown>) => response,
			(err: AxiosError) =>
				new Promise(() => {
					if (err?.response?.status === 401 && err.config) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token');
						_setSession(null);
					}
					throw err;
				})
		);
	};

	/**
	 * Handles authentication by checking for a valid access token and emitting events based on the result.
	 */
	handleAuthentication = () => {
		const access_token = getAccessToken();

		if (!access_token) {
			this.emit('onNoAccessToken');

			return;
		}

		if (isAuthTokenValid(access_token)) {
			_setSession(access_token);
			this.emit('onAutoLogin', true);
		} else {
			_setSession(null);
			this.emit('onAutoLogout', 'access_token expired');
		}
	};

	/**
	 * Creates a new user account.
	 */
	createUser = (data: {
		displayName: UserType['data']['displayName'];
		password: string;
		email: UserType['data']['email'];
	}) =>
		new Promise((resolve, reject) => {
			axios.post(jwtServiceConfig.signUp, data).then(
				(
					response: AxiosResponse<{
						user: UserType;
						access_token: string;
						error?: {
							type: 'email' | 'password' | `root.${string}` | 'root';
							message: string;
						}[];
					}>
				) => {
					if (response.data.user) {
						_setSession(response.data.access_token);
						resolve(response.data.user);
						this.emit('onLogin', response.data.user);
					} else {
						reject(response.data.error);
					}
				}
			);
		});

	/**
	 * Signs in with the provided email and password.
	 */
	signInWithEmailAndPassword = (email: string, password: string) =>
		new Promise((resolve, reject) => {
			axios
				.get(jwtServiceConfig.signIn, {
					data: {
						email,
						password
					}
				})
				.then(
					(
						response: AxiosResponse<{
							user: UserType;
							access_token: string;
							error?: {
								type: 'email' | 'password' | `root.${string}` | 'root';
								message: string;
							}[];
						}>
					) => {
						if (response.data.user) {
							_setSession(response.data.access_token);
							this.emit('onLogin', response.data.user);
							resolve(response.data.user);
						} else {
							reject(response.data.error);
						}
					}
				);
		});

	/**
	 * Signs in with the provided provider.
	 */
	signInWithToken = () =>
		new Promise<UserType>((resolve, reject) => {
			axios
				.get(jwtServiceConfig.accessToken, {
					data: {
						access_token: getAccessToken()
					}
				})
				.then((response: AxiosResponse<{ user: UserType; access_token: string }>) => {
					if (response.data.user) {
						_setSession(response.data.access_token);
						resolve(response.data.user);
					} else {
						this.logout();
						reject(new Error('Failed to login with token.'));
					}
				})
				.catch(() => {
					this.logout();
					reject(new Error('Failed to login with token.'));
				});
		});

	/**
	 * Updates the user data.
	 */
	updateUserData = (user: PartialDeep<UserType>) =>
		axios.post(jwtServiceConfig.updateUser, {
			user
		});

	/**
	 * Signs out the user.
	 */
	logout = () => {
		_setSession(null);
		this.emit('onLogout', 'Logged out');
	};
}

/**
 * Sets the session by storing the access token in the local storage and setting the default authorization header.
 */
function _setSession(access_token: string | null) {
	if (access_token) {
		setAccessToken(access_token);
		axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
	} else {
		removeAccessToken();
		delete axios.defaults.headers.common.Authorization;
	}
}

/**
 * Checks if the access token is valid.
 */
function isAuthTokenValid(access_token: string) {
	if (!access_token) {
		return false;
	}
	const decoded = jwtDecode<JwtPayload>(access_token);
	const currentTime = Date.now() / 1000;

	if (decoded.exp < currentTime) {
		// eslint-disable-next-line no-console
		console.warn('access token expired');
		return false;
	}

	return true;
}

/**
 * Gets the access token from the local storage.
 */
function getAccessToken() {
	return window.localStorage.getItem('jwt_access_token');
}

/**
 * Sets the access token in the local storage.
 */
function setAccessToken(access_token: string) {
	return window.localStorage.setItem('jwt_access_token', access_token);
}

/**
 * Removes the access token from the local storage.
 */
function removeAccessToken() {
	return window.localStorage.removeItem('jwt_access_token');
}

const instance = new JwtService();

export default instance;
