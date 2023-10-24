import i18next from 'i18next';
import { Navigate } from 'react-router-dom';
import lazyWithReducer from 'app/store/lazyWithReducer';
import ar from './i18n/ar';
import en from './i18n/en';
import tr from './i18n/tr';
import SelectMailMessage from './SelectMailMessage';
import MailDetails from './mail/MailDetails';
import reducer from './store';

const MailboxApp = lazyWithReducer('mailboxApp', () => import('./MailboxApp'), reducer);

i18next.addResourceBundle('en', 'mailboxApp', en);
i18next.addResourceBundle('tr', 'mailboxApp', tr);
i18next.addResourceBundle('ar', 'mailboxApp', ar);

/**
 * The mailbox app config.
 */
const MailboxAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/apps/mailbox',
			children: [
				{
					path: '',
					element: <Navigate to="/apps/mailbox/inbox" />
				},
				{
					path: ':folderHandle',
					element: <MailboxApp />,

					children: [
						{ path: '', element: <SelectMailMessage /> },
						{ path: ':mailId', element: <MailDetails /> }
					]
				},
				{
					path: 'label/:labelHandle',
					element: <MailboxApp />,

					children: [
						{ path: '', element: <SelectMailMessage /> },
						{ path: ':mailId', element: <MailDetails /> }
					]
				},
				{
					path: 'filter/:filterHandle',
					element: <MailboxApp />,

					children: [
						{ path: '', element: <SelectMailMessage /> },
						{ path: ':mailId', element: <MailDetails /> }
					]
				}
			]
		}
	]
};

export default MailboxAppConfig;
