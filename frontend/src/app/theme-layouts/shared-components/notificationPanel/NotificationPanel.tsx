import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/store';
import { useLocation } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import NotificationTemplate from 'app/theme-layouts/shared-components/notificationPanel/NotificationTemplate';
import NotificationModel from 'app/theme-layouts/shared-components/notificationPanel/models/NotificationModel';
import withReducer from 'app/store/withReducer';
import NotificationCard from './NotificationCard';
import { addNotification, dismissAll, dismissItem, getNotifications, selectNotifications } from './store/dataSlice';
import { closeNotificationPanel, selectNotificationPanelState, toggleNotificationPanel } from './store/stateSlice';
import reducer from './store';

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
	'& .MuiDrawer-paper': {
		backgroundColor: theme.palette.background.default,
		width: 320
	}
}));

/**
 * The notification panel.
 */
function NotificationPanel() {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const state = useSelector(selectNotificationPanelState);
	const notifications = useSelector(selectNotifications);

	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	useEffect(() => {
		/*
		Get Notifications from db
		 */
		dispatch(getNotifications());
	}, [dispatch]);

	useEffect(() => {
		if (state) {
			dispatch(closeNotificationPanel());
		}
		// eslint-disable-next-line
	}, [location, dispatch]);

	function handleClose() {
		dispatch(closeNotificationPanel());
	}

	function handleDismiss(id: string) {
		dispatch(dismissItem(id));
	}
	function handleDismissAll() {
		dispatch(dismissAll());
	}

	function demoNotification() {
		const item = NotificationModel({ title: 'Great Job! this is awesome.' });

		enqueueSnackbar(item.title, {
			key: item.id,

			// autoHideDuration: 3000,
			content: (
				<NotificationTemplate
					item={item}
					onClose={() => {
						closeSnackbar(item.id);
					}}
				/>
			)
		});

		dispatch(addNotification(item));
	}

	return (
		<StyledSwipeableDrawer
			open={state}
			anchor="right"
			onOpen={() => {}}
			onClose={() => dispatch(toggleNotificationPanel())}
			disableSwipeToOpen
		>
			<IconButton
				className="absolute right-0 top-0 z-999 m-4"
				onClick={handleClose}
				size="large"
			>
				<FuseSvgIcon color="action">heroicons-outline:x</FuseSvgIcon>
			</IconButton>
			{notifications.length > 0 ? (
				<FuseScrollbars className="p-16">
					<div className="flex flex-col">
						<div className="mb-36 flex items-end justify-between pt-136">
							<Typography className="text-28 font-semibold leading-none">Notifications</Typography>
							<Typography
								className="cursor-pointer text-12 underline"
								color="secondary"
								onClick={handleDismissAll}
							>
								dismiss all
							</Typography>
						</div>
						{notifications.map((item) => (
							<NotificationCard
								key={item.id}
								className="mb-16"
								item={item}
								onClose={handleDismiss}
							/>
						))}
					</div>
				</FuseScrollbars>
			) : (
				<div className="flex flex-1 items-center justify-center p-16">
					<Typography
						className="text-center text-24"
						color="text.secondary"
					>
						There are no notifications for now.
					</Typography>
				</div>
			)}
			<div className="flex items-center justify-center py-16">
				<Button
					size="small"
					variant="outlined"
					onClick={demoNotification}
				>
					Create a notification example
				</Button>
			</div>
		</StyledSwipeableDrawer>
	);
}

export default withReducer('notificationPanel', reducer)(NotificationPanel);
