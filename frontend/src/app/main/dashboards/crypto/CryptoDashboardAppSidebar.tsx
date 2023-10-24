import Paper from '@mui/material/Paper';
import { useAppSelector } from 'app/store';
import WatchlistItem from './widgets/WatchlistItem';
import { selectWidgets } from './store/widgetsSlice';
import BuySellForm from './widgets/BuySellForm';
import WatchlistType from './types/WatchlistType';

/**
 * The crypto dashboard app sidebar.
 */
function CryptoDashboardAppSidebar() {
	const widgets = useAppSelector(selectWidgets);
	const watchlist = widgets?.watchlist as WatchlistType;

	return (
		<>
			<Paper
				elevation={0}
				square
			>
				{watchlist?.map((item) => (
					<WatchlistItem
						key={item.iso}
						item={item}
					/>
				))}
			</Paper>
			<BuySellForm />
		</>
	);
}

export default CryptoDashboardAppSidebar;
