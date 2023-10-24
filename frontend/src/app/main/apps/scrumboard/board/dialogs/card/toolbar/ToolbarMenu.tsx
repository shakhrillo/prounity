import Popover from '@mui/material/Popover';

type ToolbarMenuProps = {
	state: null | HTMLButtonElement;
	onClose: () => void;
	children: React.ReactNode;
};

/**
 * The toolbar menu component.
 */
function ToolbarMenu(props: ToolbarMenuProps) {
	const { state, onClose, children } = props;
	return (
		<Popover
			open={Boolean(state)}
			anchorEl={state}
			onClose={onClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center'
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center'
			}}
		>
			{children}
		</Popover>
	);
}

export default ToolbarMenu;
