import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';
import { FilterType, FiltersType } from '../types/FilterType';

export type AppRootStateType = RootStateType<filtersSliceType>;

/**
 * Get filters from server
 */
export const getFilters = createAppAsyncThunk<FiltersType>('mailboxApp/filters/getFilters', async () => {
	const response = await axios.get('/api/mailbox/filters');

	const data = (await response.data) as FiltersType;

	return data;
});

const filtersAdapter = createEntityAdapter<FilterType>({});

export const { selectAll: selectFilters, selectById: selectFilterById } = filtersAdapter.getSelectors(
	(state: AppRootStateType) => state.mailboxApp.filters
);

/**
 * The Mailbox App filters slice.
 */
export const filtersSlice = createSlice({
	name: 'mailboxApp/filters',
	initialState: filtersAdapter.getInitialState({}),
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFilters.fulfilled, (state, action) => filtersAdapter.setAll(state, action.payload));
	}
});

export type filtersSliceType = typeof filtersSlice;

export default filtersSlice.reducer;
