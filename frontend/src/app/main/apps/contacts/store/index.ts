import { RootStateType } from 'app/store/types';
import { combineReducers } from '@reduxjs/toolkit';
import tags, { tagsSliceType } from './tagsSlice';
import contacts, { contactsSliceType } from './contactsSlice';
import countries, { countriesSliceType } from './countriesSlice';
import contact, { contactSliceType } from './contactSlice';

/**
 * The Contacts App slices.
 */

const reducer = combineReducers({
	tags,
	countries,
	contacts,
	contact
});

export default reducer;

export type AppRootStateType = RootStateType<[contactsSliceType, tagsSliceType, countriesSliceType, contactSliceType]>;
