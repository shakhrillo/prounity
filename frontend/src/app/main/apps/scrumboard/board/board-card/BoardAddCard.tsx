import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { MouseEvent, useEffect, useState } from 'react';
import { useAppDispatch } from 'app/store';
import * as yup from 'yup';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { newCard } from '../../store/cardsSlice';

type FormType = {
	title: string;
};

const defaultValues = {
	title: ''
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	title: yup.string().required('You must enter a title')
});

type BoardAddCardProps = {
	listId: string;
	onCardAdded: () => void;
};

/**
 * The board add card component.
 */
function BoardAddCard(props: BoardAddCardProps) {
	const { listId, onCardAdded } = props;
	const dispatch = useAppDispatch();

	const [formOpen, setFormOpen] = useState(false);
	const { control, formState, handleSubmit, reset } = useForm<FormType>({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields } = formState;

	useEffect(() => {
		if (!formOpen) {
			reset(defaultValues);
		}
	}, [formOpen, reset]);

	function handleOpenForm(ev: MouseEvent<HTMLButtonElement>) {
		ev.stopPropagation();
		setFormOpen(true);
	}

	function handleCloseForm() {
		setFormOpen(false);
	}

	function onSubmit(newData: FormType) {
		dispatch(newCard({ listId, newData })).then(() => {
			onCardAdded();
		});

		handleCloseForm();
	}

	return (
		<div className="w-full">
			{formOpen ? (
				<ClickAwayListener onClickAway={handleCloseForm}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name="title"
							control={control}
							render={({ field }) => (
								<TextField
									className="mb-16"
									required
									fullWidth
									variant="filled"
									label="Card title"
									autoFocus
									InputProps={{
										...field,
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													onClick={handleCloseForm}
													size="large"
												>
													<FuseSvgIcon size={18}>heroicons-outline:x</FuseSvgIcon>
												</IconButton>
											</InputAdornment>
										)
									}}
								/>
							)}
						/>

						<div className="flex justify-between items-center">
							<Button
								variant="contained"
								color="secondary"
								type="submit"
								disabled={_.isEmpty(dirtyFields) || !isValid}
								size="small"
							>
								Add
							</Button>
						</div>
					</form>
				</ClickAwayListener>
			) : (
				<Button
					onClick={handleOpenForm}
					classes={{
						root: 'font-medium w-full rounded-lg p-24 justify-start'
					}}
					startIcon={<FuseSvgIcon>heroicons-outline:plus-circle</FuseSvgIcon>}
					sx={{ color: 'text.secondary' }}
				>
					Add another card
				</Button>
			)}
		</div>
	);
}

export default BoardAddCard;
