import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { NotificationModelType } from 'app/theme-layouts/shared-components/notificationPanel/models/NotificationModel';
import { MouseEvent } from 'react';

type NotificationCardProps = {
	item: NotificationModelType;
	className?: string;
	onClose: (T: string) => void;
};

/**
 * The notification card.
 */
function NotificationCard(props: NotificationCardProps) {
	const { item, className, onClose } = props;

	const variant = item?.variant || '';

	const handleClose = (ev: MouseEvent<HTMLButtonElement>) => {
		ev.preventDefault();
		ev.stopPropagation();

		if (onClose) {
			onClose(item.id);
		}
	};

	return (
		<Card
			className={clsx(
				'relative flex min-h-64 w-full items-center space-x-8 rounded-16 p-20 shadow',
				variant === 'success' && 'bg-green-600 text-white',
				variant === 'info' && 'bg-blue-700 text-white',
				variant === 'error' && 'bg-red-600 text-white',
				variant === 'warning' && 'bg-orange-600 text-white',
				className
			)}
			elevation={0}
			component={item.useRouter ? NavLinkAdapter : 'div'}
			to={item.link || ''}
			role={item.link && 'button'}
		>
			{item.icon && !item.image && (
				<Box
					sx={{ backgroundColor: 'background.default' }}
					className="mr-12 flex h-32 w-32 shrink-0 items-center justify-center rounded-full"
				>
					<FuseSvgIcon
						className="opacity-75"
						color="inherit"
					>
						{item.icon}
					</FuseSvgIcon>
				</Box>
			)}

			{item.image && (
				<img
					className="mr-12 h-32 w-32 shrink-0 overflow-hidden rounded-full object-cover object-center"
					src={item.image}
					alt="Notification"
				/>
			)}

			<div className="flex flex-auto flex-col">
				{item.title && <Typography className="line-clamp-1 font-semibold">{item.title}</Typography>}

				{item.description && (
					<div
						className="line-clamp-2"
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: item.description }}
					/>
				)}

				{item.time && (
					<Typography
						className="mt-8 text-sm leading-none "
						color="text.secondary"
					>
						{formatDistanceToNow(new Date(item.time), { addSuffix: true })}
					</Typography>
				)}
			</div>

			<IconButton
				disableRipple
				className="absolute right-0 top-0 p-8"
				color="inherit"
				size="small"
				onClick={handleClose}
			>
				<FuseSvgIcon
					size={12}
					className="opacity-75"
					color="inherit"
				>
					heroicons-solid:x
				</FuseSvgIcon>
			</IconButton>
			{item.children}
		</Card>
	);
}

export default NotificationCard;
