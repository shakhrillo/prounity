import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const ClassicSignOutPage = lazy(() => import('./ClassicSignOutPage'));
const ModernSignOutPage = lazy(() => import('./ModernSignOutPage'));
const ModernReversedSignOutPage = lazy(() => import('./ModernReversedSignOutPage'));
const SplitScreenSignOutPage = lazy(() => import('./SplitScreenSignOutPage'));
const SplitScreenReversedSignOutPage = lazy(() => import('./SplitScreenReversedSignOutPage'));
const FullScreenSignOutPage = lazy(() => import('./FullScreenSignOutPage'));
const FullScreenReversedSignOutPage = lazy(() => import('./FullScreenReversedSignOutPage'));

/**
 * The sign out pages config.
 */
const signOutPagesConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'pages/authentication/sign-out',
			children: [
				{
					path: '',
					element: <Navigate to="classic" />
				},
				{
					path: 'classic',
					element: <ClassicSignOutPage />
				},
				{
					path: 'modern',
					element: <ModernSignOutPage />
				},
				{
					path: 'modern-reversed',
					element: <ModernReversedSignOutPage />
				},
				{
					path: 'split-screen',
					element: <SplitScreenSignOutPage />
				},
				{
					path: 'split-screen-reversed',
					element: <SplitScreenReversedSignOutPage />
				},
				{
					path: 'full-screen',
					element: <FullScreenSignOutPage />
				},
				{
					path: 'full-screen-reversed',
					element: <FullScreenReversedSignOutPage />
				}
			]
		}
	]
};

export default signOutPagesConfig;
