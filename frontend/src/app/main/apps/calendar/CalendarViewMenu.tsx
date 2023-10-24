import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { CalendarApi, DatesSetArg } from '@fullcalendar/core';
import { MouseEvent, useState } from 'react';

type ViewType = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay';

const viewNamesObj = {
	dayGridMonth: {
		title: 'Month',
		icon: 'view_module'
	},
	timeGridWeek: {
		title: 'Week',
		icon: 'view_week'
	},
	timeGridDay: {
		title: 'Day',
		icon: 'view_agenda'
	}
};

type CalendarViewMenuProps = {
	className?: string;
	calendarApi: CalendarApi;
	currentDate: DatesSetArg;
};

/**
 * The calendar view menu.
 */
function CalendarViewMenu(props: CalendarViewMenuProps) {
	const { className, calendarApi, currentDate } = props;
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={className}>
			<Button
				sx={{ minWidth: 120 }}
				className="rounded-6 justify-between"
				id="view-select-button"
				aria-controls="view-select-menu"
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				variant="outlined"
				endIcon={<FuseSvgIcon size={16}>heroicons-outline:chevron-down</FuseSvgIcon>}
			>
				{currentDate &&
					currentDate.view &&
					viewNamesObj[currentDate.view.type as ViewType] &&
					(viewNamesObj[currentDate.view.type as ViewType] as { title: string }).title}
			</Button>
			<Menu
				id="view-select-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'view-select-button'
				}}
			>
				{Object.entries(viewNamesObj).map(([name, view]) => (
					<MenuItem
						key={name}
						onClick={() => {
							calendarApi.changeView(name);
							handleClose();
						}}
					>
						<ListItemText primary={view.title} />
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}

export default CalendarViewMenu;
