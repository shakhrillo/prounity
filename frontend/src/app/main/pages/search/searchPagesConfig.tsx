import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const ClassicSearchPage = lazy(() => import('./ClassicSearchPage'));
const ModernSearchPage = lazy(() => import('./ModernSearchPage'));

/**
 * The search pages config.
 */
const searchPagesConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'pages/search',
			children: [
				{
					path: '',
					element: <Navigate to="modern" />
				},
				{
					path: 'modern',
					element: <ModernSearchPage />
				},
				{
					path: 'classic',
					element: <ClassicSearchPage />
				}
			]
		}
	]
};

export default searchPagesConfig;
