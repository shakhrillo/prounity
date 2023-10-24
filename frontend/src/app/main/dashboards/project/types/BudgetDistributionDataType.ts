/**
 * The type definition for the data used to populate the budget distribution chart series.
 */
type BudgetDistributionSeriesData = {
	name: string;
	data: number[];
};

/**
 * The type definition for the data used to populate the budget distribution chart.
 */
type BudgetDistributionDataType = {
	categories: string[];
	series: BudgetDistributionSeriesData[];
};

export default BudgetDistributionDataType;
