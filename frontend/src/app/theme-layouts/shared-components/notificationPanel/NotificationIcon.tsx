import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

type NotificationIconProps = {
	value?: string;
};

/**
 * The notification icon.
 */
function NotificationIcon(props: NotificationIconProps) {
	const { value } = props;

	switch (value) {
		case 'error': {
			return (
				<FuseSvgIcon
					className="mr-8 opacity-75"
					color="inherit"
				>
					heroicons-outline:minus-circle
				</FuseSvgIcon>
			);
		}
		case 'success': {
			return (
				<FuseSvgIcon
					className="mr-8 opacity-75"
					color="inherit"
				>
					heroicons-outline:check-circle
				</FuseSvgIcon>
			);
		}
		case 'warning': {
			return (
				<FuseSvgIcon
					className="mr-8 opacity-75"
					color="inherit"
				>
					heroicons-outline:exclamation-circle
				</FuseSvgIcon>
			);
		}
		case 'info': {
			return (
				<FuseSvgIcon
					className="mr-8 opacity-75"
					color="inherit"
				>
					heroicons-outline:information-circle
				</FuseSvgIcon>
			);
		}
		default: {
			return null;
		}
	}
}

export default NotificationIcon;
