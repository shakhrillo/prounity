import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'app/store';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { NavLinkAdapterPropsType } from '@fuse/core/NavLinkAdapter/NavLinkAdapter';
import { PartialDeep } from 'type-fest';
import { openLabelsDialog, selectLabels } from './store/labelsSlice';

const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps & PartialDeep<NavLinkAdapterPropsType>>(
	({ theme }) => ({
		color: 'inherit!important',
		textDecoration: 'none!important',
		height: 40,
		width: '100%',
		borderRadius: 20,
		paddingLeft: 16,
		paddingRight: 16,
		marginBottom: 8,
		fontWeight: 500,
		'&.active': {
			backgroundColor:
				theme.palette.mode === 'light' ? 'rgba(0, 0, 0, .05)!important' : 'rgba(255, 255, 255, .1)!important',
			pointerEvents: 'none',
			'& .list-item-icon': {
				color: theme.palette.secondary.main
			}
		},
		'& .list-item-icon': {
			marginRight: 16
		}
	})
);

/**
 * The notes sidebar content.
 */
function NotesSidebarContent() {
	const dispatch = useAppDispatch();
	const labels = useAppSelector(selectLabels);

	return (
		<div className="px-16 py-24">
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
			>
				<List>
					<StyledListItemButton
						component={NavLinkAdapter}
						end
						to="/apps/notes"
						activeClassName="active"
					>
						<FuseSvgIcon
							className="list-item-icon"
							color="disabled"
						>
							heroicons-outline:pencil-alt
						</FuseSvgIcon>
						<ListItemText
							className="truncate"
							primary="Notes"
							disableTypography
						/>
					</StyledListItemButton>
					<StyledListItemButton
						component={NavLinkAdapter}
						to="/apps/notes/reminders"
						activeClassName="active"
					>
						<FuseSvgIcon
							className="list-item-icon"
							color="disabled"
						>
							heroicons-outline:bell
						</FuseSvgIcon>
						<ListItemText
							className="truncate"
							primary="Reminders"
							disableTypography
						/>
					</StyledListItemButton>

					<StyledListItemButton
						component={NavLinkAdapter}
						to="/apps/notes/archive"
						activeClassName="active"
					>
						<FuseSvgIcon
							className="list-item-icon"
							color="disabled"
						>
							heroicons-outline:archive
						</FuseSvgIcon>
						<ListItemText
							className="truncate"
							primary="Archive"
							disableTypography
						/>
					</StyledListItemButton>

					{labels.map((label) => (
						<StyledListItemButton
							key={label.id}
							component={NavLinkAdapter}
							to={`/apps/notes/labels/${label.id}`}
							activeClassName="active"
						>
							<FuseSvgIcon
								className="list-item-icon"
								color="disabled"
							>
								heroicons-outline:tag
							</FuseSvgIcon>
							<ListItemText
								className="truncate"
								primary={label.title}
								disableTypography
							/>
						</StyledListItemButton>
					))}
					<StyledListItemButton onClick={() => dispatch(openLabelsDialog())}>
						<FuseSvgIcon
							className="list-item-icon"
							color="disabled"
						>
							heroicons-outline:pencil
						</FuseSvgIcon>
						<ListItemText
							className="truncate"
							primary="Edit Labels"
							disableTypography
						/>
					</StyledListItemButton>
				</List>
			</motion.div>
		</div>
	);
}

export default NotesSidebarContent;
