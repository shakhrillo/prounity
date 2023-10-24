import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import axios from 'axios';
import { PartialDeep } from 'type-fest';
import { RootStateType } from 'app/store/types';
import { LabelType, LabelsType } from '../types/LabelType';

export type AppRootStateType = RootStateType<labelsSliceType>;

/**
 * Get labels from server
 */
export const getLabels = createAppAsyncThunk<LabelsType>('notesApp/labels/getLabels', async () => {
	const response = await axios.get('/api/notes/labels');

	const data = (await response.data) as LabelsType;

	return data;
});

/**
 * Create new label
 */
export const createLabel = createAppAsyncThunk<LabelType, LabelType>('notesApp/labels/createLabel', async (label) => {
	const response = await axios.post(`/api/notes/labels`, label);

	const data = (await response.data) as LabelType;

	return data;
});

/**
 * Update label
 */
export const updateLabel = createAppAsyncThunk<LabelType, PartialDeep<LabelType>>(
	'notesApp/labels/updateLabel',
	async (label) => {
		const response = await axios.put(`/api/notes/labels/${label.id}`, label);
		const data = (await response.data) as LabelType;

		return data;
	}
);

/**
 * Remove label
 */
export const removeLabel = createAppAsyncThunk<string, string>('notesApp/labels/removeLabel', async (id) => {
	const response = await axios.delete(`/api/notes/labels/${id}`);
	const data = (await response.data) as string;

	return data;
});

const labelsAdapter = createEntityAdapter<LabelType>({});
const initialState = labelsAdapter.getInitialState({ labelsDialogOpen: false });

export const {
	selectAll: selectLabels,
	selectEntities: selectLabelsEntities,
	selectById: selectLabelById
} = labelsAdapter.getSelectors((state: AppRootStateType) => state.notesApp?.labels);

/**
 * The Notes labels slice.
 */
export const labelsSlice = createSlice({
	name: 'notesApp/labels',
	initialState,
	reducers: {
		openLabelsDialog: (state) => {
			state.labelsDialogOpen = true;
		},
		closeLabelsDialog: (state) => {
			state.labelsDialogOpen = false;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getLabels.fulfilled, (state, action) => {
				labelsAdapter.setAll(state, action.payload);
			})
			.addCase(createLabel.fulfilled, (state, action) => labelsAdapter.addOne(state, action.payload))
			.addCase(updateLabel.fulfilled, (state, action) => labelsAdapter.upsertOne(state, action.payload))
			.addCase(removeLabel.fulfilled, (state, action) => labelsAdapter.removeOne(state, action.payload));
	}
});

export const { openLabelsDialog, closeLabelsDialog } = labelsSlice.actions;

export const selectLabelsDialogOpen = (state: AppRootStateType) => state.notesApp?.labels.labelsDialogOpen;

export type labelsSliceType = typeof labelsSlice;

export default labelsSlice.reducer;
