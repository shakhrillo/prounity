import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { selectGuideCategories } from './guideCategoriesSlice';
import { GuideType, GuidesType } from '../types/GuideType';

export type DynammicAppRootStateType = RootStateType<guidesSliceType>;

/**
 * Get Guides from server
 */
export const getGuides = createAppAsyncThunk<GuidesType, string | void>(
	'helpCenterApp/guides/getGuides',
	async (categorySlug) => {
		const url = categorySlug ? `/api/help-center/guides/${categorySlug}` : '/api/help-center/guides';

		const response = await axios.get(url);

		const data = (await response.data) as GuidesType;

		return data;
	}
);

const guidesAdapter = createEntityAdapter<GuideType>({});

export const { selectAll: selectGuides, selectById: selectGuideById } = guidesAdapter.getSelectors(
	(state: DynammicAppRootStateType) => state.helpCenterApp.guides
);

/**
 * The Help Center App guides slice.
 */
export const guidesSlice = createSlice({
	name: 'helpCenterApp/guides',
	initialState: guidesAdapter.getInitialState({}),
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getGuides.fulfilled, (state, action) => guidesAdapter.setAll(state, action.payload));
	}
});

export const selectGroupedGuides = createSelector([selectGuides, selectGuideCategories], (guides, categories) => {
	return categories.map((category) => ({
		...category,
		guides: _.filter(guides, { categoryId: category.id })
	}));
});

export type guidesSliceType = typeof guidesSlice;

export default guidesSlice.reducer;
