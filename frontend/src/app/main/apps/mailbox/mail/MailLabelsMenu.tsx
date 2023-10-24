import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { MouseEvent, useEffect, useState } from 'react';
import { useAppSelector } from 'app/store';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Menu } from '@mui/material';
import _ from '@lodash';
import Tooltip from '@mui/material/Tooltip';
import { selectLabels } from '../store/labelsSlice';
import { labelColorDefs } from './labelColors';

type MailLabelsMenuProps = {
	className?: string;
	onChange: (labels: string[]) => void;
	labels: string[];
};

/**
 * The mail labels menu.
 */
function MailLabelsMenu(props: MailLabelsMenuProps) {
	const { className, onChange, labels } = props;
	const [selectedLabels, setSelectedLabels] = useState(labels);
	const labelsAll = useAppSelector(selectLabels);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	useEffect(() => {
		setSelectedLabels(labels);
	}, [labels]);

	function handleMenuOpen(event: MouseEvent<HTMLButtonElement>) {
		setAnchorEl(event.currentTarget);
	}

	function handleMenuClose() {
		setAnchorEl(null);
	}

	return (
		<div>
			<Tooltip title="Set labels">
				<IconButton
					onClick={handleMenuOpen}
					className={className}
				>
					<FuseSvgIcon>heroicons-outline:tag</FuseSvgIcon>
				</IconButton>
			</Tooltip>
			<Menu
				id="labels-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleMenuClose}
				MenuListProps={{
					'aria-labelledby': 'labels'
				}}
			>
				<div>
					{labelsAll.map((label) => {
						return (
							<MenuItem
								className="px-8"
								key={label.id}
								onClick={() => {
									onChange(_.xor(selectedLabels, [label.id]));
								}}
							>
								<Checkbox checked={selectedLabels.includes(label.id)} />
								<ListItemText className="mx-8">{label.title}</ListItemText>
								<ListItemIcon className="min-w-24">
									<FuseSvgIcon className={labelColorDefs[label.color].text}>
										heroicons-outline:tag
									</FuseSvgIcon>
								</ListItemIcon>
							</MenuItem>
						);
					})}
				</div>
			</Menu>
		</div>
	);
}

export default MailLabelsMenu;
