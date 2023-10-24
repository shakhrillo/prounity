import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import IconButton from '@mui/material/IconButton';
import { Outlet } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/**
 * The contacts sidebar content.
 */
function ContactsSidebarContent() {
	return (
		<div className="flex flex-col flex-auto max-w-full w-md">
			<IconButton
				className="absolute top-0 right-0 my-16 mx-32 z-10"
				sx={{ color: 'white' }}
				component={NavLinkAdapter}
				to="/apps/contacts"
				size="large"
			>
				<FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
			</IconButton>

			<Outlet />
		</div>
	);
}

export default ContactsSidebarContent;
