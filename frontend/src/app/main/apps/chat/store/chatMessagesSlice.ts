import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';
import { getChatList } from './chatListSlice';
import { ChatMessagesType, ChatMessageType } from '../types/ChatMessageType';
import { ContactType } from '../types/ContactType';

type AppRootStateType = RootStateType<chatMessagesSliceType>;

/**
 * Get chat
 */
export const getChat = createAppAsyncThunk<ChatMessagesType, ChatMessageType['contactId']>(
	'chatApp/chat/getChat',
	async (contactId) => {
		const response = await axios.get(`/api/chat/chats/${contactId}`);

		const data = (await response.data) as ChatMessagesType;

		return data;
	}
);

/**
 * Send message
 */
export const sendMessage = createAppAsyncThunk<ChatMessageType, { messageText: string; contactId: ContactType['id'] }>(
	'chatApp/chat/sendMessage',
	async ({ messageText, contactId }, { dispatch }) => {
		const response = await axios.post(`/api/chat/chats/${contactId}`, messageText);

		const data = (await response.data) as ChatMessageType;

		dispatch(getChatList());

		return data;
	}
);

const initialState: ChatMessagesType = [];

/**
 * Chat App Chat Messages Slice
 */
export const chatMessagesSlice = createSlice({
	name: 'chatApp/chat',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getChat.fulfilled, (state, action) => action.payload)
			.addCase(sendMessage.fulfilled, (state, action) => [...state, action.payload]);
	}
});

export const selectChat = (state: AppRootStateType) => state.chatApp.chat;

export type chatMessagesSliceType = typeof chatMessagesSlice;

export default chatMessagesSlice.reducer;
