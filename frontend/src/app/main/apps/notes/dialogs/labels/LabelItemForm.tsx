import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ListItem from '@mui/material/ListItem';
import clsx from 'clsx';
import * as yup from 'yup';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useEffect } from 'react';
import { useDebounce } from '@fuse/hooks';
import _ from '@lodash';
import { useAppDispatch } from 'app/store';
import { removeLabel, updateLabel } from '../../store/labelsSlice';
import { LabelType } from '../../types/LabelType';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	id: yup.string().required(),
	title: yup.string().required('You must enter a label title')
});

type LabelFormProps = {
	label: LabelType;
};

/**
 * The new label form.
 */
function NewLabelForm(props: LabelFormProps) {
	const { label } = props;
	const dispatch = useAppDispatch();

	const { control, formState, reset, watch } = useForm<LabelType>({
		mode: 'onChange',
		defaultValues: label,
		resolver: yupResolver(schema)
	});

	const { errors } = formState;
	const form = watch();

	useEffect(() => {
		reset(label);
	}, [label, reset]);

	const handleOnChange = useDebounce((_label: LabelType, _form: LabelType) => {
		if (!_label) {
			return;
		}
		if (form && !_.isEqual(_form, _label)) {
			dispatch(updateLabel(_form));
		}
	}, 300);

	useEffect(() => {
		handleOnChange(label, form);
	}, [handleOnChange, label, form]);

	function handleOnRemove() {
		dispatch(removeLabel(label.id));
	}

	return (
		<ListItem
			className="p-0 mb-16"
			dense
		>
			<Controller
				name="title"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className={clsx('flex flex-1')}
						error={!!errors.title}
						helperText={errors?.title?.message}
						placeholder="Create new label"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<FuseSvgIcon color="action">heroicons-outline:tag</FuseSvgIcon>
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										onClick={handleOnRemove}
										className="w-32 h-32 p-0"
										aria-label="Delete"
										size="large"
									>
										<FuseSvgIcon
											color="action"
											size={20}
										>
											heroicons-outline:trash
										</FuseSvgIcon>
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
				)}
			/>
		</ListItem>
	);
}

export default NewLabelForm;
