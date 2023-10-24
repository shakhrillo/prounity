import { createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import history from '@history';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { DeepPartial } from 'react-hook-form';
import { AsyncStateType } from 'app/store/types';
import { ContactType } from '../types/ContactType';
import ContactModel from '../models/ContactModel';
import { AppRootStateType } from '.';

/**
 * Get contacts from server
 */
export const getContact = createAppAsyncThunk<ContactType, string>(
	'contactsApp/task/getContact',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(`/api/contacts/${id}`);

			const data = (await response.data) as ContactType;

			return data;
		} catch (error) {
			history.push({ pathname: `/apps/contacts` });

			const axiosError = error as AxiosError;
			return rejectWithValue(axiosError.message);
		}
	}
);

export const addContact = createAppAsyncThunk<ContactType, ContactType>(
	'contacts/add',
	async (contact: ContactType, { rejectWithValue }) => {
		try {
			const response = await axios.post('/api/contacts', contact);
			return response.data as ContactType;
		} catch (error) {
			const axiosError = error as AxiosError;
			return rejectWithValue(axiosError.message);
		}
	}
);

/**
 * Update contact
 */
export const updateContact = createAppAsyncThunk<ContactType, DeepPartial<ContactType>>(
	'contactsApp/contacts/updateContact',
	async (contact) => {
		const response = await axios.put(`/api/contacts/${contact.id}`, contact);

		const data = (await response.data) as ContactType;

		return data;
	}
);

/**
 * Remove contact
 */
export const removeContact = createAppAsyncThunk<string, string>('contactsApp/contacts/removeContact', async (id) => {
	const response = await axios.delete(`/api/contacts/${id}`);

	await response.data;

	return id;
});

const initialState: AsyncStateType<ContactType> = {
	data: null,
	status: 'idle'
};

/**
 * The Contacts App Contact slice.
 */
export const contactSlice = createSlice({
	name: 'contactsApp/contact',
	initialState,
	reducers: {
		newContact: (state) => {
			state.data = ContactModel({});
		},
		resetContact: () => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(getContact.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getContact.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'succeeded';
			})
			.addCase(updateContact.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'succeeded';
			})
			.addCase(removeContact.fulfilled, (state) => {
				state.data = null;
			});
	}
});

export const selectContact = (state: AppRootStateType) => state.contactsApp.contact;

export const { resetContact, newContact } = contactSlice.actions;

export type contactSliceType = typeof contactSlice;

export default contactSlice.reducer;
