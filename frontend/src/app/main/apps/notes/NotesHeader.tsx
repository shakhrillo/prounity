import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'app/store';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import NotesSearch from './NotesSearch';
import { selectVariateDescSize, toggleVariateDescSize } from './store/notesSlice';

type NotesHeaderProps = {
	onSetSidebarOpen: (open: boolean) => void;
};

/**
 * The notes header.
 */
function NotesHeader(props: NotesHeaderProps) {
	const { onSetSidebarOpen } = props;

	const dispatch = useAppDispatch();
	const variateDescSize = useAppSelector(selectVariateDescSize);

	return (
		<div className="flex flex-col sm:flex-row flex-1 items-center justify-between p-8 sm:p-24 sm:px-32 relative">
			<div className="flex shrink items-center sm:w-224">
				<Hidden lgUp>
					<IconButton
						onClick={() => onSetSidebarOpen(true)}
						aria-label="open left sidebar"
						size="large"
					>
						<FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
					</IconButton>
				</Hidden>

				<div className="flex items-center">
					<motion.span
						initial={{ x: -20 }}
						animate={{ x: 0, transition: { delay: 0.2 } }}
					>
						<Typography className="text-24 md:text-32 font-extrabold tracking-tight leading-none">
							Notes
						</Typography>
					</motion.span>
				</div>
			</div>

			<div className="flex flex-1 w-full sm:w-auto items-center justify-end space-x-12">
				<Tooltip title="Toggle Variate Description Size">
					<IconButton
						onClick={() => dispatch(toggleVariateDescSize())}
						size="large"
					>
						<FuseSvgIcon color={variateDescSize ? 'action' : 'disabled'}>
							heroicons-solid:switch-vertical
						</FuseSvgIcon>
					</IconButton>
				</Tooltip>
				<NotesSearch />
			</div>
		</div>
	);
}

export default NotesHeader;
