import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import ContactModel from 'src/app/main/apps/contacts/models/ContactModel';
import mockApi from '../mock-api.json';
import mock from '../mock';
import { ContactType, ContactsType } from '../../app/main/apps/contacts/types/ContactType';
import { Params } from '../ExtendedMockAdapter';

const contactsDB = mockApi.components.examples.contacts.value as ContactsType;
const tagsDB = mockApi.components.examples.contacts_tags.value;

mock.onGet('/api/contacts').reply(() => {
	return [200, contactsDB];
});

mock.onPost('/api/contacts').reply(({ data }) => {
	const newContact = ContactModel({ id: FuseUtils.generateGUID(), ...JSON.parse(data as string) } as ContactType);

	contactsDB.push(newContact);

	return [200, newContact];
});

mock.onGet('/api/contacts/tags').reply(() => {
	return [200, tagsDB];
});

mock.onGet('/api/contacts/:id').reply((config) => {
	const { id } = config.params as Params;

	const contact = _.find(contactsDB, { id });

	if (contact) {
		return [200, contact];
	}

	return [404, 'Requested task do not exist.'];
});

mock.onPut('/api/contacts/:id').reply((config) => {
	const { id } = config.params as Params;

	_.assign(_.find(contactsDB, { id }), JSON.parse(config.data as string));

	return [200, _.find(contactsDB, { id })];
});

mock.onDelete('/api/contacts/:id').reply((config) => {
	const { id } = config.params as Params;

	_.remove(contactsDB, { id });

	return [200, id];
});
