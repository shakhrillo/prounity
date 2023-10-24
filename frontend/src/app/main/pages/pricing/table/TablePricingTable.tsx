import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import TablePricingTableHead from './TablePricingTableHead';

/**
 * The table data item type.
 */
export type TableDataItemType = {
	title?: string;
	monthlyPrice?: string;
	yearlyPrice?: string;
	buttonTitle?: string;
	isPopular?: boolean;
	features?: {
		unlimitedProjects: boolean;
		unlimitedStorage: boolean;
		customDomainSupport: boolean;
		dedicatedHardware: boolean;
	};
	payments?: {
		fraudAnalysis: boolean;
		rateForInHouse: string;
		rateForOther: string;
		additionalFees: string;
	};
	period?: 'month' | 'year';
};

/**
 * The table data.
 */
const tableData: TableDataItemType[] = [
	{
		title: 'Personal',
		monthlyPrice: '$9',
		yearlyPrice: '$6',
		buttonTitle: 'Buy Personal',
		isPopular: false,
		features: {
			unlimitedProjects: true,
			unlimitedStorage: true,
			customDomainSupport: false,
			dedicatedHardware: false
		},
		payments: {
			fraudAnalysis: true,
			rateForInHouse: '2.9% + 30¢',
			rateForOther: '4.9% + 30¢',
			additionalFees: '2%'
		}
	},
	{
		title: 'Premium',
		monthlyPrice: '$15',
		yearlyPrice: '$12',
		buttonTitle: 'Buy Premium',
		isPopular: true,
		features: {
			unlimitedProjects: true,
			unlimitedStorage: true,
			customDomainSupport: true,
			dedicatedHardware: false
		},
		payments: {
			fraudAnalysis: true,
			rateForInHouse: '2.9% + 30¢',
			rateForOther: '4.9% + 30¢',
			additionalFees: '1%'
		}
	},
	{
		title: 'Enterprise',
		monthlyPrice: '$69',
		yearlyPrice: '$49',
		buttonTitle: 'Buy Enterprise',
		isPopular: false,
		features: {
			unlimitedProjects: true,
			unlimitedStorage: true,
			customDomainSupport: true,
			dedicatedHardware: true
		},
		payments: {
			fraudAnalysis: true,
			rateForInHouse: '2.4% + 30¢',
			rateForOther: '4.4% + 30¢',
			additionalFees: '0.5%'
		}
	}
];

type TablePricingTableProps = {
	period: TableDataItemType['period'];
};

/**
 * The pricing table.
 */
