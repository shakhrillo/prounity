import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import { ActivityType } from '../../types/ActivityType';

type ActivityItemProps = {
	item: ActivityType;
};

/**
 * The activity item.
 */
function ActivityItem(props: ActivityItemProps) {
	const { item } = props;

	return (
		<ListItem
			key={item.id}
			className="px-0 space-x-12"
		>
			<Avatar
				alt={item.user.name}
				src={item.user.avatar}
			/>
			<ListItemText
				className="flex-1"
				primary={
					<div className="flex">
						<Typography
							className="font-normal whitespace-nowrap"
							color="secondary"
							paragraph={false}
						>
							{item.user.name}
						</Typography>

						<Typography
							className="px-4 truncate"
							paragraph={false}
						>
							{item.message}
						</Typography>
					</div>
				}
				secondary={item.time}
			/>
		</ListItem>
	);
}

export default ActivityItem;
