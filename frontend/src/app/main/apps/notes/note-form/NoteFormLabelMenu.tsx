import _ from '@lodash';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import { useState, MouseEvent } from 'react';
import { useAppSelector } from 'app/store';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ListItemButton from '@mui/material/ListItemButton';
import { selectLabels } from '../store/labelsSlice';
import { NoteType } from '../types/NoteType';

type NoteFormLabelMenuProps = {
	note: NoteType;
	onChange: (T: NoteType['labels']) => void;
};

/**
 * The note form label menu.
 */
function NoteFormLabelMenu(props: NoteFormLabelMenuProps) {
	const { note, onChange } = props;
	const labels = useAppSelector(selectLabels);

	const [anchorEl, setAnchorEl] = useState<HTMLElement>(null);

	function handleMenuClick(event: MouseEvent<HTMLElement>) {
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	}

	function handleMenuClose() {
		setAnchorEl(null);
	}

	function handleToggleLabel(id: string) {
		onChange(_.xor(note.labels, [id]));
	}

	return (
		<div>
			<IconButton
				className="w-32 h-32 mx-4 p-0"
				onClick={handleMenuClick}
				size="large"
			>
				<FuseSvgIcon size={20}>heroicons-outline:tag</FuseSvgIcon>
			</IconButton>
			<Popover
				hideBackdrop
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				onClose={handleMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				className="pointer-events-none"
				classes={{
					paper: 'pointer-events-auto py-8 prevent-add-close'
				}}
			>
				<ClickAwayListener onClickAway={handleMenuClose}>
					<List className="p-0">
						{labels.map((label) => (
							<ListItemButton
								key={label.id}
								dense
								onClick={() => handleToggleLabel(label.id)}
							>
								<FuseSvgIcon
									className="list-item-icon"
									size={20}
									color="action"
								>
									{note.labels.includes(label.id)
										? 'heroicons-outline:check-circle'
										: 'heroicons-outline:minus-circle'}
								</FuseSvgIcon>
								<ListItemText
									className="truncate px-8"
									primary={label.title}
									disableTypography
								/>
							</ListItemButton>
						))}
					</List>
				</ClickAwayListener>
			</Popover>
		</div>
	);
}

export default NoteFormLabelMenu;
