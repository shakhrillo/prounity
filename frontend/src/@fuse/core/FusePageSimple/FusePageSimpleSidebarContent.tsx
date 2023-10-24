import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { ReactNode } from 'react';

/**
 * Props for the FusePageSimpleSidebarContent component.
 */
type FusePageSimpleSidebarContentProps = {
	innerScroll?: boolean;
	children?: ReactNode;
};

/**
 * The FusePageSimpleSidebarContent component is a content container for the FusePageSimpleSidebar component.
 */
function FusePageSimpleSidebarContent(props: FusePageSimpleSidebarContentProps) {
	const { innerScroll, children } = props;

	if (!children) {
		return null;
	}

	return (
		<FuseScrollbars enable={innerScroll}>
			<div className="FusePageSimple-sidebarContent">{children}</div>
		</FuseScrollbars>
	);
}

export default FusePageSimpleSidebarContent;
