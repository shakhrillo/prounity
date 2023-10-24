import lazyWithReducer from 'app/store/lazyWithReducer';
import reducer from './store';

const CalendarApp = lazyWithReducer('calendarApp', () => import('./CalendarApp'), reducer);

/**
 * The Calendar App Config.
 */
const CalendarAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'apps/calendar',
			element: <CalendarApp />
		}
	]
};

export default CalendarAppConfig;
