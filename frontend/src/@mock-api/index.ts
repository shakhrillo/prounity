/* eslint-disable import/no-import-module-exports */
import history from '@history';
import mock from './mock';

// Import API modules
import './api/dashboards/analytics-api';
import './api/dashboards/project-api';
import './api/dashboards/crypto-api';
import './api/dashboards/finance-api';
import './api/ui/icons-api';
import './api/countries-api';
import './api/contacts-api';
import './api/chat-api';
import './api/tasks-api';
import './api/academy-api';
import './api/ecommerce-api';
import './api/file-manager-api';
import './api/help-center-api';
import './api/notes-api';
import './api/scrumboard-api';
import './api/mailbox-api';
import './api/calendar-api';
import './api/profile-api';
import './api/auth-api';
import './api/notifications-api';

// Pass all requests through the mock adapter
mock.onAny().passThrough();

// If the module is hot, redirect to the loading page and then back to the current page
if (module?.hot?.status() === 'apply') {
	const { pathname } = history.location;
	history.push('/loading');
	history.push({ pathname });
}
