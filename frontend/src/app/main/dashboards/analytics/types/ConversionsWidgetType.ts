/**
 * Series Type
 */
type Series = {
	name: string;
	data: number[];
};

/**
 * Conversions Widget Type
 */
type ConversionsWidgetType = {
	amount: number;
	labels: string[];
	series: Series[];
};

export default ConversionsWidgetType;
