import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import axios from 'axios';
import { PartialDeep } from 'type-fest';
import { RootStateType } from 'app/store/types';
import { ChangeEvent } from 'react';
import { NotesType, NoteType } from '../types/NoteType';

export type AppRootStateType = RootStateType<notesSliceType>;

/**
 * Route params type
 */
export type RouteParamsType = {
	filter: string;
	id: string;
};

/**
 * Get notes from server
 */
export const getNotes = createAppAsyncThunk<NotesType, RouteParamsType>(
	'notesApp/notes/getNotes',
	async (routeParams) => {
		const { filter, id } = routeParams;

		let url = '';

		if (filter === 'labels') {
			url = `/api/notes/labels/${id}`;
		}

		if (filter === 'archive') {
			url = `/api/notes/archive`;
		}

		if (filter === 'reminders') {
			url = `/api/notes/reminders`;
		}

		if (!filter) {
			url = `/api/notes`;
		}

		const response = await axios.get(url);

		const data = (await response.data) as NotesType;

		return data;
	}
);

/**
 * Create new note
 */
export const createNote = createAppAsyncThunk<NoteType, PartialDeep<NoteType>>(
	'notesApp/notes/createNote',
	async (note) => {
		const response = await axios.post('/api/notes', note);

		const data = (await response.data) as NoteType;

		return data;
	}
);

/**
 * Update note
 */
export const updateNote = createAppAsyncThunk<NoteType, PartialDeep<NoteType>>(
	'notesApp/notes/updateNote',
	async (note) => {
		const response = await axios.put(`/api/notes/${note.id}`, note);

		const data = (await response.data) as NoteType;

		return data;
	}
);

/**
 * Remove note
 */
export const removeNote = createAppAsyncThunk<string, string>('notesApp/notes/removeNote', async (id, { dispatch }) => {
	const response = await axios.delete(`/api/notes/${id}`);

	const data = (await response.data) as string;

	dispatch(closeNoteDialog());

	return data;
});

const notesAdapter = createEntityAdapter<NoteType>({});

export const {
	selectAll: selectNotes,
	selectEntities: selectNotesEntities,
	selectById: selectNoteById
} = notesAdapter.getSelectors((state: AppRootStateType) => state.notesApp.notes);

const initialState = notesAdapter.getInitialState<{
	searchText: string;
	noteDialogId: string | null;
	variateDescSize: boolean;
}>({
	searchText: '',
	noteDialogId: null,
	variateDescSize: true
});

/**
 * The Notes App notes slice.
 */
export const notesSlice = createSlice({
	name: 'notesApp/notes',
	initialState,
	reducers: {
		setNotesSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload as string;
			},
			prepare: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => ({
				payload: event.target.value || '',
				meta: undefined,
				error: null
			})
		},
		resetNotesSearchText: (state) => {
			state.searchText = '';
		},
		toggleVariateDescSize: (state) => {
			state.variateDescSize = !state.variateDescSize;
		},
		openNoteDialog: (state, action) => {
			state.noteDialogId = action.payload as string;
		},
		closeNoteDialog: (state) => {
			state.noteDialogId = null;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNotes.fulfilled, (state, action) => notesAdapter.setAll(state, action.payload))
			.addCase(createNote.fulfilled, (state, action) => notesAdapter.addOne(state, action.payload))
			.addCase(updateNote.fulfilled, (state, action) => notesAdapter.upsertOne(state, action.payload))
			.addCase(removeNote.fulfilled, (state, action) => notesAdapter.removeOne(state, action.payload));
	}
});

export const { setNotesSearchText, resetNotesSearchText, toggleVariateDescSize, openNoteDialog, closeNoteDialog } =
	notesSlice.actions;

export const selectVariateDescSize = (state: AppRootStateType) => state.notesApp?.notes.variateDescSize;

export const selectSearchText = (state: AppRootStateType) => state.notesApp?.notes.searchText;

export const selectDialogNoteId = (state: AppRootStateType) => state.notesApp?.notes.noteDialogId;

export const selectDialogNote = createSelector([selectDialogNoteId, selectNotesEntities], (noteId, notesEntities) => {
	return notesEntities[noteId];
});

export type notesSliceType = typeof notesSlice;

export default notesSlice.reducer;
