import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';
import { addTask, updateTask } from './taskSlice';
import { removeLabel } from '../../notes/store/labelsSlice';
import { TaskType, TasksType } from '../types/TaskType';

export type AppRootStateType = RootStateType<tasksSliceType>;

/**
 * Get tasks from the server.
 */
export const getTasks = createAppAsyncThunk<TasksType>('tasksApp/tasks/getTasks', async () => {
	const response = await axios.get('/api/tasks');

	const data = (await response.data) as TasksType;

	return data;
});

/**
 * Reorder tasks on the server.
 */
export const reorderList = createAppAsyncThunk<TasksType, { startIndex: number; endIndex: number }>(
	'tasksApp/tasks/reorder',
	async ({ startIndex, endIndex }, { dispatch }) => {
		const response = await axios.post('/api/tasks/reorder', { startIndex, endIndex });

		const data = (await response.data) as TasksType;

		dispatch(
			showMessage({
				message: 'List Order Saved',
				autoHideDuration: 2000,
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'right'
				}
			})
		);

		return data;
	}
);

const tasksAdapter = createEntityAdapter<TaskType>({});

const initialState = tasksAdapter.getInitialState([]);

export const { selectAll: selectTasks, selectById: selectTasksById } = tasksAdapter.getSelectors(
	(state: AppRootStateType) => state.tasksApp.tasks
);
export const selectRemainingTasks = createSelector([selectTasks], (tasks) => {
	return tasks.filter((item) => item.type === 'task' && !item.completed).length;
});

/**
 * The Tasks app tasks slice.
 */
export const tasksSlice = createSlice({
	name: 'tasksApp/tasks',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(reorderList.fulfilled, (state, action) => {
				tasksAdapter.setAll(state, action.payload);
			})
			.addCase(getTasks.fulfilled, (state, action) => {
				tasksAdapter.setAll(state, action.payload);
			})
			.addCase(updateTask.fulfilled, (state, action) => tasksAdapter.upsertOne(state, action.payload))
			.addCase(addTask.fulfilled, (state, action) => tasksAdapter.addOne(state, action.payload))
			.addCase(removeLabel.fulfilled, (state, action) => tasksAdapter.removeOne(state, action.payload));
	}
});

export type tasksSliceType = typeof tasksSlice;

export default tasksSlice.reducer;
