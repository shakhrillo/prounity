import _ from '@lodash';
import mockApi from '../mock-api.json';
import mock from '../mock';
import CourseType from '../../app/main/apps/academy/types/CourseType';
import { Params } from '../ExtendedMockAdapter';

const demoCourseContent = mockApi.components.examples.academy_demo_course_content.value;
const exampleCourseSteps = mockApi.components.examples.academy_demo_course_steps.value;

const steps = exampleCourseSteps.map((item) => ({
	...item,
	content: `${item.content} ${demoCourseContent}`
}));
const courses = mockApi.components.examples.academy_courses.value;
const categoriesDB = mockApi.components.examples.academy_categories.value;

const coursesDB = courses.map((course) => ({
	...course,
	steps
}));

mock.onGet('/api/academy/courses').reply(() => {
	return [200, coursesDB];
});

mock.onGet('/api/academy/courses/:courseId').reply((config) => {
	const { courseId } = config.params as Params;

	const course = _.find(coursesDB, { id: courseId });

	if (!course) {
		return [404, 'Requested data do not exist.'];
	}
	return [200, course];
});

mock.onPut('/api/academy/courses/:courseId').reply((config) => {
	const { courseId } = config.params as Params;

	const course = _.find(coursesDB, { id: courseId }) as CourseType;

	const newData = JSON.parse(config.data as string) as CourseType;

	if (!course) {
		return [404, 'Requested data do not exist.'];
	}

	_.assign(course, _.merge({}, course, newData));

	if (newData?.progress?.currentStep === course?.totalSteps) {
		_.assign(course, _.merge({}, course, { progress: { completed: course.progress.completed + 1 } }));
	}

	return [200, course];
});

mock.onGet('/api/academy/categories').reply(() => {
	return [200, categoriesDB];
});
