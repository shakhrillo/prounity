import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { selectFaqCategories } from './faqCategoriesSlice';
import { FaqsType, FaqType } from '../types/FaqType';

export type AppRootStateType = RootStateType<faqsSliceType>;

/**
 * Get Faqs from server
 */
export const getFaqs = createAppAsyncThunk<FaqsType>('helpCenterApp/faqs/getFaqs', async () => {
	const response = await axios.get('api/help-center/faqs');

	const data = (await response.data) as FaqsType;

	return data;
});

const faqsAdapter = createEntityAdapter<FaqType>({});

export const { selectAll: selectFaqs, selectById: selectFaqById } = faqsAdapter.getSelectors(
	(state: AppRootStateType) => state.helpCenterApp.faqs
);

const initialState = faqsAdapter.getInitialState();

/**
 * The Help Center App faqs slice.
 */
export const faqsSlice = createSlice({
	name: 'helpCenterApp/faqs',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFaqs.fulfilled, (state, action) => faqsAdapter.setAll(state, action.payload));
	}
});

export const selectGroupedFaqs = createSelector([selectFaqs, selectFaqCategories], (faqs, categories) => {
	return categories.map((category) => ({
		...category,
		faqs: _.filter(faqs, { categoryId: category.id })
	}));
});

export type faqsSliceType = typeof faqsSlice;

export default faqsSlice.reducer;
