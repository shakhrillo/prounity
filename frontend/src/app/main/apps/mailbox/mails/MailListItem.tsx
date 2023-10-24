import _ from '@lodash';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from 'app/store';
import withRouter from '@fuse/core/withRouter';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import format from 'date-fns/format';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import { WithRouterProps } from '@fuse/core/withRouter/withRouter';
import { NavLinkAdapterPropsType } from '@fuse/core/NavLinkAdapter/NavLinkAdapter';
import { selectSelectedMailIds, toggleInSelectedMails } from '../store/mailsSlice';
import { MailType } from '../types/MailType';

const StyledListItem = styled(ListItemButton)<ListItemButtonProps & NavLinkAdapterPropsType & { unread: number }>(
	({ theme, unread }) => ({
		background: theme.palette.background.default,
		borderBottom: `1px solid ${theme.palette.divider}`,

		...(unread && {
			background: theme.palette.background.paper
		}),

		'&.selected': {
			'&::after': {
				content: '""',
				position: 'absolute',
				top: 0,
				left: 0,
				display: 'block',
				height: '100%',
				width: 3,
				backgroundColor: theme.palette.primary.main
			}
		}
	})
);

type MailListItemProps = WithRouterProps & {
	mail: MailType;
};

/**
 * The mail list item.
 */
function MailListItem(props: MailListItemProps) {
	const dispatch = useAppDispatch();
	const selectedMailIds = useAppSelector(selectSelectedMailIds);
	const { mail } = props;
	const checked = selectedMailIds.length > 0 && selectedMailIds.find((id) => id === mail.id) !== undefined;

	return (
		<StyledListItem
			component={NavLinkAdapter}
			activeClassName="selected"
			to={mail.id}
			dense
			selected={checked}
			unread={mail.unread ? 1 : 0}
			className="items-start py-20 px-0 md:px-8 relative w-full"
		>
			<Checkbox
				tabIndex={-1}
				disableRipple
				checked={checked}
				onChange={() => dispatch(toggleInSelectedMails(mail.id))}
				onClick={(ev) => ev.stopPropagation()}
				size="small"
			/>

			<div className="flex flex-col flex-auto min-w-0">
				<div className="flex w-full space-x-6 items-center">
					<Avatar
						sx={{
							backgroundColor: (_theme) => _theme.palette.primary.main
						}}
						alt={mail.from.email}
						src={mail.from?.avatar}
					>
						{mail.from.contact}
					</Avatar>
					<div className="flex flex-col w-full min-w-0">
						<div className="flex items-center w-full">
							<Typography className="mr-8 font-semibold truncate">
								{mail.from.contact.split('<')[0].trim()}
							</Typography>

							{mail.important && (
								<FuseSvgIcon
									className="mr-12 text-red-500 dark:text-red-600"
									size={16}
								>
									heroicons-solid:exclamation-circle
								</FuseSvgIcon>
							)}

							<Typography
								className="ml-auto text-md text-right whitespace-nowrap"
								color="text.secondary"
							>
								{format(new Date(mail.date), 'LLL dd')}
							</Typography>
						</div>
						<div className="flex items-center w-full mt-4">
							<span className="leading-4 truncate">{mail.subject}</span>
							{((mail.attachments && mail.attachments.length > 0) || mail.starred) && (
								<div className="flex ml-auto pl-8">
									<FuseSvgIcon size={16}>heroicons-solid:paper-clip</FuseSvgIcon>

									{mail.starred && (
										<FuseSvgIcon
											className="flex justify-center ml-4 text-orange-500 dark:text-orange-400"
											size={16}
										>
											heroicons-solid:star
										</FuseSvgIcon>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
				<Typography
					color="text.secondary"
					className="mt-8 leading-normal line-clamp-2"
				>
					{_.truncate(mail.content.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}
				</Typography>
			</div>
		</StyledListItem>
	);
}

export default withRouter(MailListItem);
