import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';
import { AsyncStateType, RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { PartialDeep } from 'type-fest';
import CourseType from '../types/CourseType';

type AppRootStateType = RootStateType<CourseSliceType>;

/**
 * Gets the course.
 */
export const getCourse = createAppAsyncThunk('academyApp/course/getCourse', async (courseId: string) => {
	const response = await axios.get(`/api/academy/courses/${courseId}`);

	const data = (await response.data) as CourseType;

	return data;
});

/**
 * Updates the course.
 */
export const updateCourse = createAppAsyncThunk<CourseType, PartialDeep<CourseType>>(
	'academyApp/course/updateCourse',
	async (_data, { getState, dispatch }) => {
		const AppState = getState() as AppRootStateType;

		const { id } = AppState.academyApp.course.data;

		const response = await axios.put(`/api/academy/courses/${id}`, _data);

		const data = (await response.data) as CourseType;

		dispatch(showMessage({ message: 'Course Saved' }));

		return data;
	}
);

const initialState: AsyncStateType<CourseType> = {
	data: null,
	status: 'idle'
};

/**
 * The Academy App course slice.
 */
export const courseSlice = createSlice({
	name: 'academyApp/course',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCourse.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(getCourse.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = 'succeeded';
		});
		builder.addCase(updateCourse.fulfilled, (state, action) => {
			state.data = action.payload;
		});
	}
});

export const selectCourse = (state: AppRootStateType) => state.academyApp.course;

export type CourseSliceType = typeof courseSlice;

export default courseSlice.reducer;
