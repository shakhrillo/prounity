import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import CategoryType from '../types/CategoryType';

type AppRootStateType = RootStateType<CategorySliceType>;

/**
 * Gets the categories.
 */
export const getCategories = createAppAsyncThunk('academyApp/categories/getCategories', async () => {
	const response = await axios.get('/api/academy/categories');

	const data = (await response.data) as CategoryType[];

	return data;
});

const categoriesAdapter = createEntityAdapter<CategoryType>();

const initialState = categoriesAdapter.getInitialState();

export const { selectAll: selectCategories, selectById: selectCategoryById } = categoriesAdapter.getSelectors(
	(state: AppRootStateType) => state.academyApp.categories
);

/**
 * The Academy App categories slice.
 */
export const categorySlice = createSlice({
	name: 'academyApp/categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCategories.fulfilled, (state, action) => categoriesAdapter.setAll(state, action.payload));
	}
});

export type CategorySliceType = typeof categorySlice;

export default categorySlice.reducer;
