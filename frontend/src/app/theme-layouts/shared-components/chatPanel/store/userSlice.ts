import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { DeepPartial } from 'react-hook-form';
import { RootStateType } from 'app/store/types';
import { PartialDeep } from 'type-fest';
import { UserType } from '../types/UserType';

type AppRootStateType = RootStateType<userSliceType>;

/**
 * Get the user data.
 */
export const getUserData = createAppAsyncThunk<UserType>('chatPanel/user/getUserData', async () => {
	const response = await axios.get('/api/chat/user');

	const data = (await response.data) as UserType;

	return data;
});

/**
 * Update the user data.
 */
export const updateUserData = createAppAsyncThunk<UserType, DeepPartial<UserType>>(
	'chatPanel/user/updateUserData',
	async (newData) => {
		const response = await axios.post('/api/chat/user', newData);

		const data = (await response.data) as UserType;

		return data;
	}
);

const initialState: PartialDeep<UserType> = {};

/**
 * The slice for the chatpanel user.
 */
export const userSlice = createSlice({
	name: 'chatPanel/user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUserData.fulfilled, (state, action) => action.payload)
			.addCase(updateUserData.fulfilled, (state, action) => action.payload);
	}
});

export const selectUser = (state: AppRootStateType) => state.chatPanel.user;

export type userSliceType = typeof userSlice;

export default userSlice.reducer;
