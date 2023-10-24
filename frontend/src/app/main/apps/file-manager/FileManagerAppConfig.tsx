import lazyWithReducer from 'app/store/lazyWithReducer';
import reducer from './store';

const FileManagerAppWithReducers = lazyWithReducer('fileManagerApp', () => import('./FileManagerApp'), reducer);

/**
 * The file manager app config.
 */
const FileManagerAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'apps/file-manager',
			element: <FileManagerAppWithReducers />,
			children: [
				{
					path: ':folderId'
				}
			]
		}
	]
};

export default FileManagerAppConfig;
