import { useEffect, useState } from 'react';
import { useAppDispatch } from 'app/store';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import MailboxAppSidebarContent from './MailboxAppSidebarContent';
import { getFilters } from './store/filtersSlice';
import { getFolders } from './store/foldersSlice';
import { getLabels } from './store/labelsSlice';
import Mails from './mails/Mails';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-rightSidebar': {
		flex: '1',
		[theme.breakpoints.down('lg')]: {
			minWidth: '100%'
		}
	},
	'& .FusePageSimple-contentWrapper': {
		[theme.breakpoints.up('lg')]: {
			maxWidth: 400
		}
	}
}));

/**
 * The mailbox app.
 */
function MailboxApp() {
	const dispatch = useAppDispatch();
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
	const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);
	const routeParams = useParams();
	const { mailId } = routeParams;
	const location = useLocation();

	useEffect(() => {
		dispatch(getFilters());
		dispatch(getFolders());
		dispatch(getLabels());
	}, [dispatch]);

	useEffect(() => {
		if (isMobile) {
			setRightSidebarOpen(Boolean(mailId));
		} else {
			setRightSidebarOpen(true);
		}
	}, [mailId, isMobile]);

	useEffect(() => {
		setLeftSidebarOpen(!isMobile);
	}, [isMobile]);

	useEffect(() => {
		if (isMobile) {
			setLeftSidebarOpen(false);
		}
	}, [location, isMobile]);

	return (
		<Root
			content={<Mails onToggleLeftSidebar={() => setLeftSidebarOpen(!leftSidebarOpen)} />}
			leftSidebarContent={<MailboxAppSidebarContent />}
			leftSidebarOpen={leftSidebarOpen}
			leftSidebarOnClose={() => setLeftSidebarOpen(false)}
			leftSidebarWidth={288}
			scroll={isMobile ? 'normal' : 'content'}
			rightSidebarContent={<Outlet />}
			rightSidebarOpen={rightSidebarOpen}
			rightSidebarOnClose={() => setRightSidebarOpen(false)}
		/>
	);
}

export default MailboxApp;
