import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import { LabelType, LabelsType } from '../types/LabelType';

export type AppRootStateType = RootStateType<labelsSliceType>;

/**
 * Get labels from server
 */
export const getLabels = createAppAsyncThunk<LabelsType>('mailboxApp/labels/getLabels', async () => {
	const response = await axios.get('/api/mailbox/labels');

	const data = (await response.data) as LabelsType;

	return data;
});

const labelsAdapter = createEntityAdapter<LabelType>({});

const initialState = labelsAdapter.getInitialState();

export const {
	selectAll: selectLabels,
	selectEntities: selectLabelsEntities,
	selectById
} = labelsAdapter.getSelectors((state: AppRootStateType) => state.mailboxApp.labels);

/**
 * The Mailbox App labels slice.
 */
export const labelsSlice = createSlice({
	name: 'mailboxApp/labels',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getLabels.fulfilled, (state, action) => labelsAdapter.setAll(state, action.payload));
	}
});

export const selectLabelById = (id: string) => (state: AppRootStateType) => selectById(state, id);

export type labelsSliceType = typeof labelsSlice;

export default labelsSlice.reducer;
