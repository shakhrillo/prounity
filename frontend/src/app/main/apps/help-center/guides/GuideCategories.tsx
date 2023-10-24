import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from 'app/store';
import { useEffect } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { getGuides, selectGroupedGuides } from '../store/guidesSlice';
import GuideListMenu from './GuideListMenu';

/**
 * The guide categories.
 */
function GuideCategories() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const groupedGuides = useAppSelector(selectGroupedGuides);

	useEffect(() => {
		dispatch(getGuides());
	}, [dispatch]);

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="flex flex-col items-center p-24 sm:p-40 container">
			<div className="flex flex-col w-full max-w-4xl">
				<div className="sm:mt-32">
					<Button
						onClick={handleGoBack}
						color="secondary"
						startIcon={<FuseSvgIcon>heroicons-outline:arrow-narrow-left</FuseSvgIcon>}
					>
						Back to Help Center
					</Button>
				</div>
				<div className="mt-8 text-4xl sm:text-7xl font-extrabold tracking-tight leading-tight">
					Guides & Resources
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-y-48 sm:gap-x-16 mt-32 sm:mt-48">
					{groupedGuides.map((category) => (
						<div key={category.id}>
							<Typography
								component={Link}
								to={`${category.slug}`}
								className="mb-4 text-2xl font-semibold"
								role="button"
							>
								{category.title}
							</Typography>

							<GuideListMenu
								list={category.guides}
								categorySlug={category.slug}
								maxItems={4}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default GuideCategories;
