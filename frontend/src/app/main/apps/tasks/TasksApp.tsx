import FusePageSimple from '@fuse/core/FusePageSimple';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'app/store';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { styled } from '@mui/material/styles';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import TasksSidebarContent from './TasksSidebarContent';
import TasksHeader from './TasksHeader';
import TasksList from './TasksList';
import { getTags } from './store/tagsSlice';
import { getTasks } from './store/tasksSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper
	}
}));

/**
 * The tasks app.
 */
function TasksApp() {
	const dispatch = useAppDispatch();
	const routeParams = useParams();
	const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	useDeepCompareEffect(() => {
		dispatch(getTasks());
		dispatch(getTags());
	}, [dispatch]);

	useEffect(() => {
		setRightSidebarOpen(Boolean(routeParams.id));
	}, [routeParams]);

	return (
		<Root
			header={<TasksHeader />}
			content={<TasksList />}
			rightSidebarContent={<TasksSidebarContent />}
			rightSidebarOpen={rightSidebarOpen}
			rightSidebarOnClose={() => setRightSidebarOpen(false)}
			rightSidebarWidth={640}
			scroll={isMobile ? 'normal' : 'content'}
		/>
	);
}

export default TasksApp;
