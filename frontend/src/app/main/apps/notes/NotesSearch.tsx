import { useAppDispatch, useAppSelector } from 'app/store';
import { OutlinedInput } from '@mui/material';
import { motion } from 'framer-motion';
import InputAdornment from '@mui/material/InputAdornment';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectSearchText, setNotesSearchText } from './store/notesSlice';

/**
 * The notes search.
 */
function NotesSearch() {
	const dispatch = useAppDispatch();
	const searchText = useAppSelector(selectSearchText);

	return (
		<motion.div
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
		>
			<OutlinedInput
				className="flex flex-1 items-center px-16 rounded-full h-40 w-fullsm:max-w-240"
				placeholder="Search note"
				fullWidth
				startAdornment={
					<InputAdornment position="start">
						<FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>
					</InputAdornment>
				}
				inputProps={{
					'aria-label': 'Search'
				}}
				value={searchText}
				onChange={(ev) => dispatch(setNotesSearchText(ev))}
			/>
		</motion.div>
	);
}

export default NotesSearch;
