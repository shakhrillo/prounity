import { useAppDispatch, useAppSelector } from 'app/store';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { getFaqs, selectGroupedFaqs } from '../store/faqsSlice';
import { getFaqCategories } from '../store/faqCategoriesSlice';
import FaqList from './FaqList';

/**
 * The help center faqs page.
 */
function HelpCenterFaqs() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const groupedFaqs = useAppSelector(selectGroupedFaqs);

	useEffect(() => {
		dispatch(getFaqs());
		dispatch(getFaqCategories());
	}, [dispatch]);

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="flex flex-col items-center p-24 sm:p-40">
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
					Frequently Asked Questions
				</div>

				{groupedFaqs.map((category) => (
					<div key={category.id}>
						<Typography className="mt-48 sm:mt-64 text-3xl font-bold leading-tight tracking-tight">
							{category.title}
						</Typography>
						<FaqList
							className="w-full mt-32"
							list={category.faqs}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default HelpCenterFaqs;
