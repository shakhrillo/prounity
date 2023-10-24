import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';

type AppRootStateType = RootStateType<widgetsSliceType>;

export type WidgetsType = {
	[key: string]: unknown;
};

/**
 * Get the widgets data.
 */
export const getWidgets = createAppAsyncThunk('analyticsDashboardApp/widgets/getWidgets', async () => {
	const response = await axios.get('/api/dashboards/analytics/widgets');

	const data = (await response.data) as WidgetsType;

	return data;
});

const initialState: WidgetsType = {};

/**
 * The analytics dashboard widgets slice.
 */
export const widgetsSlice = createSlice({
	name: 'analyticsDashboardApp/widgets',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getWidgets.fulfilled, (state, action) => action.payload);
	}
});

export const selectWidgets = (state: AppRootStateType) => state.analyticsDashboardApp.widgets;

export type widgetsSliceType = typeof widgetsSlice;

export default widgetsSlice.reducer;
