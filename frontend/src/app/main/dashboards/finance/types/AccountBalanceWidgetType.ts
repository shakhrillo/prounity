type DataPointType = {
	x: string;
	y: number;
};

type SeriesType = {
	name: string;
	data: DataPointType[];
};

/**
 * Account Balance Widget Type
 */
type AccountBalanceWidgetType = {
	growRate: number;
	ami: number;
	series: SeriesType[];
};

export default AccountBalanceWidgetType;
