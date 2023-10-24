import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { MailType } from '../types/MailType';

/**
 * The mails type.
 */
export type MailsType = MailType[];

/**
 * The mail model.
 */
const MailModel = (data: PartialDeep<MailType>): MailType =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		type: '',
		from: {
			email: '',
			avatar: '',
			contact: ''
		},
		to: '',
		cc: [],
		bcc: [],
		date: new Date().toISOString(),
		subject: '',
		content: '',
		attachments: [],
		starred: false,
		important: false,
		unread: false,
		folder: '',
		labels: []
	});

export default MailModel;
