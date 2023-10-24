/**
 * Series item type.
 */
type SeriesItem = {
	name: string;
	data: number[];
};

/**
 * Impressions Widget Type
 */
type ImpressionsWidgetType = {
	amount: number;
	labels: string[];
	series: SeriesItem[];
};

export default ImpressionsWidgetType;
