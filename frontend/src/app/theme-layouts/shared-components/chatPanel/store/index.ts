import { combineReducers } from '@reduxjs/toolkit';
import chatList from './chatListSlice';
import chat from './chatMessagesSlice';
import contacts from './contactsSlice';
import user from './userSlice';
import state from './stateSlice';

/**
 * Chat panel reducer.
 */
const reducer = combineReducers({
	user,
	contacts,
	chatList,
	chat,
	state
});

export default reducer;
