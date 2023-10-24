import { RootStateType } from 'app/store/types';
import { createSlice } from '@reduxjs/toolkit';

type initialStateType = boolean;

const initialState: initialStateType = false;

/**
 * The notificationPanel state slice.
 */
export const stateSlice = createSlice({
	name: 'notificationPanel/state',
	initialState,
	reducers: {
		toggleNotificationPanel: (state) => !state,
		openNotificationPanel: () => true,
		closeNotificationPanel: () => false
	}
});

export const { toggleNotificationPanel, openNotificationPanel, closeNotificationPanel } = stateSlice.actions;

type AppRootStateType = RootStateType<typeof stateSlice>;

export const selectNotificationPanelState = (state: AppRootStateType) => state.notificationPanel.state;

export default stateSlice.reducer;
