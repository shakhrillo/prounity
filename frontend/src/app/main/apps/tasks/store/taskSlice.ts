import { createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import history from '@history';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { AsyncStateType, RootStateType } from 'app/store/types';
import { PartialDeep } from 'type-fest';
import SectionModel from '../models/SectionModel';
import TaskModel from '../models/TaskModel';
import { TaskType } from '../types/TaskType';

export type AppRootStateType = RootStateType<taskSliceType>;

/**
 * Get task from the server.
 */
export const getTask = createAppAsyncThunk<TaskType, string>(
	'tasksApp/task/getTask',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(`/api/tasks/${id}`);

			const data = (await response.data) as TaskType;

			return data;
		} catch (error) {
			history.push({ pathname: `/apps/tasks` });
			const axiosError = error as AxiosError;
			return rejectWithValue(axiosError.message);
		}
	}
);

/**
 * Add task to the server.
 */
export const addTask = createAppAsyncThunk<TaskType, PartialDeep<TaskType>>('tasksApp/tasks/addTask', async (task) => {
	const response = await axios.post('/api/tasks', task);

	const data = (await response.data) as TaskType;

	return data;
});

/**
 * Update task on the server.
 */
export const updateTask = createAppAsyncThunk<TaskType, TaskType>('tasksApp/tasks/updateTask', async (task) => {
	const response = await axios.put(`/api/tasks/${task.id}`, task);

	const data = (await response.data) as TaskType;

	return data;
});

/**
 * Remove task from the server.
 */
export const removeTask = createAppAsyncThunk<string, string>('tasksApp/tasks/removeTask', async (id) => {
	const response = await axios.delete(`/api/tasks/${id}`);

	await response.data;

	return id;
});

const initialState: AsyncStateType<TaskType> = {
	data: null,
	status: 'idle'
};

/**
 * The Tasks app task slice.
 */
export const taskSlice = createSlice({
	name: 'tasksApp/task',
	initialState,
	reducers: {
		newTask: (state, action) => {
			const type = action.payload as TaskType['type'];

			if (type === 'section') {
				state.data = SectionModel({});
			}
			if (type === 'task') {
				state.data = TaskModel({});
			}
			return initialState;
		},
		resetTask: () => initialState
	},

	extraReducers: (builder) => {
		builder
			.addCase(getTask.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getTask.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(addTask.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(updateTask.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(removeTask.fulfilled, () => initialState);
	}
});

export const selectTask = (state: AppRootStateType) => state.tasksApp.task;

export const { resetTask, newTask } = taskSlice.actions;

export type taskSliceType = typeof taskSlice;

export default taskSlice.reducer;
