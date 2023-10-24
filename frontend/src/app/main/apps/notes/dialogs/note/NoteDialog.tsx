import { useDebounce } from '@fuse/hooks';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { forwardRef, ReactElement, ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import { useParams } from 'react-router-dom';
import {
	closeNoteDialog,
	getNotes,
	removeNote,
	RouteParamsType,
	selectDialogNote,
	updateNote
} from '../../store/notesSlice';
import NoteForm from '../../note-form/NoteForm';
import { NoteType } from '../../types/NoteType';

const Transition = forwardRef(function Transition(props: { children: ReactElement<ReactNode> }, ref) {
	const { children, ...other } = props;

	return (
		<Slide
			direction="up"
			ref={ref}
			{...other}
		>
			{children}
		</Slide>
	);
});

/**
 * The note dialog.
 */
function NoteDialog() {
	const dispatch = useAppDispatch();
	const routeParams = useParams();
	const note = useAppSelector(selectDialogNote);

	const handleOnChange = useDebounce((_note: NoteType) => {
		dispatch(updateNote(_note)).then(() => {
			dispatch(getNotes(routeParams as RouteParamsType));
		});
	}, 600);

	function handleOnRemove() {
		dispatch(removeNote(note?.id));
	}

	if (!note) {
		return null;
	}

	return (
		<Dialog
			classes={{
				paper: 'w-full m-24'
			}}
			TransitionComponent={Transition}
			onClose={() => dispatch(closeNoteDialog())}
			open={Boolean(note?.id)}
		>
			<NoteForm
				note={note}
				onChange={handleOnChange}
				onClose={() => dispatch(closeNoteDialog())}
				onRemove={handleOnRemove}
			/>
		</Dialog>
	);
}

export default NoteDialog;
