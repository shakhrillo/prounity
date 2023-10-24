/**
 * The type definition for the data used to populate the expenses chart.
 */
type ExpensesSeriesData = {
	name: string;
	data: number[];
};

/**
 * The type definition for the data used to populate the expenses chart.
 */
type ExpensesDataType = {
	amount: number;
	labels: string[];
	series: ExpensesSeriesData[];
};

export default ExpensesDataType;
