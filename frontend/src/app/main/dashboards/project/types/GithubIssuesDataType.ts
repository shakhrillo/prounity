type GithubIssueOverviewData = {
	[key: string]: number;
};

type GithubIssueSeriesData = {
	name: string;
	type: string;
	data: number[];
};

/**
 * The type definition for the data used to populate the github issues chart.
 */
type GithubIssuesDataType = {
	overview: Record<string, GithubIssueOverviewData>;
	ranges: Record<string, string>;
	labels: string[];
	series: Record<string, GithubIssueSeriesData[]>;
};

export default GithubIssuesDataType;
