import Dialog from '@mui/material/Dialog';
import { useAppDispatch, useAppSelector } from 'app/store';
import { closeCardDialog, selectCardDialogOpen } from '../../../store/cardSlice';
import BoardCardForm from './BoardCardForm';

/**
 * The board card dialog component.
 */
function BoardCardDialog() {
	const dispatch = useAppDispatch();
	const cardDialogOpen = useAppSelector(selectCardDialogOpen);

	return (
		<Dialog
			classes={{
				paper: 'max-w-lg w-full m-8 sm:m-24'
			}}
			onClose={() => dispatch(closeCardDialog())}
			open={cardDialogOpen}
		>
			<BoardCardForm />
		</Dialog>
	);
}

export default BoardCardDialog;
