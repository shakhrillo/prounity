import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';
import { getChatList } from './chatListSlice';
import { ChatMessagesType, ChatMessageType } from '../types/ChatMessageType';
import { ContactType } from '../types/ContactType';

type AppRootStateType = RootStateType<chatMessagesSliceType>;

/**
 * Get the chat messages.
 */
export const getChat = createAppAsyncThunk<ChatMessagesType, ChatMessageType['contactId']>(
	'chatPanel/chat/getChat',
	async (contactId) => {
		const response = await axios.get(`/api/chat/chats/${contactId}`);

		const data = (await response.data) as ChatMessagesType;

		return data;
	}
);

/**
 * Send a message.
 */
export const sendMessage = createAppAsyncThunk<ChatMessageType, { messageText: string; contactId: ContactType['id'] }>(
	'chatPanel/chat/sendMessage',
	async ({ messageText, contactId }, { dispatch }) => {
		const response = await axios.post(`/api/chat/chats/${contactId}`, messageText);

		const data = (await response.data) as ChatMessageType;

		dispatch(getChatList());

		return data;
	}
);

const initialState: ChatMessagesType = [];

/**
 * The slice for the chat messages.
 */
export const chatMessagesSlice = createSlice({
	name: 'chatPanel/chat',
	initialState,
	reducers: {
		// removeChat: (state, action) => action.payload
	},
	extraReducers: (builder) => {
		builder
			.addCase(getChat.fulfilled, (state, action) => action.payload)
			.addCase(sendMessage.fulfilled, (state, action) => [...state, action.payload]);
	}
});

export const selectChat = (state: AppRootStateType) => state.chatPanel.chat;

export type chatMessagesSliceType = typeof chatMessagesSlice;

export default chatMessagesSlice.reducer;
