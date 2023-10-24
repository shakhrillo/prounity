import { lazy } from 'react';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const MaintenancePage = lazy(() => import('./MaintenancePage'));

/**
 * The maintenance page config.
 */
const maintenancePageConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'pages/maintenance',
			element: <MaintenancePage />
		}
	]
};

export default maintenancePageConfig;
