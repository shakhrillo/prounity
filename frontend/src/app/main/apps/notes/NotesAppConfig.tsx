import lazyWithReducer from 'app/store/lazyWithReducer';
import reducer from './store';

const NotesApp = lazyWithReducer('notesApp', () => import('./NotesApp'), reducer);

/**
 * The notes app config.
 */
const NotesAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'apps/notes',
			children: [
				{
					path: '',
					element: <NotesApp />,
					exact: true
				},
				{
					path: ':filter',
					element: <NotesApp />,
					children: [
						{
							path: ':id'
						}
					]
				}
			]
		}
	]
};

export default NotesAppConfig;
