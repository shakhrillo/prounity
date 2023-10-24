import MailAttachmentType from './MailAttachmentType';

/**
 * Mail Type
 */
export type MailType = {
	id: string;
	type: string;
	from: {
		email: string;
		avatar: string;
		contact: string;
	};
	to: string;
	cc: string[];
	bcc: string[];
	date: string;
	subject?: string;
	content: string;
	attachments: MailAttachmentType[];
	starred: boolean;
	important: boolean;
	unread: boolean;
	folder: string;
	labels: string[];
};

/**
 * Mails Type
 */
export type MailsType = MailType[];
