import LinearProgress from '@mui/material/LinearProgress';
import clsx from 'clsx';
import CourseType from './types/CourseType';

type CourseProgressProps = {
	course: CourseType;
	className?: string;
};

/**
 * The CourseProgress component.
 */
function CourseProgress(props: CourseProgressProps) {
	const { course, className } = props;

	return (
		<LinearProgress
			className={clsx('w-full h-2', className)}
			variant="determinate"
			value={(course.progress.currentStep * 100) / course.totalSteps}
			color="secondary"
		/>
	);
}

export default CourseProgress;
