import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { DeepPartial } from 'react-hook-form';
import { AsyncStateType, RootStateType } from 'app/store/types';
import { UserType } from '../types/UserType';

type AppRootStateType = RootStateType<userSliceType>;

/**
 * Get user data
 */
export const getUserData = createAppAsyncThunk<UserType>('chatApp/user/getUserData', async () => {
	const response = await axios.get('/api/chat/user');

	const data = (await response.data) as UserType;

	return data;
});

/**
 * Update user data
 */
export const updateUserData = createAppAsyncThunk<UserType, DeepPartial<UserType>>(
	'chatApp/user/updateUserData',
	async (newData) => {
		const response = await axios.post('/api/chat/user', newData);

		const data = (await response.data) as UserType;

		return data;
	}
);

const initialState: AsyncStateType<UserType> = {
	data: null,
	status: 'idle'
};

/**
 * Chat App User Slice
 */
export const userSlice = createSlice({
	name: 'chatApp/user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUserData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getUserData.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'succeeded';
			})
			.addCase(updateUserData.fulfilled, (state, action) => {
				state.data = action.payload;
			});
	}
});

export const selectUser = (state: AppRootStateType) => state.chatApp.user;

export type userSliceType = typeof userSlice;

export default userSlice.reducer;
