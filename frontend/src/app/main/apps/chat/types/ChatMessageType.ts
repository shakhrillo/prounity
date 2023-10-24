/**
 * Chat Message Type
 */
export type ChatMessageType = {
	id: string;
	chatId: string;
	contactId: string;
	value: string;
	createdAt: string;
};

/**
 * Chat Messages Type
 */
export type ChatMessagesType = ChatMessageType[];
