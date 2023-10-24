import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IconButton } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import format from 'date-fns/format';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from 'app/store';
import { Draggable } from 'react-beautiful-dnd';
import clsx from 'clsx';
import { updateTask } from './store/taskSlice';
import { TaskType } from './types/TaskType';

type TaskListItemProps = {
	data: TaskType;
	index: number;
};

/**
 * The task list item.
 */
function TaskListItem(props: TaskListItemProps) {
	const { data, index } = props;

	const dispatch = useAppDispatch();

	return (
		<Draggable
			draggableId={data.id}
			index={index}
		>
			{(provided, snapshot) => (
				<>
					<ListItem
						className={clsx(snapshot.isDragging ? 'shadow-lg' : 'shadow', 'px-40 py-12 group')}
						sx={{ bgcolor: 'background.paper' }}
						button
						component={NavLinkAdapter}
						to={`/apps/tasks/${data.id}`}
						ref={provided.innerRef}
						{...provided.draggableProps}
					>
						<div
							className="md:hidden absolute flex items-center justify-center inset-y-0 left-0 w-32 cursor-move md:group-hover:flex"
							{...provided.dragHandleProps}
						>
							<FuseSvgIcon
								sx={{ color: 'text.disabled' }}
								size={20}
							>
								heroicons-solid:menu
							</FuseSvgIcon>
						</div>
						<ListItemIcon className="min-w-40 -ml-10 mr-8">
							<IconButton
								sx={{ color: data.completed ? 'secondary.main' : 'text.disabled' }}
								onClick={(ev) => {
									ev.preventDefault();
									ev.stopPropagation();
									dispatch(updateTask({ ...data, completed: !data.completed }));
								}}
							>
								<FuseSvgIcon>heroicons-outline:check-circle</FuseSvgIcon>
							</IconButton>
						</ListItemIcon>
						<ListItemText
							classes={{ root: 'm-0', primary: 'truncate' }}
							primary={data.title}
						/>
						<div className="flex items-center">
							<div>
								{data.priority === 0 && (
									<FuseSvgIcon className="text-green icon-size-16 mx-12">
										heroicons-outline:arrow-narrow-down
									</FuseSvgIcon>
								)}
								{data.priority === 2 && (
									<FuseSvgIcon className="text-red icon-size-16 mx-12">
										heroicons-outline:arrow-narrow-up
									</FuseSvgIcon>
								)}
							</div>

							{data.dueDate && (
								<Typography
									className="text-12 whitespace-nowrap"
									color="text.secondary"
								>
									{format(new Date(data.dueDate), 'LLL dd')}
								</Typography>
							)}
						</div>
					</ListItem>
					<Divider />
				</>
			)}
		</Draggable>
	);
}

export default TaskListItem;
