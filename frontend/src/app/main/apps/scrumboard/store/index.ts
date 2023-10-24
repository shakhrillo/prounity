import { combineReducers } from '@reduxjs/toolkit';
import board from './boardSlice';
import boards from './boardsSlice';
import card from './cardSlice';
import cards from './cardsSlice';
import lists from './listsSlice';
import labels from './labelsSlice';
import members from './membersSlice';

/**
 * The Scrumboard Reducer.
 */
const reducer = combineReducers({
	board,
	boards,
	card,
	cards,
	lists,
	labels,
	members
});

export default reducer;
