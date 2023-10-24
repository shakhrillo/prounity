import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useAppSelector } from 'app/store';
import Button from '@mui/material/Button';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectRemainingTasks } from './store/tasksSlice';

/**
 * The tasks header.
 */
function TasksHeader() {
	const remainingTasks = useAppSelector(selectRemainingTasks);

	return (
		<div className="flex flex-col sm:flex-row item-center sm:items-start space-y-16 sm:space-y-0 p-24 sm:p-32 w-full border-b-1 flex items-center justify-between">
			<div className="flex flex-col sm:flex-row items-center sm:space-x-12">
				<motion.span
					initial={{ x: -20 }}
					animate={{ x: 0, transition: { delay: 0.2 } }}
				>
					<Typography className="text-24 md:text-32 font-extrabold tracking-tight leading-none">
						Tasks
					</Typography>
				</motion.span>

				<motion.span
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
				>
					<Typography
						className="text-14 font-medium ml-2"
						color="text.secondary"
					>
						{`${remainingTasks} remaining tasks`}
					</Typography>
				</motion.span>
			</div>

			<div className="flex items-center -mx-8">
				<Button
					className="mx-8 whitespace-nowrap"
					component={NavLinkAdapter}
					to="new/section"
				>
					<FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>
					<span className="mx-8">Add Section</span>
				</Button>
				<Button
					className="mx-8 whitespace-nowrap"
					variant="contained"
					color="secondary"
					component={NavLinkAdapter}
					to="new/task"
				>
					<FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>
					<span className="mx-8">Add Task</span>
				</Button>
			</div>
		</div>
	);
}

export default TasksHeader;
