import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useAppDispatch } from 'app/store';
import NoteForm from './note-form/NoteForm';
import { createNote } from './store/notesSlice';
import { NoteType } from './types/NoteType';

/**
 * The new note component.
 */
function NewNote() {
	const dispatch = useAppDispatch();

	const [formOpen, setFormOpen] = useState(false);

	function handleFormOpen(ev: React.MouseEvent<HTMLDivElement>) {
		ev.stopPropagation();
		setFormOpen(true);
		document.addEventListener('keydown', escFunction, false);
	}

	function handleFormClose() {
		if (!formOpen) {
			return;
		}
		setFormOpen(false);
		document.removeEventListener('keydown', escFunction, false);
	}

	function handleCreate(note: NoteType) {
		dispatch(createNote(note));
		handleFormClose();
	}

	function escFunction(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			handleFormClose();
		}
	}

	function handleClickAway(event: MouseEvent | TouchEvent) {
		const preventCloseElements = document.querySelector('.prevent-add-close');
		const preventClose = preventCloseElements ? preventCloseElements.contains(event.target as Node) : false;
		if (preventClose) {
			return;
		}
		handleFormClose();
	}

	return (
		<Paper className="flex items-center w-full max-w-512 mt-8 mb-16 min-h-48 shadow shrink-0 cursor-text">
			{formOpen ? (
				<ClickAwayListener onClickAway={handleClickAway}>
					<div className="w-full">
						<NoteForm
							onCreate={handleCreate}
							variant="new"
						/>
					</div>
				</ClickAwayListener>
			) : (
				<Typography
					className="px-16 py-12 text-16 w-full"
					color="text.secondary"
					onClick={handleFormOpen}
				>
					Take a note...
				</Typography>
			)}
		</Paper>
	);
}

export default NewNote;
