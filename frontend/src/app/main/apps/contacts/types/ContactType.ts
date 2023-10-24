import { ContactEmailsType } from './ContactEmailType';
import { ContactPhoneNumbersType } from './ContactPhoneNumberType';

/**
 * Contact Type
 */
export type ContactType = {
	id: string;
	avatar: string;
	background: string;
	name: string;
	emails: ContactEmailsType;
	phoneNumbers: ContactPhoneNumbersType;
	title: string;
	company: string;
	birthday: string;
	address: string;
	notes: string;
	tags: string[];
};

/**
 * Contacts Type
 */
export type ContactsType = ContactType[];
