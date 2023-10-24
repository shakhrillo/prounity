type Direction = 'up' | 'down';

type Trend = {
	dir: Direction;
	amount: number;
};

type SeriesData = {
	x: number | string;
	y: number;
};

type Series = {
	name: string;
	data: SeriesData[];
};

/**
 * WatchListItemType
 */
export type WatchListItemType = {
	title?: string;
	iso: string;
	amount: number;
	trend: Trend;
	series: Series[];
};

type WatchListType = WatchListItemType[];

export default WatchListType;
