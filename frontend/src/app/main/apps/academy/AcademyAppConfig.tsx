import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import lazyWithReducer from 'app/store/lazyWithReducer';
import reducer from './store';

const AcademyApp = lazyWithReducer('academyApp', () => import('./AcademyApp'), reducer);
const Course = lazy(() => import('./course/Course'));
const Courses = lazy(() => import('./courses/Courses'));

/**
 * The Academy app config.
 */
const AcademyAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'apps/academy',
			element: <AcademyApp />,
			children: [
				{
					path: '',
					element: <Navigate to="/apps/academy/courses" />
				},
				{
					path: 'courses/:courseId/*',
					element: <Course />
				},
				{
					path: 'courses',
					element: <Courses />
				}
			]
		}
	]
};

export default AcademyAppConfig;
