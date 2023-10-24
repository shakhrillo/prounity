import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import lazyWithReducer from 'app/store/lazyWithReducer';
import reducer from './store';

const ScrumboardApp = lazyWithReducer('scrumboardApp', () => import('./ScrumboardApp'), reducer);
const Board = lazy(() => import('./board/Board'));
const Boards = lazy(() => import('./boards/Boards'));

/**
 * The scrumboard app config.
 */
const ScrumboardAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'apps/scrumboard',
			element: <ScrumboardApp />,
			children: [
				{
					path: '',
					element: <Navigate to="/apps/scrumboard/boards" />
				},
				{
					path: 'boards',
					element: <Boards />
				},
				{
					path: 'boards/:boardId',
					element: <Board />
				}
			]
		}
	]
};

export default ScrumboardAppConfig;
