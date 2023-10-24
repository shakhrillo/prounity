import Typography from '@mui/material/Typography';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';
import Divider from '@mui/material/Divider';
import { useAppSelector } from 'app/store';
import { MouseEvent } from 'react';
import { selectWidgets } from './store/widgetsSlice';
import ValueSectionSmall from './widgets/ValueSectionSmall';
import BTCWidgetType from './types/BTCWidgetType';

type CryptoDashboardAppHeaderProps = {
	onToggleLeftSidebar: (ev: MouseEvent) => void;
};

/**
 * The crypto dashboard app header.
 */
function CryptoDashboardAppHeader(props: CryptoDashboardAppHeaderProps) {
	const { onToggleLeftSidebar } = props;
	const widgets = useAppSelector(selectWidgets);
	const btc = widgets?.btc as BTCWidgetType;

	if (!btc) {
		return null;
	}

	return (
		<div className="flex flex-wrap w-full items-center px-8 py-12 md:px-16 border-b">
			<Hidden lgUp>
				<IconButton
					onClick={(ev) => onToggleLeftSidebar(ev)}
					aria-label="open left sidebar"
					size="small"
				>
					<FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
				</IconButton>
			</Hidden>
			<div className="flex flex-col flex-auto my-12 mx-8">
				<div className="flex items-center space-x-8">
					<Typography
						className="font-medium text-2xl"
						color="text.secondary"
					>
						Bitcoin
					</Typography>
					<Typography
						className="font-medium text-lg tracking-wider"
						color="text.secondary"
					>
						(BTC)
					</Typography>
				</div>
				<div className="flex items-end mt-4 space-x-6">
					<Typography className="font-mono text-3xl leading-none tracking-tight">
						{btc.amount.toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD'
						})}
					</Typography>
					<div className="flex items-end">
						<FuseSvgIcon
							size={20}
							className={clsx(
								'text-green-500 mx-2 mb-px',
								btc.trend.dir === 'up' && 'text-green-500',
								btc.trend.dir === 'down' && 'text-red-500'
							)}
						>
							{btc.trend.dir === 'up'
								? 'heroicons-solid:arrow-narrow-up'
								: 'heroicons-solid:arrow-narrow-down'}
						</FuseSvgIcon>

						<Typography
							className={clsx(
								'font-mono font-medium text-lg leading-none mb-px',
								btc.trend.dir === 'up' && 'text-green-500',
								btc.trend.dir === 'down' && 'text-red-500'
							)}
						>
							{btc.trend.amount.toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD'
							})}
							%
						</Typography>
					</div>
				</div>
			</div>
			<div className="hidden sm:flex items-center my-12 mx-8 rounded-xl border">
				<ValueSectionSmall
					title="Market Cap"
					unit="B"
					value={btc.marketCap}
				/>
				<Divider
					orientation="vertical"
					flexItem
				/>
				<ValueSectionSmall
					title="Volume"
					unit="B"
					value={btc.volume}
				/>
				<Divider
					orientation="vertical"
					flexItem
				/>
				<ValueSectionSmall
					title="Supply"
					unit="M"
					value={btc.supply}
				/>
				<Divider
					orientation="vertical"
					flexItem
				/>
				<ValueSectionSmall
					title="All Time High"
					value={btc.allTimeHigh}
				/>
			</div>
		</div>
	);
}

export default CryptoDashboardAppHeader;
