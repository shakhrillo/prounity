type Label = string;

interface SeriesItem {
	name: string;
	data: number[];
}

/**
 * Visits Widget Type
 */
interface VisitsWidgetType {
	amount: number;
	labels: Label[];
	series: SeriesItem[];
}

export default VisitsWidgetType;
