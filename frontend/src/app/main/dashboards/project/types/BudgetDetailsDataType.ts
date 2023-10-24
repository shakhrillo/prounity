/**
 * The type definition for a row in the budget details table.
 */
type BudgetDetailsRow = {
	type: string;
	total: number;
	expensesAmount: number;
	expensesPercentage: number;
	remainingAmount: number;
	remainingPercentage: number;
};

/**
 * The type definition for the data used to populate the budget details table.
 */
type BudgetDetailsDataType = {
	columns: string[];
	rows: BudgetDetailsRow[];
};

export default BudgetDetailsDataType;
