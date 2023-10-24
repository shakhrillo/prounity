import { createSlice } from '@reduxjs/toolkit';
import { RootStateType } from 'app/store/types';
import { DialogProps } from '@mui/material';

type AppRootStateType = RootStateType<dialogSliceType>;

/**
 * The initial state of the dialog slice.
 */
const initialState: DialogProps = {
	open: false,
	children: null
};

/**
 * The Dialog slice
 */
export const dialogSlice = createSlice({
	name: 'fuse/dialog',
	initialState,
	reducers: {
		openDialog: (state, action) => {
			state.open = true;
			state.children = (action.payload as DialogProps)?.children;
		},
		closeDialog: () => initialState
	}
});

export const { closeDialog, openDialog } = dialogSlice.actions;

export const selectFuseDialogState = (state: AppRootStateType) => state.fuse.dialog.open;

export const selectFuseDialogProps = (state: AppRootStateType) => state.fuse.dialog;

export type dialogSliceType = typeof dialogSlice;

export default dialogSlice.reducer;
