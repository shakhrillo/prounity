import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';

type AppRootStateType = RootStateType<widgetsSliceType>;

export type WidgetsType = {
	[key: string]: unknown;
};

/**
 * Get the widgets data.
 */
export const getWidgets = createAppAsyncThunk('cryptoDashboardApp/widgets/getWidgets', async () => {
	const response = await axios.get('/api/dashboards/crypto/widgets');

	const data = (await response.data) as WidgetsType;

	return data;
});

const initialState: WidgetsType = {};

/**
 * the crypto dashboard widgets slice.
 */
export const widgetsSlice = createSlice({
	name: 'cryptoDashboardApp/widgets',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getWidgets.fulfilled, (state, action) => action.payload);
	}
});

export const selectWidgets = (state: AppRootStateType) => state.cryptoDashboardApp.widgets;

export type widgetsSliceType = typeof widgetsSlice;

export default widgetsSlice.reducer;
