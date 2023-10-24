import { createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { GuideType } from '../types/GuideType';
import GuideModel from '../models/GuideModel';

export type AppRootStateType = RootStateType<guideSliceType>;

/**
 * Get Guide from server
 */
export const getGuide = createAppAsyncThunk<GuideType, { categorySlug: string; guideSlug: string }>(
	'helpCenterApp/guide/get',
	async (arg, { rejectWithValue }) => {
		try {
			const response = await axios.get(`/api/help-center/guides/${arg.categorySlug}/${arg.guideSlug}`);
			return response.data as GuideType;
		} catch (error) {
			const axiosError = error as AxiosError;
			return rejectWithValue(axiosError.message);
		}
	}
);

const initialState: GuideType = GuideModel({});

/**
 * The Help Center App guide slice.
 */
export const guideSlice = createSlice({
	name: 'helpCenterApp/guide',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getGuide.fulfilled, (state, action) => action.payload);
	}
});

export const selectGuide = (state: AppRootStateType) => state.helpCenterApp.guide;

export type guideSliceType = typeof guideSlice;

export default guideSlice.reducer;
