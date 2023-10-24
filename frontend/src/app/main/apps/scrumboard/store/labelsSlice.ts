import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { LabelType, LabelsType } from '../types/LabelType';

type AppRootStateType = RootStateType<LabelsSliceType>;

/**
 * Get Labels
 */
export const getLabels = createAppAsyncThunk<LabelsType, string>('scrumboardApp/labels/getLabels', async (boardId) => {
	const response = await axios.get(`/api/scrumboard/boards/${boardId}/labels`);
	const data = (await response.data) as LabelsType;

	return data;
});

const labelsAdapter = createEntityAdapter<LabelType>({});

export const { selectAll: selectLabels, selectById } = labelsAdapter.getSelectors(
	(state: AppRootStateType) => state.scrumboardApp.labels
);

/**
 * The Scrumboard Labels Slice.
 */
export const labelsSlice = createSlice({
	name: 'scrumboardApp/labels',
	initialState: labelsAdapter.getInitialState({}),
	reducers: {
		resetLabels: () => {}
	},
	extraReducers: (builder) => {
		builder.addCase(getLabels.fulfilled, (state, action) => labelsAdapter.setAll(state, action.payload));
	}
});

export const { resetLabels } = labelsSlice.actions;

export const selectLabelById = (id: LabelType['id']) => (state: AppRootStateType) => selectById(state, id);

export type LabelsSliceType = typeof labelsSlice;

export default labelsSlice.reducer;
