/**
 * The status type.
 */
export type StatusType = {
	title: string;
	value: string;
	color: string;
};

/**
 * The list of statuses.
 */
const Statuses: StatusType[] = [
	{
		title: 'Online',
		value: 'online',
		color: 'rgb(76, 175, 80)'
	},
	{
		title: 'Away',
		value: 'away',
		color: 'rgb(251, 192, 45)'
	},
	{
		title: 'Do not disturb',
		value: 'do-not-disturb',
		color: 'rgb(244, 67, 54)'
	},
	{
		title: 'Offline',
		value: 'offline',
		color: 'rgb(162,162,162)'
	}
];

export default Statuses;
