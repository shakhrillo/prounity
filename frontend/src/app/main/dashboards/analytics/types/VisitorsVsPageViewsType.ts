type DateString = string;

type DataPoint = {
	x: DateString;
	y: number;
};

type Series = {
	name: string;
	data: DataPoint[];
};

/**
 * Visitors Vs Page Views Type
 */
type VisitorsVsPageViewsType = {
	overallScore: number;
	averageRatio: number;
	predictedRatio: number;
	series: Series[];
};

export default VisitorsVsPageViewsType;
