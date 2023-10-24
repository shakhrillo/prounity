import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';

type AppRootStateType = RootStateType<widgetsSliceType>;

type WidgetsType = {
	[key: string]: unknown;
};

export const getWidgets = createAppAsyncThunk('projectDashboardApp/widgets/getWidgets', async () => {
	const response = await axios.get('/api/dashboards/project/widgets');
	const data = (await response.data) as WidgetsType;

	return data;
});

const initialState: WidgetsType = {};

/**
 * The project dashboard widgets slice.
 */
export const widgetsSlice = createSlice({
	name: 'projectDashboardApp/widgets',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getWidgets.fulfilled, (state, action) => action.payload);
	}
});

export const selectWidgets = (state: AppRootStateType) => state.projectDashboardApp.widgets;

export type widgetsSliceType = typeof widgetsSlice;

export default widgetsSlice.reducer;
