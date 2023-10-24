import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';

/**
 * The Dashboard analytics store reducer
 */
const reducer = combineReducers({
	widgets
});

export default reducer;
