import { ContactAttachmentsType } from './ContactAttachmentsType';
import { ContactDetailsType } from './ContactDetailsType';
import { ContactStatusType } from './ContactStatusType';

/**
 * Contact type
 */
export type ContactType = {
	id: string;
	avatar: string;
	name: string;
	about: string;
	status: ContactStatusType;
	details: Partial<ContactDetailsType>;
	attachments: ContactAttachmentsType;
	unread?: number;
};

export type ContactsType = ContactType[];
