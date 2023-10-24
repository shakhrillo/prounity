import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import Chip from '@mui/material/Chip';
import ModernPricingItemType from './ModernPricingItemType';

type ModernPricingCardProps = ModernPricingItemType & {
	className?: string;
};

/**
 * The modern pricing card component.
 */
function ModernPricingCard(props: ModernPricingCardProps) {
	const {
		period = '',
		title = '',
		subtitle = '',
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
				'relative max-w-sm flex-col p-24 sm:px-40 sm:py-48 md:max-w-none',
				isPopular && 'ring-primary ring-2',
				className
			)}
		>
			{isPopular && (
				<div className="absolute inset-x-0 -top-16 flex items-center justify-center">
					<Chip
						label="POPULAR"
						color="secondary"
						className="flex h-32 items-center rounded-full px-32 text-center font-medium leading-none"
					/>
				</div>
			)}

			<Typography className="text-4xl font-bold leading-tight tracking-tight">{title}</Typography>

			<Typography
				className="mt-8 text-lg font-medium tracking-tight"
				color="text.secondary"
			>
				{subtitle}
			</Typography>

			<Divider className="bg-accent my-40 h-4 w-32 rounded" />

			<div className="flex items-baseline whitespace-nowrap">
				<Typography className="mr-8 text-2xl">USD</Typography>
				<Typography className="text-6xl font-semibold leading-tight tracking-tight">
					{period === 'month' && monthlyPrice}
					{period === 'year' && yearlyPrice}
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

			<Button
				className="mt-40 w-full"
				size="large"
				variant={isPopular ? 'contained' : 'outlined'}
				color={isPopular ? 'secondary' : 'inherit'}
			>
				{buttonTitle}
			</Button>
			{details}
		</Paper>
	);
}

export default ModernPricingCard;
