import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import Chip from '@mui/material/Chip';
import SimplePricingItemType from './SimplePricingItemType';

type SimplePricingCardProps = SimplePricingItemType & {
	className?: string;
};

/**
 * The simple pricing card component.
 */
function SimplePricingCard(props: SimplePricingCardProps) {
	const {
		period = '',
		title = '',
		yearlyPrice = '',
		monthlyPrice = '',
		buttonTitle = '',
		isPopular = false,
		details = '',
		className = ''
	} = props;

	return (
		<Paper
			className={clsx(
				'max-w-sm flex-col items-center p-32  text-center sm:px-40 sm:py-48 md:max-w-none lg:rounded-2xl',
				className
			)}
		>
			{isPopular && (
				<div className="flex justify-center">
					<Chip
						label="POPULAR"
						color="secondary"
						className="mb-32 h-32 rounded-full px-32 text-center font-semibold leading-none"
					/>
				</div>
			)}

			<div className="text-4xl font-extrabold leading-tight tracking-tight">{title}</div>

			<div className="mt-32 flex items-baseline justify-center whitespace-nowrap">
				<Typography className="text-6xl font-semibold leading-tight tracking-tight">
					{period === 'month' && monthlyPrice}
					{period === 'year' && yearlyPrice}
				</Typography>
				<Typography
					className="ml-8 text-2xl"
					color="text.secondary"
				>
					/ month
				</Typography>
			</div>

			<Typography
				className="mt-8 flex flex-col"
				color="text.secondary"
			>
				{period === 'month' && (
					<>
						<span>billed monthly</span>
						<span>
							<b>{yearlyPrice}</b> billed yearly
						</span>
					</>
				)}
				{period === 'year' && (
					<>
						<span>billed yearly</span>
						<span>
							<b>{monthlyPrice}</b> billed monthly
						</span>
					</>
				)}
			</Typography>

			{details}

			<Button
				className="mt-40 w-full"
				size="large"
				variant={isPopular ? 'contained' : 'outlined'}
				color={isPopular ? 'secondary' : 'inherit'}
			>
				{buttonTitle}
			</Button>
		</Paper>
	);
}

export default SimplePricingCard;
