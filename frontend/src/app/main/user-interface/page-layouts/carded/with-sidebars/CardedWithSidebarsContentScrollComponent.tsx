import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useEffect, useState } from 'react';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import DemoHeader from '../../shared-components/DemoHeader';
import DemoContent from '../../shared-components/DemoContent';
import DemoSidebar from '../../shared-components/DemoSidebar';

const Root = styled(FusePageCarded)(() => ({
	'& .FusePageCarded-header': {},
	'& .FusePageCarded-toolbar': {},
	'& .FusePageCarded-content': {},
	'& .FusePageCarded-sidebarHeader': {},
	'& .FusePageCarded-sidebarContent': {}
}));

/**
 * The CardedWithSidebarsContentScroll page.
 */
function CardedWithSidebarsContentScrollComponent() {
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
	const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);

	useEffect(() => {
		setLeftSidebarOpen(!isMobile);
		setRightSidebarOpen(!isMobile);
	}, [isMobile]);

	return (
		<Root
			header={
				<DemoHeader
					leftSidebarToggle={() => {
						setLeftSidebarOpen(!leftSidebarOpen);
					}}
					rightSidebarToggle={() => {
						setRightSidebarOpen(!rightSidebarOpen);
					}}
				/>
			}
			content={<DemoContent />}
			leftSidebarOpen={leftSidebarOpen}
			leftSidebarOnClose={() => {
				setLeftSidebarOpen(false);
			}}
			leftSidebarContent={<DemoSidebar />}
			rightSidebarOpen={rightSidebarOpen}
			rightSidebarOnClose={() => {
				setRightSidebarOpen(false);
			}}
			rightSidebarContent={<DemoSidebar />}
			scroll="content"
		/>
	);
}

export default CardedWithSidebarsContentScrollComponent;
