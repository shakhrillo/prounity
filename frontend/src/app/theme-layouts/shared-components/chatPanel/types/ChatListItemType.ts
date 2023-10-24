import { MessageType } from './MessageType';

/**
 * Chat list item type
 */
export type ChatListItemType = {
	id: string;
	contactId: string;
	unreadCount: number;
	muted: boolean;
	lastMessage?: string;
	lastMessageAt?: string;
	messages?: MessageType[];
};
