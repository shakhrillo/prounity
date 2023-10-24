/**
 * The type definition for the data used to populate the task distribution chart.
 */
type TaskDistributionOverviewData = {
	new: number;
	completed: number;
};

/**
 * The type definition for the data used to populate the task distribution chart.
 */
type TaskDistributionDataType = {
	ranges: Record<string, string>;
	overview: Record<string, TaskDistributionOverviewData>;
	labels: string[];
	series: Record<string, number[]>;
};

export default TaskDistributionDataType;
