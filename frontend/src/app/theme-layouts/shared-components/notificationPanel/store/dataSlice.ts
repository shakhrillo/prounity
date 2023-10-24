import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { NotificationModelType } from 'app/theme-layouts/shared-components/notificationPanel/models/NotificationModel';
import { RootStateType } from 'app/store/types';

export type AppRootStateType = RootStateType<dataSliceType>;

/**
 * Gets the notifications from the server.
 */
export const getNotifications = createAppAsyncThunk('notificationPanel/getData', async () => {
	const response = await axios.get('/api/notifications');

	const data = (await response.data) as NotificationModelType[];

	return data;
});

/**
 * Dismisses all notifications.
 */
export const dismissAll = createAppAsyncThunk('notificationPanel/dismissAll', async () => {
	const response = await axios.delete('/api/notifications');
	await response.data;

	return true;
});

/**
 * Dismisses a single notification.
 */
export const dismissItem = createAppAsyncThunk('notificationPanel/dismissItem', async (id: string) => {
	const response = await axios.delete(`/api/notifications/${id}`);
	await response.data;

	return id;
});

/**
 * Adds a notification.
 */
export const addNotification = createAppAsyncThunk(
	'notificationPanel/addNotification',
	async (item: NotificationModelType) => {
		const response = await axios.post(`/api/notifications`, { ...item });

		const data = (await response.data) as NotificationModelType;

		return data;
	}
);

const notificationsAdapter = createEntityAdapter<NotificationModelType>();

const initialState = notificationsAdapter.getInitialState();

export const { selectAll: selectNotifications, selectById: selectNotificationsById } =
	notificationsAdapter.getSelectors((state: AppRootStateType) => state.notificationPanel.data);

/**
 * The notification panel slice.
 */
export const dataSlice = createSlice({
	name: 'notificationPanel/data',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(dismissItem.fulfilled, (state, action) =>
			notificationsAdapter.removeOne(state, action.payload)
		);
		builder.addCase(dismissAll.fulfilled, (state) => notificationsAdapter.removeAll(state));
		builder.addCase(getNotifications.fulfilled, (state, action) =>
			notificationsAdapter.addMany(notificationsAdapter.getInitialState(), action.payload)
		);
		builder.addCase(addNotification.fulfilled, (state, action) =>
			notificationsAdapter.addOne(notificationsAdapter.getInitialState(), action.payload)
		);
	}
});

export type dataSliceType = typeof dataSlice;

export default dataSlice.reducer;
