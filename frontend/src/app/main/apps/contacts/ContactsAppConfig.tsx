import lazyWithReducer from 'app/store/lazyWithReducer';
import ContactView from './contact/ContactView';
import ContactForm from './contact/ContactForm';
import reducer from './store';

const ContactsApp = lazyWithReducer('contactsApp', () => import('./ContactsApp'), reducer);

/**
 * The ContactsApp configuration.
 */
const ContactsAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'apps/contacts',
			element: <ContactsApp />,
			children: [
				{
					path: ':id',
					element: <ContactView />
				},
				{
					path: ':id/edit',
					element: <ContactForm />
				}
			]
		}
	]
};

export default ContactsAppConfig;
