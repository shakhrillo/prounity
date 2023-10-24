import { combineReducers } from '@reduxjs/toolkit';
import items from './itemsSlice';

/**
 * The File Manager store reducer.
 */
const reducer = combineReducers({
	items
});

export default reducer;
