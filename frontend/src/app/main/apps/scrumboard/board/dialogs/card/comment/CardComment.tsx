import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useAppSelector } from 'app/store';
import { selectMemberById } from '../../../../store/membersSlice';
import CommentModel from '../../../../models/CommentModel';
import { CommentType } from '../../../../types/CommentType';

type FormType = {
	message: CommentType['message'];
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	message: yup.string().required('You must enter a comment')
});

const defaultValues = {
	idMember: 'baa88231-0ee6-4028-96d5-7f187e0f4cd5',
	message: ''
};

type CardCommentProps = {
	onCommentAdd: (comment: CommentType) => void;
};

/**
 * The card comment component.
 */
function CardComment(props: CardCommentProps) {
	const { onCommentAdd } = props;

	const user = useAppSelector(selectMemberById(defaultValues.idMember));

	const { control, formState, handleSubmit, reset } = useForm<FormType>({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;

	function onSubmit(data: FormType) {
		onCommentAdd(CommentModel({ ...defaultValues, ...data }));
		reset(defaultValues);
	}

	if (!user) {
		return null;
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex -mx-8"
		>
			<Avatar
				className="w-32 h-32 mx-8"
				alt={user.name}
				src={user.avatar}
			/>
			<div className="flex flex-col items-start flex-1 mx-8">
				<Controller
					name="message"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							className="flex flex-1"
							fullWidth
							error={!!errors.message}
							helperText={errors?.message?.message}
							rows={3}
							variant="outlined"
							label="Add comment"
							placeholder="Write a comment..."
						/>
					)}
				/>

				<Button
					className="mt-16"
					aria-label="save"
					variant="contained"
					color="secondary"
					type="submit"
					size="small"
					disabled={_.isEmpty(dirtyFields) || !isValid}
				>
					Save
				</Button>
			</div>
		</form>
	);
}

export default CardComment;
