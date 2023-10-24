import Dialog from '@mui/material/Dialog';
import { closeDialog, selectFuseDialogProps } from 'app/store/fuse/dialogSlice';
import { useAppDispatch, useAppSelector } from 'app/store';

/**
 * FuseDialog component
 * This component renders a material UI ```Dialog``` component
 * with properties pulled from the redux store
 */
function FuseDialog() {
	const dispatch = useAppDispatch();
	const options = useAppSelector(selectFuseDialogProps);

	return (
		<Dialog
			onClose={() => dispatch(closeDialog())}
			aria-labelledby="fuse-dialog-title"
			classes={{
				paper: 'rounded-8'
			}}
			{...options}
		/>
	);
}

export default FuseDialog;
