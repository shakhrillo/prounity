import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import { ChatListItemType } from '../types/ChatListItemType';
import { ChatListType } from '../types/ChatListType';

type AppRootStateType = RootStateType<chatListSliceType>;

/**
 * Get the chat list.
 */
export const getChatList = createAppAsyncThunk<ChatListType>('chatPanel/chatList/get', async () => {
	const response = await axios.get('/api/chat/chats');

	const data = (await response.data) as ChatListType;

	return data;
});

const chatsAdapter = createEntityAdapter<ChatListItemType>();

const initialState = chatsAdapter.getInitialState();

export const { selectAll: selectChats, selectById: selectChatById } = chatsAdapter.getSelectors(
	(state: AppRootStateType) => state.chatPanel.chatList
);

/**
 * The slice for the chat list.
 */
export const chatListSlice = createSlice({
	name: 'chatPanel/chatList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getChatList.fulfilled, (state, action) => chatsAdapter.setAll(state, action.payload));
	}
});

export type chatListSliceType = typeof chatListSlice;

export default chatListSlice.reducer;
