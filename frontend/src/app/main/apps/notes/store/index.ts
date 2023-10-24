import { combineReducers } from '@reduxjs/toolkit';
import labels from './labelsSlice';
import notes from './notesSlice';

/**
 * The Notes store reducer.
 */
const reducer = combineReducers({
	notes,
	labels
});

export default reducer;
