import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { addContact, removeContact, updateContact } from './contactSlice';
import { ContactType, ContactsType } from '../types/ContactType';
import { AppRootStateType } from '.';

/**
 * Get contacts from server
 */
export const getContacts = createAppAsyncThunk<ContactsType>('contactsApp/contacts/getContacts', async () => {
	const response = await axios.get('/api/contacts');

	const data = (await response.data) as ContactsType;

	return data;
});

const contactsAdapter = createEntityAdapter<ContactType>({});

export const selectSearchText = (state: AppRootStateType) => state.contactsApp?.contacts?.searchText;

export const { selectAll: selectContacts, selectById: selectContactsById } = contactsAdapter.getSelectors(
	(state: AppRootStateType) => state.contactsApp?.contacts
);

export const selectFilteredContacts = createSelector([selectContacts, selectSearchText], (contacts, searchText) => {
	if (searchText.length === 0) {
		return contacts;
	}
	return FuseUtils.filterArrayByString(contacts, searchText);
});

type GroupedContactsType = {
	group: string;
	children?: ContactType[];
};

type AccumulatorType = {
	[key: string]: GroupedContactsType;
};

/**
 * Select grouped contacts
 */
export const selectGroupedFilteredContacts = createSelector([selectFilteredContacts], (contacts) => {
	const groupedObject = contacts
		.sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }))
		.reduce<AccumulatorType>((r, e) => {
			// get first letter of name of current element
			const group = e.name[0];

			// if there is no property in accumulator with this letter create it
			if (!r[group]) r[group] = { group, children: [e] };
			// if there is push current element to children array for that letter
			else {
				r[group]?.children?.push(e);
			}

			// return accumulator
			return r;
		}, {});

	return groupedObject;
});

const initialState = contactsAdapter.getInitialState({
	searchText: ''
});

/**
 * The Contacts App Contacts slice.
 */
export const contactsSlice = createSlice({
	name: 'contactsApp/contacts',
	initialState,
	reducers: {
		setContactsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload as string;
			},
			prepare: (event: React.ChangeEvent<HTMLInputElement>) => ({
				payload: event.target.value || '',
				meta: undefined,
				error: null
			})
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(updateContact.fulfilled, (state, action) => contactsAdapter.upsertOne(state, action.payload))
			.addCase(addContact.fulfilled, (state, action) => contactsAdapter.addOne(state, action.payload))
			.addCase(removeContact.fulfilled, (state, action) => contactsAdapter.removeOne(state, action.payload))
			.addCase(getContacts.fulfilled, (state, action) => {
				contactsAdapter.setAll(state, action.payload);
				state.searchText = '';
			});
	}
});

export const { setContactsSearchText } = contactsSlice.actions;

export type contactsSliceType = typeof contactsSlice;

export default contactsSlice.reducer;
