import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import axios from 'axios';
import { CountriesType, CountryType } from '../types/CountryType';
import { AppRootStateType } from '.';

/**
 * Get countries from server
 */
export const getCountries = createAppAsyncThunk('contactsApp/countries/getCountries', async () => {
	const response = await axios.get('/api/countries');

	const data = (await response.data) as CountriesType;

	return data;
});

const countriesAdapter = createEntityAdapter<CountryType>({});

export const { selectAll: selectCountries, selectById: selectCountriesById } = countriesAdapter.getSelectors(
	(state: AppRootStateType) => state.contactsApp?.countries
);

/**
 * The Contacts App countries slice.
 */
export const countriesSlice = createSlice({
	name: 'contactsApp/countries',
	initialState: countriesAdapter.getInitialState([]),
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(getCountries.fulfilled, (state, action) => countriesAdapter.setAll(state, action.payload));
	}
});

export type countriesSliceType = typeof countriesSlice;

export default countriesSlice.reducer;
