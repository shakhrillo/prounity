import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { useState, MouseEvent } from 'react';
import { useAppSelector } from 'app/store';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ToolbarMenu from './ToolbarMenu';
import { selectMembers } from '../../../../store/membersSlice';

type MembersMenuProps = {
	memberIds: string[];
	onToggleMember: (memberId: string) => void;
};

/**
 * The members menu component.
 */
function MembersMenu(props: MembersMenuProps) {
	const { memberIds, onToggleMember } = props;

	const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
	const members = useAppSelector(selectMembers);

	function handleMenuOpen(event: MouseEvent<HTMLButtonElement>) {
		setAnchorEl(event.currentTarget);
	}

	function handleMenuClose() {
		setAnchorEl(null);
	}

	return (
		<div>
			<IconButton
				onClick={handleMenuOpen}
				size="large"
			>
				<FuseSvgIcon>heroicons-outline:user-circle</FuseSvgIcon>
			</IconButton>
			<ToolbarMenu
				state={anchorEl}
				onClose={handleMenuClose}
			>
				<div>
					{members.map((member) => {
						return (
							<MenuItem
								className="px-8"
								key={member.id}
								onClick={() => {
									onToggleMember(member.id);
								}}
							>
								<Checkbox checked={memberIds.includes(member.id)} />
								<Avatar
									className="w-32 h-32"
									src={member.avatar}
								/>
								<ListItemText className="mx-8">{member.name}</ListItemText>
							</MenuItem>
						);
					})}
				</div>
			</ToolbarMenu>
		</div>
	);
}

export default MembersMenu;
