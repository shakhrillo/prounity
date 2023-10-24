import { combineReducers } from '@reduxjs/toolkit';
import events from './eventsSlice';
import labels from './labelsSlice';

/**
 * The Calendar App reducer.
 */
const reducer = combineReducers({ events, labels });

export default reducer;
