import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';
import { lazy } from 'react';

const ActivitiesPage = lazy(() => import('./ActivitiesPage'));

/**
 * The activities page config.
 */
const activitiesPageConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'pages/activities',
			element: <ActivitiesPage />
		}
	]
};

export default activitiesPageConfig;
