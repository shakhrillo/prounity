import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, Resolver, useForm } from 'react-hook-form';
import _ from '@lodash';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import withRouter from '@fuse/core/withRouter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import * as yup from 'yup';
import format from 'date-fns/format';
import { WithRouterProps } from '@fuse/core/withRouter/withRouter';
import NoteFormList from './tasks/NoteFormList';
import NoteFormLabelMenu from './NoteFormLabelMenu';
import NoteFormReminder from './NoteFormReminder';
import NoteFormUploadImage from './NoteFormUploadImage';
import NoteModel from '../models/NoteModel';
import NoteReminderLabel from '../NoteReminderLabel';
import NoteLabel from '../NoteLabel';
import { NoteType } from '../types/NoteType';
/**
 * Form Validation Schema
 */
const tasksSchema = yup.object().shape({
	id: yup.string().required('ID is required'),
	content: yup.string().required('Content is required'),
	completed: yup.boolean().required('Completed status is required')
});

const schema = yup.object().shape({
	id: yup.string(),
	title: yup.string(),
	content: yup.string(),
	tasks: yup.array().of(tasksSchema).default([]).notRequired(),
	labels: yup.array().of(yup.string()).default([]).notRequired(),
	image: yup.string().nullable(),
	reminder: yup.string().nullable(),
	archived: yup.boolean(),
	createdAt: yup.string(),
	updatedAt: yup.string(),
	oneOfThemRequired: yup
		.bool()
		.default(undefined)
		.when(['title', 'content', 'image', 'tasks'], {
			is: (a: string | undefined, b: string | undefined, c: string | undefined, d: string | undefined) =>
				(!a && !b && !c && !d) || (!!a && !!b && !!c && !!d),
			then: (_schema) => _schema.required('At least one of the fields is required.'),
			otherwise: (_schema) => _schema.nullable()
		})
});

type NoteFormProps = WithRouterProps & {
	variant?: 'new' | 'edit';
	note?: NoteType;
	onChange?: (note: NoteType) => void;
	onCreate?: (note: NoteType) => void;
	onRemove?: () => void;
	onClose?: () => void;
};

/**
 * The note form.
 */
