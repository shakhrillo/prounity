import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { ContactType } from '../types/ContactType';

/**
 * Contact model.
 */
function ContactModel(data?: PartialDeep<ContactType>) {
	data = data || {};

	return _.defaults(data, {
		id: _.uniqueId(),
		avatar: '',
		name: '',
		about: '',
		status: 'offline',
		details: {
			emails: [],
			phoneNumbers: [],
			title: '',
			company: '',
			birthday: '',
			address: ''
		},
		attachments: {
			media: [],
			docs: [],
			links: []
		}
	});
}

export default ContactModel;
