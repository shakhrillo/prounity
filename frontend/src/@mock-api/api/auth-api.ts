/*
eslint-disable camelcase
 */
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import Utf8 from 'crypto-js/enc-utf8';
import jwtDecode from 'jwt-decode';
import { PartialDeep } from 'type-fest';
import UserType from 'app/store/user/UserType';
import UserModel from 'app/store/user/models/UserModel';
import mock from '../mock';
import mockApi from '../mock-api.json';

type UserAuthType = UserType & { password: string };

let usersApi = mockApi.components.examples.auth_users.value as UserAuthType[];

mock.onGet('/api/auth/sign-in').reply((config) => {
	const data = JSON.parse(config.data as string) as { email: string; password: string };

	const { email, password } = data;

	const user = _.cloneDeep(usersApi.find((_user) => _user.data.email === email));

	const error = [];

	if (!user) {
		error.push({
			type: 'email',
			message: 'Check your email address'
		});
	}

	if (user && user.password !== password) {
		error.push({
			type: 'password',
			message: 'Check your password'
		});
	}

	if (error.length === 0) {
		delete (user as Partial<UserAuthType>).password;

		const access_token = generateJWTToken({ id: user.uuid });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}

	return [200, { error }];
});

mock.onGet('/api/auth/access-token').reply((config) => {
	const data = JSON.parse(config.data as string) as { access_token: string };

	const { access_token } = data;

	if (verifyJWTToken(access_token)) {
		const { id }: { id: string } = jwtDecode(access_token);

		const user = _.cloneDeep(usersApi.find((_user) => _user.uuid === id));

		delete (user as Partial<UserAuthType>).password;

		const updatedAccessToken = generateJWTToken({ id: user.uuid });

		const response = {
			user,
			access_token: updatedAccessToken
		};

		return [200, response];
	}

	const error = 'Invalid access token detected';

	return [401, { error }];
});

mock.onPost('/api/auth/sign-up').reply((request) => {
	const data = JSON.parse(request.data as string) as { displayName: string; password: string; email: string };
	const { displayName, password, email } = data;
	const isEmailExists = usersApi.find((_user) => _user.data.email === email);
	const error = [];

	if (isEmailExists) {
		error.push({
			type: 'email',
			message: 'The email address is already in use'
		});
	}

	if (error.length === 0) {
		const newUser = UserModel({
			uuid: FuseUtils.generateGUID(),
			role: 'admin',
			password,
			data: {
				displayName,
				photoURL: 'assets/images/avatars/Abbott.jpg',
				email,
				settings: {},
				shortcuts: []
			}
		} as UserAuthType) as UserAuthType;

		usersApi = [...usersApi, newUser];

		const user = _.cloneDeep(newUser);

		delete (user as Partial<UserAuthType>).password;

		const access_token = generateJWTToken({ id: user.uuid });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}
	return [200, { error }];
});

mock.onPost('/api/auth/user/update').reply((config) => {
	const access_token = config?.headers?.Authorization as string;

	const userData = jwtDecode(access_token);
	const uuid = (userData as { [key: string]: string }).id;

	const data = JSON.parse(config.data as string) as { user: PartialDeep<UserAuthType> };
	const { user } = data;

	let updatedUser: UserType;

	usersApi = usersApi.map((_user) => {
		if (uuid === _user.uuid) {
			updatedUser = _.assign({}, _user, user);
		}
		return _user;
	});

	delete (updatedUser as Partial<UserAuthType>).password;

	return [200, updatedUser];
});

/**
 * JWT Token Generator/Verifier Helpers
 * !! Created for Demonstration Purposes, cannot be used for PRODUCTION
 */

const jwtSecret = 'some-secret-code-goes-here';

/* eslint-disable */

function base64url(source: CryptoJS.lib.WordArray) {
	// Encode in classical base64
	let encodedSource = Base64.stringify(source);

	// Remove padding equal characters
	encodedSource = encodedSource.replace(/=+$/, '');

	// Replace characters according to base64url specifications
	encodedSource = encodedSource.replace(/\+/g, '-');
	encodedSource = encodedSource.replace(/\//g, '_');

	// Return the base64 encoded string
	return encodedSource;
}

function generateJWTToken(tokenPayload: { [key:string]: unknown } ) {
	// Define token header
	const header = {
		alg: 'HS256',
		typ: 'JWT'
	};

	// Calculate the issued at and expiration dates
	const date = new Date();
	const iat = Math.floor(date.getTime() / 1000);
	const exp = Math.floor(date.setDate(date.getDate() + 7) / 1000);

	// Define token payload
	const payload: unknown = {
		iat,
		iss: 'Fuse',
		exp,
		...tokenPayload
	};

	// Stringify and encode the header
	const stringifiedHeader = Utf8.parse(JSON.stringify(header));
	const encodedHeader = base64url(stringifiedHeader);

	// Stringify and encode the payload
	const stringifiedPayload = Utf8.parse(JSON.stringify(payload));
	const encodedPayload = base64url(stringifiedPayload);

	// Sign the encoded header and mock-api
	let signature = `${encodedHeader}.${encodedPayload}`;
	// @ts-ignore
	signature = HmacSHA256(signature, jwtSecret);
	// @ts-ignore
	signature = base64url(signature);

	// Build and return the token
	return `${encodedHeader}.${encodedPayload}.${signature}`;
}

function verifyJWTToken(token: string) {
	// Split the token into parts
	const parts = token.split('.');
	const header = parts[0];
	const payload = parts[1];
	const signature = parts[2];

	// Re-sign and encode the header and payload using the secret
	const signatureCheck = base64url(HmacSHA256(`${header}.${payload}`, jwtSecret));

	// Verify that the resulting signature is valid
	return signature === signatureCheck;
}