function NoteForm(props: NoteFormProps) {
	const { note = null, variant = 'edit', onChange: onFormChange, onCreate, onRemove, onClose } = props;
	const [showList, setShowList] = useState(false);
	const routeParams = useParams();

	const defaultValues = _.merge(
		{ oneOfThemRequired: true },
		NoteModel({}),
		note,
		routeParams.labelId ? { labels: [routeParams.labelId] } : null,
		routeParams.id === 'archive' ? { archived: true } : null
	);

	const { formState, handleSubmit, getValues, watch, setValue, control } = useForm<NoteType>({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema) as unknown as Resolver<NoteType>
	});

	const { isValid, dirtyFields } = formState;

	const noteForm = watch();

	/**
	 * Update Note
	 */
	useEffect(() => {
		if (note && variant !== 'new' && onFormChange && !_.isEqual(note, noteForm)) {
			onFormChange(noteForm);
		}
	}, [noteForm, note, variant, onFormChange, defaultValues]);

	/**
	 * Create New Note
	 */
	function onSubmitNewNote(data: NoteType) {
		if (!onCreate) {
			return;
		}
		onCreate(data);
	}

	return (
		<div className="flex flex-col w-full">
			<FuseScrollbars className="flex flex-auto w-full max-h-640">
				<div className="w-full">
					<Controller
						name="image"
						control={control}
						defaultValue=""
						render={({ field: { onChange, value } }) => {
							if (!value || value === '') {
								return <span />;
							}
							return (
								<div className="relative">
									<img
										src={value}
										className="w-full block"
										alt="note"
									/>
									<Fab
										className="absolute right-0 bottom-0 m-8"
										variant="extended"
										size="small"
										color="secondary"
										aria-label="Delete Image"
										type="button"
										onClick={() => onChange('')}
									>
										<FuseSvgIcon size={20}>heroicons-outline:trash</FuseSvgIcon>
									</Fab>
								</div>
							);
						}}
					/>

					<div className="px-20 my-16">
						<Controller
							name="title"
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									className="font-semibold text-14"
									placeholder="Title"
									type="text"
									disableUnderline
									fullWidth
								/>
							)}
						/>
					</div>
					<div className="px-20 my-16">
						<Controller
							name="content"
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									placeholder="Take a note..."
									multiline
									rows="4"
									disableUnderline
									fullWidth
								/>
							)}
						/>
					</div>

					<Controller
						name="tasks"
						control={control}
						defaultValue={[]}
						render={({ field: { onChange, value } }) => {
							if ((value?.length === 0 && !showList) || (!value && !showList)) {
								return <span />;
							}
							return (
								<div className="px-16">
									<NoteFormList
										tasks={value || []}
										onCheckListChange={(val) => onChange(val)}
									/>
								</div>
							);
						}}
					/>

					{(noteForm.labels || noteForm.reminder || noteForm.createdAt) && (
						<div className="flex flex-wrap w-full px-20 my-16 -mx-4">
							{noteForm.reminder && (
								<NoteReminderLabel
									className="mt-4 mx-4"
									date={noteForm.reminder}
									onDelete={() => {
										setValue('reminder', undefined);
									}}
								/>
							)}

							<Controller
								name="labels"
								control={control}
								defaultValue={[]}
								render={({ field: { onChange, value } }) => {
									if (!value) {
										return <span />;
									}
									return (
										<>
											{value.map((id) => (
												<NoteLabel
													id={id}
													key={id}
													className="mt-4 mx-4"
													onDelete={() => onChange(value.filter((_id) => _id !== id))}
												/>
											))}
										</>
									);
								}}
							/>

							{noteForm.createdAt && (
								<Typography
									color="text.secondary"
									className="text-12 mt-8 mx-4"
								>
									Edited: {format(new Date(noteForm.createdAt), 'MMM dd yy, h:mm')}
								</Typography>
							)}
						</div>
					)}
				</div>
			</FuseScrollbars>

			<div className="flex flex-auto justify-between items-center px-16 pb-12">
				<div className="flex items-center">
					<Tooltip
						title="Remind me"
						placement="bottom"
					>
						<div>
							<Controller
								name="reminder"
								control={control}
								render={({ field: { onChange, value } }) => (
									<NoteFormReminder
										reminder={value}
										onChange={onChange}
									/>
								)}
							/>
						</div>
					</Tooltip>

					<Tooltip
						title="Add image"
						placement="bottom"
					>
						<div>
							<NoteFormUploadImage
								onChange={(val: string) =>
									setValue('image', val, { shouldDirty: true, shouldValidate: true })
								}
							/>
						</div>
					</Tooltip>

					<Tooltip
						title="Add tasks"
						placement="bottom"
					>
						<IconButton
							className="w-32 h-32 mx-4 p-0"
							onClick={() => setShowList(!showList)}
							size="large"
						>
							<FuseSvgIcon size={20}>heroicons-outline:pencil-alt</FuseSvgIcon>
						</IconButton>
					</Tooltip>

					<Tooltip
						title="Change labels"
						placement="bottom"
					>
						<div>
							<NoteFormLabelMenu
								note={noteForm}
								onChange={(labels: string[]) => setValue('labels', labels)}
							/>
						</div>
					</Tooltip>

					<Controller
						name="archived"
						control={control}
						defaultValue={false}
						render={({ field: { onChange, value } }) => (
							<Tooltip
								title={value ? 'Unarchive' : 'Archive'}
								placement="bottom"
							>
								<div>
									<IconButton
										className="w-32 h-32 mx-4 p-0"
										// disabled={newFormButtonDisabled()}
										onClick={() => {
											onChange(!value);

											if (variant === 'new') {
												setTimeout(() => onSubmitNewNote(getValues()));
											}
										}}
										size="large"
									>
										<FuseSvgIcon size={20}>
											{value ? 'heroicons-solid:archive' : 'heroicons-outline:archive'}
										</FuseSvgIcon>
									</IconButton>
								</div>
							</Tooltip>
						)}
					/>
				</div>

				<div className="flex items-center">
					{variant === 'new' ? (
						<Button
							className="m-4 p-8"
							type="submit"
							variant="contained"
							color="secondary"
							size="small"
							onClick={handleSubmit(onSubmitNewNote)}
							disabled={_.isEmpty(dirtyFields) || !isValid}
						>
							Create
						</Button>
					) : (
						<>
							<Tooltip
								title="Delete Note"
								placement="bottom"
							>
								<IconButton
									className="w-32 h-32 mx-4 p-0"
									onClick={onRemove}
									size="large"
								>
									<FuseSvgIcon size={20}>heroicons-outline:trash</FuseSvgIcon>
								</IconButton>
							</Tooltip>
							<Button
								className="m-4"
								onClick={onClose}
								variant="text"
							>
								Close
							</Button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default withRouter(NoteForm);
