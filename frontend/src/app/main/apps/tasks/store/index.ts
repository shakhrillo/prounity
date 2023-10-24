import { combineReducers } from '@reduxjs/toolkit';
import task from './taskSlice';
import tasks from './tasksSlice';
import tags from './tagsSlice';

/**
 * The Tasks App reducer.
 */
const reducer = combineReducers({
	tags,
	tasks,
	task
});

export default reducer;
