import { Outlet } from 'react-router-dom';

/**
 * The tasks sidebar content.
 */
function TasksSidebarContent() {
	return (
		<div className="flex flex-col flex-auto">
			<Outlet />
		</div>
	);
}

export default TasksSidebarContent;
