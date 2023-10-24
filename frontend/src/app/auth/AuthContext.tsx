import * as React from 'react';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import FuseSplashScreen from '@fuse/core/FuseSplashScreen';
import { showMessage } from 'app/store/fuse/messageSlice';
import { logoutUser, setUser } from 'app/store/user/userSlice';
import { useAppDispatch } from 'app/store';
import { AxiosError } from 'axios';
import { UserType } from 'app/store/user';
import jwtService from './services/jwtService';

/**
 * The AuthContext object is a React context object that provides authentication information to child components.
 */
const AuthContext = React.createContext({});

type AuthProviderProps = { children: ReactNode };

/**
 * The AuthProvider component is a wrapper component that provides authentication information to child components.
 */
function AuthProvider(props: AuthProviderProps) {
	const { children } = props;
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [waitAuthCheck, setWaitAuthCheck] = useState(true);
	const dispatch = useAppDispatch();
	const val = useMemo(() => ({ isAuthenticated }), [isAuthenticated]);

	useEffect(() => {
		jwtService.on('onAutoLogin', () => {
			dispatch(showMessage({ message: 'Signing in with JWT' }));

			/**
			 * Sign in and retrieve user data with stored token
			 */
			jwtService
				.signInWithToken()
				.then((user) => {
					success(user as UserType, 'Signed in with JWT');
				})
				.catch((error: AxiosError) => {
					pass(error.message);
				});
		});

		jwtService.on('onLogin', (user: UserType) => {
			success(user, 'Signed in');
		});

		jwtService.on('onLogout', () => {
			pass('Signed out');

			dispatch(logoutUser());
		});

		jwtService.on('onAutoLogout', (message: string) => {
			pass(message);

			dispatch(logoutUser());
		});

		jwtService.on('onNoAccessToken', () => {
			pass();
		});

		jwtService.init();

		function success(user: UserType, message: string) {
			Promise.all([
				dispatch(setUser(user))

				// You can receive data in here before app initialization
			]).then(() => {
				if (message) {
					dispatch(showMessage({ message }));
				}

				setWaitAuthCheck(false);
				setIsAuthenticated(true);
			});
		}

		function pass(message?: string) {
			if (message) {
				dispatch(showMessage({ message }));
			}

			setWaitAuthCheck(false);
			setIsAuthenticated(false);
		}
	}, [dispatch]);

	return waitAuthCheck ? <FuseSplashScreen /> : <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
}

function useAuth() {
	const context = React.useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider');
	}
	return context;
}

export { useAuth, AuthProvider };
