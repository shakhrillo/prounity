import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ActivityItem from './ActivityItem';
import { ActivitiesType } from '../../types/ActivityType';
import { PostsType } from '../../types/PostType';
import PostItem from './PostItem';

export type TimelineResponseDataType = {
	activities: ActivitiesType;
	posts: PostsType;
};

/**
 * The timeline tab.
 */
function TimelineTab() {
	const [data, setData] = useState<TimelineResponseDataType>({ activities: [], posts: [] });

	useEffect(() => {
		axios.get('/api/profile/timeline').then((res) => {
			setData(res.data as TimelineResponseDataType);
		});
	}, []);

	if (!data) {
		return null;
	}

	const container = {
		show: {
			transition: {
				staggerChildren: 0.05
			}
		}
	};

	const item = {
		hidden: { opacity: 0, y: 40 },
		show: { opacity: 1, y: 0 }
	};

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="w-full"
		>
			<div className="md:flex">
				<div className="flex flex-col w-full md:w-320 md:ltr:mr-32 md:rtl:ml-32">
					<Card
						component={motion.div}
						variants={item}
						className="flex flex-col w-full px-32 pt-24"
					>
						<div className="flex justify-between items-center pb-16">
							<Typography className="text-2xl font-semibold leading-tight">Latest Activity</Typography>
							<Button
								color="inherit"
								size="small"
								className="font-medium -mx-8"
							>
								See All
							</Button>
						</div>

						<CardContent className="p-0">
							<List className="p-0">
								{data.activities.map((activity) => (
									<ActivityItem
										item={activity}
										key={activity.id}
									/>
								))}
							</List>
						</CardContent>
					</Card>
				</div>

				<div className="flex flex-col flex-1">
					<Card
						component={motion.div}
						variants={item}
						className="w-full overflow-hidden w-full mb-32"
					>
						<Input
							className="p-24 w-full"
							classes={{ root: 'text-14' }}
							placeholder="Write something.."
							multiline
							rows="6"
							margin="none"
							disableUnderline
						/>
						<Box
							className="card-footer flex items-center flex-row border-t-1 px-24 py-12"
							sx={{
								backgroundColor: (theme) =>
									theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
						>
							<div className="flex flex-1 items-center">
								<IconButton aria-label="Add photo">
									<FuseSvgIcon size={20}>heroicons-solid:photograph</FuseSvgIcon>
								</IconButton>
								<IconButton aria-label="Mention somebody">
									<FuseSvgIcon size={20}>heroicons-solid:user</FuseSvgIcon>
								</IconButton>
								<IconButton aria-label="Add location">
									<FuseSvgIcon size={20}>heroicons-solid:location-marker</FuseSvgIcon>
								</IconButton>
							</div>

							<div>
								<Button
									variant="contained"
									color="secondary"
									size="small"
									aria-label="post"
								>
									Post
								</Button>
							</div>
						</Box>
					</Card>

					{data.posts.map((post) => (
						<motion.div
							variants={item}
							key={post.id}
						>
							<PostItem item={post} />
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default TimelineTab;
