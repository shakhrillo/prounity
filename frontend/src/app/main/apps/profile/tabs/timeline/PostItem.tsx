import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { lighten } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import { PostType } from '../../types/PostType';

type PostProps = {
	item: PostType;
};

/**
 * The post item.
 */
function PostItem(props: PostProps) {
	const { item } = props;

	return (
		<Card className="mb-32">
			<CardHeader
				className="px-32 pt-24"
				avatar={
					<Avatar
						aria-label="Recipe"
						src={item.user.avatar}
					/>
				}
				action={
					<IconButton
						aria-label="more"
						size="large"
					>
						<FuseSvgIcon>heroicons-outline:dots-vertical</FuseSvgIcon>
					</IconButton>
				}
				title={
					<span className="flex items-center space-x-8">
						<Typography
							className="font-normal"
							color="secondary.main"
							paragraph={false}
						>
							{item.user.name}
						</Typography>
						<span>
							{item.type === 'post' && 'posted on your timeline'}
							{item.type === 'something' && 'shared something with you'}
							{item.type === 'video' && 'shared a video with you'}
							{item.type === 'article' && 'shared an article with you'}
						</span>
					</span>
				}
				subheader={item.time}
			/>

			<CardContent className="px-32">
				{item.message && (
					<Typography
						component="p"
						className="mb-16"
					>
						{item.message}
					</Typography>
				)}

				{item.media && (
					<img
						src={item.media.preview}
						alt="post"
						className="rounded-8"
					/>
				)}

				{item.article && (
					<div className="border-1 rounded-8 overflow-hidden">
						<img
							className="w-full border-b-1"
							src={item.article.media.preview}
							alt="article"
						/>
						<div className="p-16">
							<Typography variant="subtitle1">{item.article.title}</Typography>
							<Typography variant="caption">{item.article.subtitle}</Typography>
							<Typography className="mt-16">{item.article.excerpt}</Typography>
						</div>
					</div>
				)}
			</CardContent>

			<CardActions
				disableSpacing
				className="px-32"
			>
				<Button
					size="small"
					aria-label="Add to favorites"
				>
					<FuseSvgIcon
						size={16}
						color="action"
					>
						heroicons-outline:heart
					</FuseSvgIcon>
					<Typography className="mx-4">Like</Typography>
					<Typography>({item.like})</Typography>
				</Button>
				<Button aria-label="Share">
					<FuseSvgIcon
						size={16}
						color="action"
					>
						heroicons-outline:share
					</FuseSvgIcon>
					<Typography className="mx-4">Share</Typography>
					<Typography>({item.share})</Typography>
				</Button>
			</CardActions>

			<Box
				className="card-footer flex flex-col px-32 py-24 border-t-1"
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? lighten(theme.palette.background.default, 0.4)
							: lighten(theme.palette.background.default, 0.02)
				}}
			>
				{item.comments && item.comments.length > 0 && (
					<div>
						<div className="flex items-center">
							<Typography>{item.comments.length} comments</Typography>
							<FuseSvgIcon
								size={16}
								className="mx-4"
								color="action"
							>
								heroicons-outline:chevron-down
							</FuseSvgIcon>
						</div>

						<List>
							{item.comments.map((comment) => (
								<div key={comment.id}>
									<ListItem className="px-0 -mx-8">
										<Avatar
											alt={comment.user.name}
											src={comment.user.avatar}
											className="mx-8"
										/>
										<ListItemText
											className="px-4"
											primary={
												<div className="flex items-center space-x-8">
													<Typography
														className="font-normal"
														color="secondary"
														paragraph={false}
													>
														{comment.user.name}
													</Typography>
													<Typography variant="caption">{comment.time}</Typography>
												</div>
											}
											secondary={comment.message}
										/>
									</ListItem>
									<div className="flex items-center mx-52 mb-8">
										<Button endIcon={<FuseSvgIcon size={14}>heroicons-outline:reply</FuseSvgIcon>}>
											Reply
										</Button>
									</div>
								</div>
							))}
						</List>
					</div>
				)}

				<div className="flex flex-auto -mx-4">
					<Avatar
						className="mx-4"
						src="assets/images/avatars/profile.jpg"
					/>
					<div className="flex flex-col flex-1 mx-4 items-end">
						<Paper className="w-full mb-16 shadow-0 border-1  overflow-hidden">
							<Input
								className="p-12 w-full"
								classes={{ root: 'text-13' }}
								placeholder="Add a comment.."
								multiline
								rows="6"
								margin="none"
								disableUnderline
							/>
						</Paper>
						<div>
							<Button
								variant="contained"
								color="secondary"
								size="small"
							>
								Post comment
							</Button>
						</div>
					</div>
				</div>
			</Box>
		</Card>
	);
}

export default PostItem;
