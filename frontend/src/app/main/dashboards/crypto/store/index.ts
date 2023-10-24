import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';

/**
 * Crypto Dashboard reducer.
 */
const reducer = combineReducers({
	widgets
});

export default reducer;
