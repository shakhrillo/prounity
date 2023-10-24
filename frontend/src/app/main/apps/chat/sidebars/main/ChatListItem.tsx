import { styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import Box from '@mui/material/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import ListItemButton from '@mui/material/ListItemButton';
import { NavLinkAdapterPropsType } from '@fuse/core/NavLinkAdapter/NavLinkAdapter';
import UserAvatar from '../../UserAvatar';
import { ContactType } from '../../types/ContactType';
import { ChatListItemType } from '../../types/ChatListItemType';

type ExtendedListItemProps = NavLinkAdapterPropsType & {
	component: React.ElementType<NavLinkAdapterPropsType>;
};

const StyledListItem = styled(ListItemButton)<ExtendedListItemProps>(({ theme }) => ({
	'&.active': {
		backgroundColor: theme.palette.background.default
	}
}));

type ChatListItemProps = {
	item: Partial<ContactType & ChatListItemType>;
};

/**
 * The chat list item.
 */
function ChatListItem(props: ChatListItemProps) {
	const { item } = props;

	return (
		<StyledListItem
			component={NavLinkAdapter}
			className="px-32 py-12 min-h-80"
			to={`/apps/chat/${item.id}`}
			end
			activeClassName="active"
		>
			<UserAvatar user={item} />

			<ListItemText
				classes={{
					root: 'min-w-px px-16',
					primary: 'font-medium text-14',
					secondary: 'truncate'
				}}
				primary={item.name}
				secondary={item.lastMessage}
			/>

			{item.contactId && (
				<div className="flex flex-col justify-center items-end">
					{item?.lastMessageAt && (
						<Typography
							className="whitespace-nowrap mb-8 font-medium text-12"
							color="text.secondary"
						>
							{format(new Date(item.lastMessageAt), 'PP')}
						</Typography>
					)}
					<div className="items-center">
						{item.muted && (
							<FuseSvgIcon
								size={20}
								color="disabled"
							>
								heroicons-solid:volume-off
							</FuseSvgIcon>
						)}
						{Boolean(item.unreadCount) && (
							<Box
								sx={{
									backgroundColor: 'secondary.main',
									color: 'secondary.contrastText'
								}}
								className="flex items-center justify-center min-w-20 h-20 rounded-full font-medium text-10 text-center"
							>
								{item.unreadCount}
							</Box>
						)}
					</div>
				</div>
			)}
		</StyledListItem>
	);
}

export default ChatListItem;
