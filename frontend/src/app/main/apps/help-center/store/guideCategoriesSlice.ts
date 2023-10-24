import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { GuideCategoriesType, GuideCategoryType } from '../types/GuideCategoryType';

export type AppRootStateType = RootStateType<guideCategoriesSliceType>;

/**
 * Get GuideCategories from server
 */
export const getGuideCategories = createAppAsyncThunk<GuideCategoriesType>(
	'helpCenterApp/guideCategories/get',
	async () => {
		const response = await axios.get('api/help-center/guides/categories');
		const data = (await response.data) as GuideCategoriesType;

		return data;
	}
);

const guideCategoriesAdapter = createEntityAdapter<GuideCategoryType>({});

export const { selectAll: selectGuideCategories, selectById: selectGuideCategorieseById } =
	guideCategoriesAdapter.getSelectors((state: AppRootStateType) => state.helpCenterApp.guideCategories);

const initialState = guideCategoriesAdapter.getInitialState();

/**
 * The Help Center App guideCategories slice.
 */
export const guideCategoriesSlice = createSlice({
	name: 'helpCenterApp/guideCategories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getGuideCategories.fulfilled, (state, action) =>
			guideCategoriesAdapter.setAll(state, action.payload)
		);
	}
});

export const selectGuideCategorieseBySlug = (slug: GuideCategoryType['slug']) =>
	createSelector([selectGuideCategories], (categories) => {
		return _.find(categories, { slug });
	});

export type guideCategoriesSliceType = typeof guideCategoriesSlice;

export default guideCategoriesSlice.reducer;
