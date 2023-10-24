import FuseUtils from '@fuse/utils';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { useAppSelector } from 'app/store';
import withRouter from '@fuse/core/withRouter';
import { useParams } from 'react-router-dom';
import NoteListItem from './NoteListItem';
import { selectNotes, selectSearchText, selectVariateDescSize } from './store/notesSlice';
import { NotesType } from './types/NoteType';

/**
 * The note list.
 */
function NoteList() {
	const notes = useAppSelector(selectNotes);
	const variateDescSize = useAppSelector(selectVariateDescSize);
	const searchText = useAppSelector(selectSearchText);
	const params = useParams<{ id: string; labelId: string }>();
	const [filteredData, setFilteredData] = useState<NotesType>([]);

	useEffect(() => {
		function filterData() {
			let data = notes;

			if (searchText.length === 0) {
				return data;
			}

			data = FuseUtils.filterArrayByString(data, searchText);

			return data;
		}

		if (notes.length > 0) {
			setFilteredData(filterData());
		}
	}, [notes, searchText, params]);

	return !filteredData || filteredData.length === 0 ? (
		<div className="flex items-center justify-center h-full">
			<Typography
				color="text.secondary"
				variant="h5"
			>
				There are no notes!
			</Typography>
		</div>
	) : (
		<div className="flex flex-wrap w-full">
			<Masonry
				breakpointCols={{
					default: 6,
					1920: 5,
					1600: 4,
					1366: 3,
					1280: 4,
					960: 3,
					600: 2,
					480: 1
				}}
				className="my-masonry-grid flex w-full"
				columnClassName="my-masonry-grid_column flex flex-col p-8"
			>
				{filteredData.map((note) => (
					<NoteListItem
						key={note.id}
						note={note}
						className="w-full rounded-20 shadow mb-16"
						variateDescSize={variateDescSize}
					/>
				))}
			</Masonry>
		</div>
	);
}

export default withRouter(NoteList);
