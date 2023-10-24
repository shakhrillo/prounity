import { ContactAttachmentsType } from './ContactAttachmentsType';
import { ContactDetailsType } from './ContactDetailsType';
import { ContactStatusType } from './ContactStatusType';

/**
 * Contact Type
 */
export type ContactType = {
	id: string;
	avatar: string;
	name: string;
	about: string;
	status: ContactStatusType;
	details: Partial<ContactDetailsType>;
	attachments: ContactAttachmentsType;
};

export type ContactsType = ContactType[];
