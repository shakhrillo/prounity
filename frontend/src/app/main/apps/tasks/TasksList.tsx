import { useAppDispatch, useAppSelector } from 'app/store';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { DragDropContext, Droppable, DroppableProvided, DropResult } from 'react-beautiful-dnd';
import { reorderList, selectTasks } from './store/tasksSlice';
import TaskListItem from './TaskListItem';
import SectionListItem from './SectionListItem';

/**
 * The tasks list.
 */
function TasksList() {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector(selectTasks);

	if (!tasks) {
		return null;
	}

	if (tasks.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography
					color="text.secondary"
					variant="h5"
				>
					There are no tasks!
				</Typography>
			</div>
		);
	}

	function onDragEnd(result: DropResult) {
		const { source, destination } = result;

		if (!destination) {
			return;
		}

		const { index: destinationIndex } = destination;
		const { index: sourceIndex } = source;

		if (destinationIndex === sourceIndex) {
			return;
		}

		dispatch(
			reorderList({
				startIndex: sourceIndex,
				endIndex: destinationIndex
			})
		);
	}
	return (
		<List className="w-full m-0 p-0">
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable
					droppableId="list"
					type="list"
					direction="vertical"
				>
					{(provided: DroppableProvided) => (
						<>
							<div ref={provided.innerRef}>
								{tasks.map((item, index) => {
									if (item.type === 'task') {
										return (
											<TaskListItem
												data={item}
												index={index}
												key={item.id}
											/>
										);
									}

									if (item.type === 'section') {
										return (
											<SectionListItem
												key={item.id}
												index={index}
												data={item}
											/>
										);
									}

									return null;
								})}
							</div>
							{provided.placeholder}
						</>
					)}
				</Droppable>
			</DragDropContext>
		</List>
	);
}

export default TasksList;
