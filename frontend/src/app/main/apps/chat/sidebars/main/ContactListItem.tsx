import { styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import ListItemButton from '@mui/material/ListItemButton';
import { NavLinkAdapterPropsType } from '@fuse/core/NavLinkAdapter/NavLinkAdapter';
import UserAvatar from '../../UserAvatar';
import { ContactType } from '../../types/ContactType';

type ExtendedListItemProps = NavLinkAdapterPropsType & {
	component: React.ElementType<NavLinkAdapterPropsType>;
};

const StyledListItem = styled(ListItemButton)<ExtendedListItemProps>(({ theme }) => ({
	'&.active': {
		backgroundColor: theme.palette.background.default
	}
}));

type ContactListItemProps = {
	item: ContactType;
};

/**
 * The contact list item.
 */
function ContactListItem(props: ContactListItemProps) {
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
			/>
		</StyledListItem>
	);
}

export default ContactListItem;
