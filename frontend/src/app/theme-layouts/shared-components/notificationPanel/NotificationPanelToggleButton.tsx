import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/store';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { ReactNode } from 'react';
import withReducer from 'app/store/withReducer';
import { selectNotifications } from './store/dataSlice';
import { toggleNotificationPanel } from './store/stateSlice';
import reducer from './store';

type NotificationPanelToggleButtonProps = {
	children?: ReactNode;
};

/**
 * The notification panel toggle button.
 */
function NotificationPanelToggleButton(props: NotificationPanelToggleButtonProps) {
	const { children = <FuseSvgIcon>heroicons-outline:bell</FuseSvgIcon> } = props;

	const notifications = useSelector(selectNotifications);

	const dispatch = useAppDispatch();

	return (
		<IconButton
			className="h-40 w-40"
			onClick={() => dispatch(toggleNotificationPanel())}
			size="large"
		>
			<Badge
				color="secondary"
				variant="dot"
				invisible={notifications.length === 0}
			>
				{children}
			</Badge>
		</IconButton>
	);
}

export default withReducer('notificationPanel', reducer)(NotificationPanelToggleButton);
