import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { FaqsType, FaqType } from '../types/FaqType';

export type AppRootStateType = RootStateType<faqsMostSliceType>;

/**
 * Get FaqsMost from server
 */
export const getFaqsMost = createAppAsyncThunk<FaqsType>('helpCenterApp/faqsMost/get', async () => {
	const response = await axios.get('/api/help-center/faqs/most-asked');

	const data = (await response.data) as FaqsType;

	return data;
});

const faqsMostAdapter = createEntityAdapter<FaqType>({});

export const { selectAll: selectFaqsMost, selectById: selectFaqsMostById } = faqsMostAdapter.getSelectors(
	(state: AppRootStateType) => state.helpCenterApp?.faqsMost
);

/**
 * The Help Center App faqsMost slice.
 */
export const faqsMostSlice = createSlice({
	name: 'helpCenterApp/faqsMost',
	initialState: faqsMostAdapter.getInitialState({}),
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFaqsMost.fulfilled, (state, action) => faqsMostAdapter.setAll(state, action.payload));
	}
});

export type faqsMostSliceType = typeof faqsMostSlice;

export default faqsMostSlice.reducer;