function TablePricingTable(props: TablePricingTableProps) {
	const { period } = props;

	return (
		<div className="mt-40 flex justify-center sm:mt-80">
			<Paper className="w-full flex-col overflow-x-auto overflow-y-hidden lg:max-w-7xl lg:flex-row">
				<div className="grid min-w-max grid-flow-col divide-x lg:min-w-0 lg:grid-flow-row lg:divide-x-0 lg:divide-y">
					<div className="sticky left-0 grid grid-flow-row auto-rows-fr divide-y overflow-hidden rounded-l border-r shadow-lg lg:max-w-none lg:auto-cols-fr lg:grid-flow-col lg:divide-x lg:divide-y-0 lg:rounded-l-none lg:border-r-0 lg:shadow-none">
						<Box
							className="overflow-hidden px-16 py-32"
							sx={{ backgroundColor: 'background.paper' }}
						/>
						{tableData.map((item, index) => (
							<TablePricingTableHead
								key={index}
								data={item}
								period={period}
							/>
						))}
					</div>

					<Box
						sx={{ backgroundColor: 'background.default' }}
						className="col-span-full hidden p-16 lg:block"
					>
						<Typography className="text-md font-semibold">FEATURES</Typography>
					</Box>

					<div className="grid grid-flow-row auto-rows-fr divide-y lg:auto-cols-fr lg:grid-flow-col lg:divide-x lg:divide-y-0">
						<Typography className="flex max-w-128 items-center p-16 text-center font-medium lg:max-w-none lg:items-start lg:text-left lg:font-normal">
							Unlimited projects
						</Typography>

						{tableData
							.map((item) => item.features.unlimitedProjects)
							.map((val, index) => (
								<TableCell
									value={val}
									key={index}
								/>
							))}
					</div>

					<div className="grid grid-flow-row auto-rows-fr divide-y lg:auto-cols-fr lg:grid-flow-col lg:divide-x lg:divide-y-0">
						<Typography className="flex max-w-128 items-center p-16 text-center font-medium lg:max-w-none lg:items-start lg:text-left lg:font-normal">
							Unlimited storage
						</Typography>

						{tableData
							.map((item) => item.features.unlimitedStorage)
							.map((val, index) => (
								<TableCell
									value={val}
									key={index}
								/>
							))}
					</div>

					<div className="grid grid-flow-row auto-rows-fr divide-y lg:auto-cols-fr lg:grid-flow-col lg:divide-x lg:divide-y-0">
						<Typography className="flex max-w-128 items-center p-16 text-center font-medium lg:max-w-none lg:items-start lg:text-left lg:font-normal">
							Custom domain support
						</Typography>

						{tableData
							.map((item) => item.features.customDomainSupport)
							.map((val, index) => (
								<TableCell
									value={val}
									key={index}
								/>
							))}
					</div>

					<div className="grid grid-flow-row auto-rows-fr divide-y lg:auto-cols-fr lg:grid-flow-col lg:divide-x lg:divide-y-0">
						<Typography className="flex max-w-128 items-center p-16 text-center font-medium lg:max-w-none lg:items-start lg:text-left lg:font-normal">
							Dedicated hardware
						</Typography>

						{tableData
							.map((item) => item.features.dedicatedHardware)
							.map((val, index) => (
								<TableCell
									value={val}
									key={index}
								/>
							))}
					</div>

					<Box
						sx={{ backgroundColor: 'background.default' }}
						className="col-span-full hidden p-16 lg:block"
					>
						<Typography className="text-md font-semibold">PAYMENTS</Typography>
					</Box>

					<div className="grid grid-flow-row auto-rows-fr divide-y lg:auto-cols-fr lg:grid-flow-col lg:divide-x lg:divide-y-0">
						<Typography className="flex max-w-128 items-center p-16 text-center font-medium lg:max-w-none lg:items-start lg:text-left lg:font-normal">
							Fraud analysis
						</Typography>

						{tableData
							.map((item) => item.payments.fraudAnalysis)
							.map((val, index) => (
								<TableCell
									value={val}
									key={index}
								/>
							))}
					</div>

					<div className="grid grid-flow-row auto-rows-fr divide-y lg:auto-cols-fr lg:grid-flow-col lg:divide-x lg:divide-y-0">
						<Typography className="flex max-w-128 items-center p-16 text-center font-medium lg:max-w-none lg:items-start lg:text-left lg:font-normal">
							Rates for in-house payment systems
						</Typography>

						{tableData
							.map((item) => item.payments.rateForInHouse)
							.map((val, index) => (
								<TableCell
									value={val}
									key={index}
								/>
							))}
					</div>

					<div className="grid grid-flow-row auto-rows-fr divide-y lg:auto-cols-fr lg:grid-flow-col lg:divide-x lg:divide-y-0">
						<Typography className="flex max-w-128 items-center p-16 text-center font-medium lg:max-w-none lg:items-start lg:text-left lg:font-normal">
							Rates for other payment systems
						</Typography>

						{tableData
							.map((item) => item.payments.rateForOther)
							.map((val, index) => (
								<TableCell
									value={val}
									key={index}
								/>
							))}
					</div>

					<div className="grid grid-flow-row auto-rows-fr divide-y lg:auto-cols-fr lg:grid-flow-col lg:divide-x lg:divide-y-0">
						<Typography className="flex max-w-128 items-center p-16 text-center font-medium lg:max-w-none lg:items-start lg:text-left lg:font-normal">
							Additional fees using other payment systems
						</Typography>

						{tableData
							.map((item) => item.payments.additionalFees)
							.map((val, index) => (
								<TableCell
									value={val}
									key={index}
								/>
							))}
					</div>
				</div>
			</Paper>
		</div>
	);
}

type TableCellProps = {
	value: boolean | string;
};

function TableCell(props: TableCellProps) {
	const { value } = props;

	if (typeof value === 'string') {
		return (
			<div className="flex items-center justify-center p-16 lg:justify-start">
				<Typography>{value}</Typography>
			</div>
		);
	}

	return (
		<div className="flex items-center justify-center p-16 lg:justify-start">
			{value ? (
				<FuseSvgIcon
					size={20}
					className="text-green-600"
				>
					heroicons-solid:check
				</FuseSvgIcon>
			) : (
				<FuseSvgIcon size={20}>heroicons-solid:minus</FuseSvgIcon>
			)}
		</div>
	);
}

export default TablePricingTable;
