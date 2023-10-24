import { lazy } from 'react';

const JwtAuthDoc = lazy(() => import('./jwt/jwtAuthDoc'));

/**
 * The authentication doc routes.
 */
const AuthenticationDocRoutes = [
	{
		path: 'authentication/jwt',
		element: <JwtAuthDoc />
	}
];

export default AuthenticationDocRoutes;
