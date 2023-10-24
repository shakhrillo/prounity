import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { TableDataItemType } from './TablePricingTable';

type TablePricingTableHeadProps = {
	period?: TableDataItemType['period'];
	data?: TableDataItemType;
};

/**
 * The table pricing table head component.
 */
function TablePricingTableHead(props: TablePricingTableHeadProps) {
	const { period = 'month', data } = props;
	const { title, yearlyPrice, monthlyPrice, buttonTitle, isPopular } = data;

	return (
		<Box
			className="flex flex-col"
			sx={{ backgroundColor: 'background.paper' }}
		>
			<div className="flex flex-col justify-center p-16 pt-12 lg:py-32">
				<div className="flex items-center">
					<div className="text-xl font-medium lg:text-2xl">{title}</div>

					{isPopular && (
						<Chip
							label="POPULAR"
							color="secondary"
							className="mx-12 hidden h-24 rounded-full px-4 text-center text-sm font-semibold leading-none tracking-wide md:flex"
							size="small"
						/>
					)}
				</div>

				<div className="flex items-baseline whitespace-nowrap lg:mt-16">
					<Typography
						className="text-lg"
						color="text.secondary"
					>
						USD
					</Typography>
					<Typography className="text-2xl font-bold tracking-tight lg:mx-8 lg:text-4xl">
						{period === 'month' && monthlyPrice}
						{period === 'year' && yearlyPrice}
					</Typography>
					<Typography
						className="text-2xl"
						color="text.secondary"
					>
						/ month
					</Typography>
				</div>
				<Typography
					className="mt-4 text-sm lg:mt-12 lg:text-base"
					color="text.secondary"
				>
					{period === 'month' && (
						<>
							billed monthly
							<br />
							<b>{yearlyPrice}</b> billed yearly
						</>
					)}
					{period === 'year' && (
						<>
							billed yearly
							<br />
							<b>{monthlyPrice}</b> billed monthly
						</>
					)}
				</Typography>

				<Button
					className="mt-12 h-32 min-h-32 w-full lg:mt-24 lg:h-40 lg:min-h-40"
					variant={isPopular ? 'contained' : 'outlined'}
					color={isPopular ? 'secondary' : 'inherit'}
				>
					{buttonTitle}
				</Button>
			</div>
		</Box>
	);
}

export default TablePricingTableHead;
