import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import { lighten } from '@mui/material/styles';
import ActivityItemType from './ActivityItemType';

type ActivityTimelineItemProps = {
	last: boolean;
	item: ActivityItemType;
};

/**
 * The ActivityTimelineItem component.
 */
function ActivityTimelineItem(props: ActivityTimelineItemProps) {
	const { item, last } = props;

	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot
					color="primary"
					className="mt-0 flex h-40  w-40 items-center justify-center p-0"
				>
					{item.image && <Avatar src={item.image} />}
					{!item.image && <FuseSvgIcon>{item.icon ? item.icon : 'heroicons-solid:star'}</FuseSvgIcon>}
				</TimelineDot>

				{!last && <TimelineConnector />}
			</TimelineSeparator>

			<TimelineContent className="flex flex-col items-start pb-48 pt-0">
				{/* eslint-disable-next-line react/no-danger */}
				{item.description && <div dangerouslySetInnerHTML={{ __html: item.description }} />}

				<div className="mt-8 flex flex-col text-md leading-5 sm:mt-4 sm:flex-row sm:items-center sm:space-x-8">
					<Typography
						className="text-13"
						color="text.secondary"
					>
						{format(new Date(item.date), 'MMM dd, h:mm a')}
					</Typography>
					{item.linkedContent && <div className="hidden sm:block">&bull;</div>}

					{item.useRouter && (
						<Link
							className="cursor-pointer"
							to={item.link}
						>
							{item.linkedContent}
						</Link>
					)}

					{!item.useRouter && (
						<a
							className="cursor-pointer"
							href={item.link}
							target="_blank"
							rel="noreferrer"
						>
							{item.linkedContent}
						</a>
					)}
				</div>

				{item.extraContent && (
					<Box
						className="mt-16 rounded-lg border px-20 py-16"
						sx={{
							backgroundColor: (theme) =>
								theme.palette.mode === 'light'
									? lighten(theme.palette.background.default, 0.4)
									: lighten(theme.palette.background.default, 0.02)
						}}
					>
						{/* eslint-disable-next-line react/no-danger */}
						<div dangerouslySetInnerHTML={{ __html: item.extraContent }} />
					</Box>
				)}
			</TimelineContent>
		</TimelineItem>
	);
}

export default ActivityTimelineItem;
