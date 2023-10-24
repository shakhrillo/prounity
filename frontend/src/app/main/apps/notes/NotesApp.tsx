import { useEffect, useState } from 'react';
import { useAppDispatch } from 'app/store';
import { lighten, styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import FusePageCarded from '@fuse/core/FusePageCarded';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import LabelsDialog from './dialogs/labels/LabelsDialog';
import NoteDialog from './dialogs/note/NoteDialog';
import NewNote from './NewNote';
import NoteList from './NoteList';
import NotesHeader from './NotesHeader';
import NotesSidebarContent from './NotesSidebarContent';
import { getLabels } from './store/labelsSlice';
import { getNotes, RouteParamsType } from './store/notesSlice';

const Root = styled(FusePageCarded)(() => ({
	'& .FusePageCarded-header': {},
	'& .FusePageCarded-sidebar': {},
	'& .FusePageCarded-leftSidebar': {}
}));

/**
 * The notes app.
 */
function NotesApp() {
	const dispatch = useAppDispatch();
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
	const routeParams = useParams<RouteParamsType>();

	useEffect(() => {
		dispatch(getNotes(routeParams as RouteParamsType));
		dispatch(getLabels());
	}, [dispatch, routeParams]);

	return (
		<Root
			header={<NotesHeader onSetSidebarOpen={setLeftSidebarOpen} />}
			content={
				<div className="flex flex-col w-full items-center p-24">
					<Box
						className="w-full rounded-16 border p-12 flex flex-col items-center"
						sx={{
							backgroundColor: (theme) =>
								theme.palette.mode === 'light'
									? lighten(theme.palette.background.default, 0.4)
									: lighten(theme.palette.background.default, 0.02)
						}}
					>
						<NewNote />
						<NoteList />
					</Box>
					<NoteDialog />
					<LabelsDialog />
				</div>
			}
			leftSidebarOpen={leftSidebarOpen}
			leftSidebarOnClose={() => {
				setLeftSidebarOpen(false);
			}}
			leftSidebarContent={<NotesSidebarContent />}
			scroll={isMobile ? 'normal' : 'content'}
		/>
	);
}

export default NotesApp;
