import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useEffect, useImperativeHandle, useState, MouseEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { ChecklistType } from '../../../../types/ChecklistType';

type FormType = {
	name: ChecklistType['name'];
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	name: yup.string().required('You must enter a title')
});

export type CardChecklistHandle = {
	openForm: (ev: React.MouseEvent<HTMLElement>) => void;
};

type CardChecklistNameProps = {
	name: string;
	onNameChange: (name: string) => void;
};

/**
 * The card checklist name component.
 */
const CardChecklistName = forwardRef<CardChecklistHandle, CardChecklistNameProps>((props, ref) => {
	const { name, onNameChange } = props;

	const [formOpen, setFormOpen] = useState(false);
	const { control, formState, handleSubmit, reset } = useForm<FormType>({
		mode: 'onChange',
		defaultValues: {
			name
		},
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields } = formState;

	useEffect(() => {
		if (!formOpen) {
			reset({
				name
			});
		}
	}, [formOpen, reset, name]);

	useImperativeHandle(ref, () => {
		return {
			openForm: (ev) => handleOpenForm(ev)
		};
	});

	function handleOpenForm(ev: React.MouseEvent<HTMLElement>) {
		ev.stopPropagation();
		setFormOpen(true);
	}

	function handleCloseForm() {
		setFormOpen(false);
	}

	function onSubmit(data: FormType) {
		onNameChange(data.name);
		handleCloseForm();
	}

	return formOpen ? (
		<ClickAwayListener onClickAway={handleCloseForm}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="name"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							variant="outlined"
							margin="dense"
							autoFocus
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											type="submit"
											disabled={_.isEmpty(dirtyFields) || !isValid}
											size="large"
										>
											<FuseSvgIcon>heroicons-outline:check</FuseSvgIcon>
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
					)}
				/>
			</form>
		</ClickAwayListener>
	) : (
		<Typography
			className="text-16 font-semibold cursor-pointer mx-8"
			onClick={handleOpenForm}
		>
			{name}
		</Typography>
	);
});

export default CardChecklistName;
