import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@mui/material/Fab';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ChecklistItemModel from '../../../../models/ChecklistItemModel';
import { CheckListItemType } from '../../../../types/CheckListItemType';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	name: yup.string().required('You must enter a title')
});

type CardAddChecklistItemProps = {
	name?: string;
	onListItemAdd: (item: CheckListItemType) => void;
};

/**
 * The card add checklist item component.
 */
function CardAddChecklistItem(props: CardAddChecklistItemProps) {
	const { name = '', onListItemAdd } = props;
	const { control, formState, handleSubmit, reset } = useForm({
		mode: 'onChange',
		defaultValues: {
			name
		},
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields } = formState;

	function onSubmit(data: CheckListItemType) {
		onListItemAdd(ChecklistItemModel(data));
		reset({
			name
		});
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ListItem
				className="px-0"
				dense
			>
				<span className="w-40" />
				<Controller
					name="name"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<TextField
							{...field}
							className="flex flex-1 mx-8"
							name="name"
							variant="outlined"
							placeholder="Add an item"
						/>
					)}
				/>
				<Fab
					className="mx-4"
					aria-label="Add"
					size="small"
					color="secondary"
					type="submit"
					disabled={_.isEmpty(dirtyFields) || !isValid}
				>
					<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>
				</Fab>
			</ListItem>
		</form>
	);
}

export default CardAddChecklistItem;
