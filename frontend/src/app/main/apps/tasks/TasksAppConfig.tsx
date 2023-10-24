import lazyWithReducer from 'app/store/lazyWithReducer';
import TaskForm from './task/TaskForm';
import reducer from './store';

const TasksApp = lazyWithReducer('tasksApp', () => import('./TasksApp'), reducer);

/**
 * The tasks app config.
 */
const TasksAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'apps/tasks',
			element: <TasksApp />,
			children: [
				{
					path: ':id',
					element: <TaskForm />
				},
				{
					path: ':id/:type',
					element: <TaskForm />
				}
			]
		}
	]
};

export default TasksAppConfig;
