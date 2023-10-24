import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import exampleActivitiesData from './exampleActivitiesData';
import ActivityTimelineItem from './ActivityTimelineItem';

/**
 * The activities page.
 */
function ActivitiesPage() {
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	return (
		<FusePageSimple
			content={
				<div className="flex flex-auto flex-col px-24 py-40 sm:px-64 sm:pb-80 sm:pt-72">
					<Typography className="text-4xl font-extrabold leading-none tracking-tight">
						All Activities
					</Typography>
					<Typography
						className="mt-6 text-lg"
						color="text.secondary"
					>
						Application wide activities are listed here as individual items, starting with the most recent.
					</Typography>
					<Timeline
						className="py-48"
						position="right"
						sx={{
							'& .MuiTimelineItem-root:before': {
								display: 'none'
							}
						}}
					>
						{exampleActivitiesData.map((item, index) => (
							<ActivityTimelineItem
								last={exampleActivitiesData.length === index + 1}
								item={item}
								key={item.id}
							/>
						))}
					</Timeline>
				</div>
			}
			scroll={isMobile ? 'normal' : 'page'}
		/>
	);
}

export default ActivitiesPage;
