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

type Crypto = {
	title?: string;
	iso: string;
	amount: number;
	trend: Trend;
	series: Series[];
};

/**
 * The type definition for the BTCWidgetType.
 */
type BTCWidgetType = Crypto & {
	marketCap: number;
	volume: number;
	supply: number;
	allTimeHigh: number;
	price?: {
		series?: Series[];
	};
};

export default BTCWidgetType;
