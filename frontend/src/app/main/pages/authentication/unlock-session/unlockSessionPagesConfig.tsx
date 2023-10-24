import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const ClassicUnlockSessionPage = lazy(() => import('./ClassicUnlockSessionPage'));
const ModernUnlockSessionPage = lazy(() => import('./ModernUnlockSessionPage'));
const ModernReversedUnlockSessionPage = lazy(() => import('./ModernReversedUnlockSessionPage'));
const SplitScreenUnlockSessionPage = lazy(() => import('./SplitScreenUnlockSessionPage'));
const SplitScreenReversedUnlockSessionPage = lazy(() => import('./SplitScreenReversedUnlockSessionPage'));
const FullScreenUnlockSessionPage = lazy(() => import('./FullScreenUnlockSessionPage'));
const FullScreenReversedUnlockSessionPage = lazy(() => import('./FullScreenReversedUnlockSessionPage'));

/**
 * The unlock session pages config.
 */
const unlockSessionPagesConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'pages/authentication/unlock-session',
			children: [
				{
					path: '',
					element: <Navigate to="classic" />
				},
				{
					path: 'classic',
					element: <ClassicUnlockSessionPage />
				},
				{
					path: 'modern',
					element: <ModernUnlockSessionPage />
				},
				{
					path: 'modern-reversed',
					element: <ModernReversedUnlockSessionPage />
				},
				{
					path: 'split-screen',
					element: <SplitScreenUnlockSessionPage />
				},
				{
					path: 'split-screen-reversed',
					element: <SplitScreenReversedUnlockSessionPage />
				},
				{
					path: 'full-screen',
					element: <FullScreenUnlockSessionPage />
				},
				{
					path: 'full-screen-reversed',
					element: <FullScreenReversedUnlockSessionPage />
				}
			]
		}
	]
};

export default unlockSessionPagesConfig;
