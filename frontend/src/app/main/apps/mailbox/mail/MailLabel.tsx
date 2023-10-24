import Chip from '@mui/material/Chip';
import clsx from 'clsx';
import { useAppSelector } from 'app/store';
import { selectLabelById } from '../store/labelsSlice';
import { labelColorDefs } from './labelColors';

type MailLabelProps = {
	className?: string;
	labelId?: string;
};

/**
 * The mail label.
 */
function MailLabel(props: MailLabelProps) {
	const { labelId, className = '' } = props;
	const label = useAppSelector(selectLabelById(labelId));

	if (!label) {
		return null;
	}

	return (
		<Chip
			label={label.title}
			classes={{
				root: clsx('h-24 border-0', className, labelColorDefs[label.color]?.combined),
				label: 'px-12 py-4 text-12 font-medium leading-none'
			}}
		/>
	);
}

export default MailLabel;
