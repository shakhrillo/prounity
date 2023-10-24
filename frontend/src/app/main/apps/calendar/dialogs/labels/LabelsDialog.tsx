import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { useAppDispatch, useAppSelector } from 'app/store';
import { closeLabelsDialog, selectLabels, selectLabelsDialogOpen } from '../../store/labelsSlice';
import NewLabelForm from './NewLabelForm';
import LabelItemForm from './LabelItemForm';

/**
 * The labels dialog.
 */
function LabelsDialog() {
	const dispatch = useAppDispatch();
	const labelsDialogOpen = useAppSelector(selectLabelsDialogOpen);
	const labels = useAppSelector(selectLabels);

	return (
		<Dialog
			classes={{
				paper: 'w-full max-w-320 p-24 md:p-40 m-24'
			}}
			onClose={() => dispatch(closeLabelsDialog())}
			open={labelsDialogOpen}
		>
			<Typography className="text-20 mb-24 font-semibold">Edit Labels</Typography>

			<List dense>
				<NewLabelForm />

				{labels.map((item) => (
					<LabelItemForm
						label={item}
						key={item.id}
						isLast={labels.length === 1}
					/>
				))}
			</List>
		</Dialog>
	);
}

export default LabelsDialog;
