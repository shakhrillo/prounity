import Tooltip from '@mui/material/Tooltip';
import { useAppSelector } from 'app/store';
import Chip from '@mui/material/Chip';
import { selectLabelById } from '../../store/labelsSlice';

type BoardCardLabelProps = {
	id: string;
};

/**
 * The board card label component.
 */
function BoardCardLabel(props: BoardCardLabelProps) {
	const { id } = props;

	const label = useAppSelector(selectLabelById(id));

	if (!label) {
		return null;
	}

	return (
		<Tooltip
			title={label.title}
			key={id}
		>
			<Chip
				className="font-semibold text-12 mx-4 mb-6"
				label={label.title}
				size="small"
			/>
		</Tooltip>
	);
}

export default BoardCardLabel;
