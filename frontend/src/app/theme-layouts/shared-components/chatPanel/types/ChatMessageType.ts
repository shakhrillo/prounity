/**
 * ChatMessageType
 */
export type ChatMessageType = {
	id: string;
	chatId: string;
	contactId: string;
	value: string;
	createdAt: string;
};

export type ChatMessagesType = ChatMessageType[];
