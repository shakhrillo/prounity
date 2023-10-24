import { lazy } from 'react';

const SettingsDoc = lazy(() => import('./settings/SettingsDoc'));
const RoutingDoc = lazy(() => import('./routing/RoutingDoc'));
const NavigationDoc = lazy(() => import('./navigation/NavigationDoc'));

/**
 * The configuration doc routes.
 */
const ConfigurationDocRoutes = [
	{
		path: 'configuration/settings',
		element: <SettingsDoc />
	},
	{
		path: 'configuration/routing',
		element: <RoutingDoc />
	},
	{
		path: 'configuration/navigation',
		element: <NavigationDoc />
	}
];

export default ConfigurationDocRoutes;
