import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { WatchListItemType } from '../types/WatchlistType';

type WatchlistItemProps = {
	item: WatchListItemType;
};

/**
 * The watchlist item component.
 */
function WatchlistItem(props: WatchlistItemProps) {
	const { item } = props;

	const theme = useTheme();

	const chartOptions: ApexOptions = {
		chart: {
			animations: {
				enabled: false
			},
			fontFamily: 'inherit',
			foreColor: 'inherit',
			height: '100%',
			type: 'line',
			sparkline: {
				enabled: true
			}
		},
		colors: item.trend.dir === 'up' ? [theme.palette.success.main] : [theme.palette.error.main],
		stroke: {
			curve: 'smooth',
			width: 2
		},
		tooltip: {
			theme: 'dark'
		},
		xaxis: {
			type: 'category'
		}
	};

	return (
		<div className="flex flex-0 items-center p-20 border-b space-x-24">
			<div className="flex flex-col flex-auto">
				<div className="flex items-baseline space-x-4">
					<Typography
						className=" font-medium text-md"
						color="text.secondary"
					>
						{item.title}
					</Typography>
					<Typography
						className="font-medium text-sm uppercase tracking-wider"
						color="text.secondary"
					>
						({item.iso})
					</Typography>
				</div>
				<div className="flex items-end mt-8">
					<Typography className="min-w-80 font-mono text-2xl tracking-tighter leading-none">
						{item.amount.toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD'
						})}
					</Typography>

					<FuseSvgIcon
						className={clsx(
							'icon-size-14 mx-2 mb-px',
							item.trend.dir === 'up' && 'text-green-500',
							item.trend.dir === 'down' && 'text-red-500'
						)}
						size={14}
					>
						{item.trend.dir === 'up'
							? 'heroicons-solid:arrow-narrow-up'
							: 'heroicons-solid:arrow-narrow-down'}
					</FuseSvgIcon>
					<Typography
						className={clsx(
							'font-mono font-medium text-sm leading-none',
							item.trend.dir === 'up' && 'text-green-500',
							item.trend.dir === 'down' && 'text-red-500'
						)}
					>
						{item.trend.amount}%
					</Typography>
				</div>
			</div>
			<ReactApexChart
				className="flex-auto w-full h-40"
				options={chartOptions}
				series={item.series}
				type={chartOptions?.chart?.type}
				height={chartOptions?.chart?.height}
			/>
		</div>
	);
}

export default WatchlistItem;
