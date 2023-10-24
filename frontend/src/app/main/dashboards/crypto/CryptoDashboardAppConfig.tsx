import lazyWithReducer from 'app/store/lazyWithReducer';
import reducer from './store';

const CryptoDashboardApp = lazyWithReducer('cryptoDashboardApp', () => import('./CryptoDashboardApp'), reducer);

/**
 * The CryptoDashboardAppConfig.
 */
const CryptoDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'dashboards/crypto',
			element: <CryptoDashboardApp />
		}
	]
};

export default CryptoDashboardAppConfig;
