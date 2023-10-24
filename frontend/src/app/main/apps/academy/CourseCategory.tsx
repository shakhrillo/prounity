import { darken, lighten } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { useAppSelector } from 'app/store';
import _ from '@lodash';
import { selectCategories } from './store/categoriesSlice';
import CourseType from './types/CourseType';

type CourseCategoryProps = {
	slug: CourseType['slug'];
};

/**
 * The CourseCategory component.
 */
function CourseCategory(props: CourseCategoryProps) {
	const { slug } = props;

	const categories = useAppSelector(selectCategories);

	const category = _.find(categories, { slug });

	return (
		<Chip
			className="font-semibold text-12"
			label={category?.title}
			sx={{
				color: (theme) =>
					theme.palette.mode === 'light' ? darken(category?.color, 0.4) : lighten(category?.color, 0.8),
				backgroundColor: (theme) =>
					theme.palette.mode === 'light' ? lighten(category?.color, 0.8) : darken(category?.color, 0.1)
			}}
			size="small"
		/>
	);
}

export default CourseCategory;
