import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { ChatListItemType } from '../types/ChatListItemType';

/**
 * Chat list item model.
 */
function ChatListItemModel(data?: PartialDeep<ChatListItemType>) {
	data = data || {};

	return _.defaults(data, {
		id: _.uniqueId(),
		contactId: null,
		unreadCount: 0,
		muted: false,
		lastMessage: '',
		lastMessageAt: null
	});
}

export default ChatListItemModel;
