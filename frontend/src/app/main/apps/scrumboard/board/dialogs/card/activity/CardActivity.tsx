import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import fromUnixTime from 'date-fns/fromUnixTime';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Box from '@mui/material/Box';
import { useAppSelector } from 'app/store';
import { selectMemberById } from '../../../../store/membersSlice';
import { CommentType } from '../../../../types/CommentType';

type CardActivityProps = {
	item: CommentType;
};

/**
 * The card activity component.
 */
function CardActivity(props: CardActivityProps) {
	const { item } = props;

	const user = useAppSelector(selectMemberById(item.idMember));

	switch (item.type) {
		case 'comment': {
			return (
				<ListItem
					dense
					className="px-0"
				>
					<Avatar
						alt={user?.name}
						src={user?.avatar}
						className="w-32 h-32"
					/>
					<Box
						className="flex flex-col mx-16 p-12"
						sx={{
							borderRadius: '5px 20px 20px 5px',
							border: (theme) => `1px solid ${theme.palette.divider}`
						}}
					>
						<div className="flex items-center">
							<Typography>{user?.name}</Typography>
							<Typography
								className="mx-8 text-12"
								color="text.secondary"
							>
								{formatDistanceToNow(fromUnixTime(item.time), { addSuffix: true })}
							</Typography>
						</div>
						<Typography>{item.message}</Typography>
					</Box>
				</ListItem>
			);
		}
		case 'attachment': {
			return (
				<ListItem
					dense
					className="px-0"
				>
					<Avatar
						alt={user?.name}
						src={user?.avatar}
						className="w-32 h-32"
					/>
					<div className="flex items-center mx-16">
						<Typography>{user?.name},</Typography>
						<Typography className="mx-8">{item.message}</Typography>
						<Typography
							className="text-12"
							color="text.secondary"
						>
							{formatDistanceToNow(fromUnixTime(item.time), { addSuffix: true })}
						</Typography>
					</div>
				</ListItem>
			);
		}
		default: {
			return null;
		}
	}
}

export default CardActivity;
