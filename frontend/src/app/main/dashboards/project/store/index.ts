import { combineReducers } from '@reduxjs/toolkit';
import projects from './projectsSlice';
import widgets from './widgetsSlice';

/**
 * The Project dashboard reducer.
 */
const reducer = combineReducers({
	widgets,
	projects
});

export default reducer;
