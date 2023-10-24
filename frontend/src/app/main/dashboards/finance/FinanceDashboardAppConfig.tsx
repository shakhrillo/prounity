import lazyWithReducer from 'app/store/lazyWithReducer';
import reducer from './store';

const FinanceDashboardApp = lazyWithReducer('financeDashboardApp', () => import('./FinanceDashboardApp'), reducer);

/**
 * The finance dashboard app config.
 */
const FinanceDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'dashboards/finance',
			element: <FinanceDashboardApp />
		}
	]
};

export default FinanceDashboardAppConfig;
