import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { useState, MouseEvent } from 'react';
import { useAppSelector } from 'app/store';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ToolbarMenu from './ToolbarMenu';
import { selectLabels } from '../../../../store/labelsSlice';

type LabelsMenuProps = {
	labels: string[];
	onToggleLabel: (labelId: string) => void;
};

/**
 * The labels menu component.
 */
function LabelsMenu(props: LabelsMenuProps) {
	const { labels, onToggleLabel } = props;

	const labelsArr = useAppSelector(selectLabels);

	const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

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
				<FuseSvgIcon>heroicons-outline:tag</FuseSvgIcon>
			</IconButton>
			<ToolbarMenu
				state={anchorEl}
				onClose={handleMenuClose}
			>
				<div>
					{labelsArr.map((label) => {
						return (
							<MenuItem
								className="px-8"
								key={label.id}
								onClick={() => {
									onToggleLabel(label.id);
								}}
							>
								<Checkbox checked={labels.includes(label.id)} />
								<ListItemText className="mx-8">{label.title}</ListItemText>
								<ListItemIcon className="min-w-24">
									<FuseSvgIcon>heroicons-outline:tag</FuseSvgIcon>
								</ListItemIcon>
							</MenuItem>
						);
					})}
				</div>
			</ToolbarMenu>
		</div>
	);
}

export default LabelsMenu;
