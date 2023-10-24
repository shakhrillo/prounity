import { lazy } from 'react';

const ReactHookFormDoc = lazy(() => import('./react-hook-form/ReactHookFormDoc'));
const GoogleMapReactDoc = lazy(() => import('./google-map-react/GoogleMapReactDoc'));
const ReactApexchartsDoc = lazy(() => import('./react-apexcharts/ReactApexchartsDoc'));

/**
 * Third Party Components Doc Routes
 */
const ThirdPartyComponentsRoutes = [
	{
		path: 'third-party-components/react-hook-form',
		element: <ReactHookFormDoc />
	},
	{
		path: 'third-party-components/google-map-react',
		element: <GoogleMapReactDoc />
	},
	{
		path: 'third-party-components/react-apexcharts',
		element: <ReactApexchartsDoc />
	}
];

export default ThirdPartyComponentsRoutes;
