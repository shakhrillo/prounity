import { combineReducers } from '@reduxjs/toolkit';
import chatList from './chatListSlice';
import chat from './chatMessagesSlice';
import contacts from './contactsSlice';
import user from './userSlice';

/**
 * The reducer of the Chat app.
 */
const reducer = combineReducers({
	user,
	contacts,
	chatList,
	chat
});

export default reducer;
