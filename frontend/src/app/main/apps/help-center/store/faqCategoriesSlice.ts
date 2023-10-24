import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { FaqCategoryType, FaqCategoriesType } from '../types/FaqCategoryType';

export type AppRootStateType = RootStateType<faqCategoriesSliceType>;

/**
 * Get FaqCategories from server
 */
export const getFaqCategories = createAppAsyncThunk<FaqCategoriesType>('helpCenterApp/faqCategories/get', async () => {
	const response = await axios.get('api/help-center/faqs/categories');

	const data = (await response.data) as FaqCategoriesType;

	return data;
});

const faqCategoriesAdapter = createEntityAdapter<FaqCategoryType>({});

export const { selectAll: selectFaqCategories, selectById: selectFaqCategoryById } = faqCategoriesAdapter.getSelectors(
	(state: AppRootStateType) => state.helpCenterApp.faqCategories
);

const initialState = faqCategoriesAdapter.getInitialState();

/**
 * The Help Center App faqCategories slice.
 */
export const faqCategoriesSlice = createSlice({
	name: 'helpCenterApp/faqCategories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFaqCategories.fulfilled, (state, action) =>
			faqCategoriesAdapter.setAll(state, action.payload)
		);
	}
});

export type faqCategoriesSliceType = typeof faqCategoriesSlice;

export default faqCategoriesSlice.reducer;
