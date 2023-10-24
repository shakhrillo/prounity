import Button from '@mui/material/Button';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { useAppDispatch, useAppSelector } from 'app/store';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import _ from '@lodash';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import Box from '@mui/system/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import IconButton from '@mui/material/IconButton';
import { useDeepCompareEffect } from '@fuse/hooks';
import TaskPrioritySelector from './TaskPrioritySelector';
import FormActionsMenu from './FormActionsMenu';
import { addTask, getTask, newTask, selectTask, updateTask } from '../store/taskSlice';
import { selectTags } from '../store/tagsSlice';
import { TaskType } from '../types/TaskType';
import { TagsType, TagType } from '../types/TagType';

/**
 * Form Validation Schema
 */

const subTaskSchema = yup.object().shape({
	id: yup.string().required(),
	title: yup.string().required(),
	completed: yup.boolean().required()
});

const schema = yup.object().shape({
	id: yup.string().required(),
	type: yup.string().required(),
	title: yup.string().required('You must enter a name'),
	notes: yup.string().nullable().default(null),
	completed: yup.boolean().required(),
	dueDate: yup.string().nullable().default(null),
	priority: yup.number().required(),
	tags: yup.array(yup.string()).required(),
	assignedTo: yup.string().nullable().default(null),
	subTasks: yup.array(subTaskSchema).required(),
	order: yup.number().required()
});

/**
 * The task form.
 */
function TaskForm() {
	const { data: task } = useAppSelector(selectTask);
	const tags = useAppSelector(selectTags);
	const routeParams = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { control, watch, reset, handleSubmit, formState } = useForm<TaskType>({
		mode: 'onChange',
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;

	const form = watch();

	/**
	 * Update Task
	 */
	useDeepCompareEffect(() => {
		if (!isValid || _.isEmpty(form) || !task || routeParams.id === 'new') {
			return;
		}

		if (!_.isEqual(task, form)) {
			onSubmit(form);
		}
	}, [form, isValid]);

	useEffect(() => {
		if (routeParams.id === 'new') {
			dispatch(newTask(routeParams.type));
		} else {
			dispatch(getTask(routeParams.id));
		}
	}, [dispatch, routeParams]);

	useEffect(() => {
		reset({ ...task });
	}, [task, reset]);

	/**
	 * Form Submit
	 */
	function onSubmit(data: TaskType) {
		dispatch(updateTask(data));
	}

	function onSubmitNew(data: TaskType) {
		dispatch(addTask(data)).then(({ payload }) => {
			const { id } = payload as TaskType;

			navigate(`/apps/tasks/${id}`);
		});
	}

	if (_.isEmpty(form) || !task) {
		return <FuseLoading />;
	}

	return (
		<>
			<div className="relative flex flex-col flex-auto items-center px-24 sm:px-48">
				<div className="flex items-center justify-between border-b-1 w-full py-24 mt-16 mb-32">
					<Controller
						control={control}
						name="completed"
						render={({ field: { value, onChange } }) => (
							<Button
								className="font-semibold"
								onClick={() => onChange(!value)}
							>
								<Box sx={{ color: value ? 'secondary.main' : 'text.disabled' }}>
									<FuseSvgIcon>heroicons-outline:check-circle</FuseSvgIcon>
								</Box>
								<span className="mx-8">
									{task.completed ? 'MARK AS INCOMPLETE' : 'MARK AS COMPLETE'}
								</span>
							</Button>
						)}
					/>
					<div className="flex items-center">
						{routeParams.id !== 'new' && <FormActionsMenu taskId={task.id} />}
						<IconButton
							component={NavLinkAdapter}
							to="/apps/tasks"
							size="large"
						>
							<FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
						</IconButton>
					</div>
				</div>

				<Controller
					control={control}
					name="title"
					render={({ field }) => (
						<TextField
							className="mt-32 max-h-auto"
							{...field}
							label={`${_.upperFirst(form.type)} title`}
							placeholder="Job title"
							id="title"
							error={!!errors.title}
							helperText={errors?.title?.message}
							variant="outlined"
							fullWidth
							multiline
							minRows={3}
							maxRows={10}
						/>
					)}
				/>

				<Controller
					control={control}
					name="tags"
					render={({ field: { onChange, value } }) => (
						<Autocomplete
							multiple
							id="tags"
							className="mt-32"
							options={tags || []}
							disableCloseOnSelect
							getOptionLabel={(option: TagType) => option?.title}
							renderOption={(_props, option: TagType, { selected }) => (
								<li {..._props}>
									<Checkbox
										style={{ marginRight: 8 }}
										checked={selected}
									/>
									{option?.title}
								</li>
							)}
							value={value ? (value.map((id) => _.find(tags, { id })) as TagsType) : []}
							onChange={(event, newValue) => {
								onChange(newValue.map((item: TagType) => item.id));
							}}
							fullWidth
							renderInput={(params) => (
								<TextField
									{...params}
									label="Tags"
									placeholder="Tags"
								/>
							)}
						/>
					)}
				/>
				<div className="flex w-full space-x-16 mt-32 mb-16 items-center">
					<Controller
						control={control}
						name="priority"
						render={({ field }) => <TaskPrioritySelector {...field} />}
					/>

					<Controller
						control={control}
						name="dueDate"
						render={({ field: { value, onChange } }) => (
							<DateTimePicker
								className="w-full"
								value={new Date(value)}
								onChange={onChange}
								slotProps={{
									textField: {
										id: 'due-date',
										label: 'Due date',
										InputLabelProps: {
											shrink: true
										},
										fullWidth: true,
										variant: 'outlined'
									},
									actionBar: {
										actions: ['clear', 'today']
									}
								}}
							/>
						)}
					/>
				</div>

				<Controller
					control={control}
					name="notes"
					render={({ field }) => (
						<TextField
							className="mt-32"
							{...field}
							label="Notes"
							placeholder="Notes"
							id="notes"
							error={!!errors.notes}
							helperText={errors?.notes?.message}
							variant="outlined"
							fullWidth
							multiline
							minRows={5}
							maxRows={10}
							InputProps={{
								className: 'max-h-min h-min items-start',
								startAdornment: (
									<InputAdornment
										className="mt-16"
										position="start"
									>
										<FuseSvgIcon size={20}>heroicons-solid:menu-alt-2</FuseSvgIcon>
									</InputAdornment>
								)
							}}
						/>
					)}
				/>
			</div>
			{routeParams.id === 'new' && (
				<Box
					className="flex items-center mt-40 py-14 pr-16 pl-4 sm:pr-48 sm:pl-36 border-t"
					sx={{ backgroundColor: 'background.default' }}
				>
					<Button
						onClick={() => {
							navigate(-1);
						}}
						className="ml-auto"
					>
						Cancel
					</Button>
					<Button
						className="ml-8"
						variant="contained"
						color="secondary"
						disabled={_.isEmpty(dirtyFields) || !isValid}
						onClick={handleSubmit(onSubmitNew)}
					>
						Create
					</Button>
				</Box>
			)}
		</>
	);
}

export default TaskForm;
