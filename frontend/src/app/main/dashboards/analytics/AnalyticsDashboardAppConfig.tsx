import lazyWithReducer from 'app/store/lazyWithReducer';
import reducer from './store';

const AnalyticsDashboardApp = lazyWithReducer(
	'analyticsDashboardApp',
	() => import('./AnalyticsDashboardApp'),
	reducer
);

/**
 * The analytics dashboard app config.
 */
const AnalyticsDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'dashboards/analytics',
			element: <AnalyticsDashboardApp />
		}
	]
};

export default AnalyticsDashboardAppConfig;
