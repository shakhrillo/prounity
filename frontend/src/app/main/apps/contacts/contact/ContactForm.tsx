import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import _ from '@lodash';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import Box from '@mui/system/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useAppDispatch, useAppSelector } from 'app/store';
import history from '@history';
import { addContact, getContact, newContact, removeContact, selectContact, updateContact } from '../store/contactSlice';
import { selectTags } from '../store/tagsSlice';
import ContactEmailSelector from './email-selector/ContactEmailSelector';
import PhoneNumberSelector from './phone-number-selector/PhoneNumberSelector';
import { ContactType } from '../types/ContactType';
import { TagsType } from '../types/TagType';
import { ContactEmailType, ContactEmailsType } from '../types/ContactEmailType';
import { ContactPhoneNumbersType, ContactPhoneNumberType } from '../types/ContactPhoneNumberType';

function BirtdayIcon() {
	return <FuseSvgIcon size={20}>heroicons-solid:cake</FuseSvgIcon>;
}

type FormType = Omit<ContactType, 'emails' | 'phoneNumbers'> & {
	emails: Partial<ContactEmailType>[];
	phoneNumbers: Partial<ContactPhoneNumberType>[];
};

/**
 * Form Validation Schema
 */
const contactEmailSchema = yup.object().shape({
	email: yup.string(),
	label: yup.string()
});

const contactPhoneNumberSchema = yup.object().shape({
	country: yup.string().required('You must select a country'),
	phoneNumber: yup.string().required('You must enter a phone number'),
	label: yup.string().required('You must enter a label')
});

const schema = yup.object().shape({
	id: yup.string().required('ID is required'),
	avatar: yup.string().required('Avatar is required'),
	background: yup.string().required('Background is required'),
	name: yup.string().required('Name is required'),
	emails: yup.array().of(contactEmailSchema),
	phoneNumbers: yup.array().of(contactPhoneNumberSchema),
	title: yup.string().required('Title is required'),
	company: yup.string().required('Company is required'),
	birthday: yup.string().required('Birthday is required'), // consider using date() if the format is ISO date string
	address: yup.string().required('Address is required'),
	notes: yup.string().required('Notes are required'),
	tags: yup.array().of(yup.string()).required('Tags are required')
});

/**
 * The contact form.
 */
function ContactForm() {
	const { data: contact } = useAppSelector(selectContact);
	const tags = useAppSelector(selectTags);
	const routeParams = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { control, watch, reset, handleSubmit, formState } = useForm<FormType>({
		mode: 'all',
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;

	const form = watch();

	useEffect(() => {
		if (routeParams.id === 'new') {
			dispatch(newContact());
		} else {
			dispatch(getContact(routeParams.id));
		}
	}, [dispatch, routeParams]);

	useEffect(() => {
		reset({ ...contact });
	}, [contact, reset]);

	/**
	 * Form Submit
	 */
	function onSubmit(data: ContactType) {
		if (routeParams.id === 'new') {
			dispatch(addContact(data)).then((action) => {
				const payload = action.payload as ContactType;
				navigate(`/apps/contacts/${payload.id}`);
			});
		} else {
			dispatch(updateContact(data));
		}
	}

	function handleRemoveContact() {
		if (!contact) {
			return;
		}
		dispatch(removeContact(contact.id)).then(() => {
			navigate('/apps/contacts');
		});
	}

	if (_.isEmpty(form) || !contact) {
		return <FuseLoading className="min-h-screen" />;
	}

	return (
		<>
			<Box
				className="relative w-full h-160 sm:h-192 px-32 sm:px-48"
				sx={{
					backgroundColor: 'background.default'
				}}
			>
				{contact.background && (
					<img
						className="absolute inset-0 object-cover w-full h-full"
						src={contact.background}
						alt="user background"
					/>
				)}
			</Box>

			<div className="relative flex flex-col flex-auto items-center px-24 sm:px-48">
				<div className="w-full">
					<div className="flex flex-auto items-end -mt-64">
						<Controller
							control={control}
							name="avatar"
							render={({ field: { onChange, value } }) => (
								<Box
									sx={{
										borderWidth: 4,
										borderStyle: 'solid',
										borderColor: 'background.paper'
									}}
									className="relative flex items-center justify-center w-128 h-128 rounded-full overflow-hidden"
								>
									<div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
									<div className="absolute inset-0 flex items-center justify-center z-20">
										<div>
											<label
												htmlFor="button-avatar"
												className="flex p-8 cursor-pointer"
											>
												<input
													accept="image/*"
													className="hidden"
													id="button-avatar"
													type="file"
													onChange={async (e) => {
														function readFileAsync() {
															return new Promise((resolve, reject) => {
																const file = e?.target?.files?.[0];
																if (!file) {
																	return;
																}
																const reader: FileReader = new FileReader();

																reader.onload = () => {
																	if (typeof reader.result === 'string') {
																		resolve(
																			`data:${file.type};base64,${btoa(
																				reader.result
																			)}`
																		);
																	} else {
																		reject(
																			new Error(
																				'File reading did not result in a string.'
																			)
																		);
																	}
																};

																reader.onerror = reject;

																reader.readAsBinaryString(file);
															});
														}

														const newImage = await readFileAsync();

														onChange(newImage);
													}}
												/>
												<FuseSvgIcon className="text-white">
													heroicons-outline:camera
												</FuseSvgIcon>
											</label>
										</div>
										<div>
											<IconButton
												onClick={() => {
													onChange('');
												}}
											>
												<FuseSvgIcon className="text-white">heroicons-solid:trash</FuseSvgIcon>
											</IconButton>
										</div>
									</div>
									<Avatar
										sx={{
											backgroundColor: 'background.default',
											color: 'text.secondary'
										}}
										className="object-cover w-full h-full text-64 font-bold"
										src={value}
										alt={contact.name}
									>
										{contact?.name?.charAt(0)}
									</Avatar>
								</Box>
							)}
						/>
					</div>
				</div>
				<Controller
					control={control}
					name="name"
					render={({ field }) => (
						<TextField
							className="mt-32"
							{...field}
							label="Name"
							placeholder="Name"
							id="name"
							error={!!errors.name}
							helperText={errors?.name?.message}
							variant="outlined"
							required
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<FuseSvgIcon size={20}>heroicons-solid:user-circle</FuseSvgIcon>
									</InputAdornment>
								)
							}}
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
							getOptionLabel={(option) => option?.title}
							renderOption={(_props, option, { selected }) => (
								<li {..._props}>
									<Checkbox
										style={{ marginRight: 8 }}
										checked={selected}
									/>
									{option?.title}
								</li>
							)}
							value={value ? (value.map((id) => _.find(tags, { id })) as TagsType) : ([] as TagsType)}
							onChange={(event, newValue) => {
								onChange(newValue.map((item) => item?.id));
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

				<Controller
					control={control}
					name="title"
					render={({ field }) => (
						<TextField
							className="mt-32"
							{...field}
							label="Title"
							placeholder="Job title"
							id="title"
							error={!!errors.title}
							helperText={errors?.title?.message}
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<FuseSvgIcon size={20}>heroicons-solid:briefcase</FuseSvgIcon>
									</InputAdornment>
								)
							}}
						/>
					)}
				/>

				<Controller
					control={control}
					name="company"
					render={({ field }) => (
						<TextField
							className="mt-32"
							{...field}
							label="Company"
							placeholder="Company"
							id="company"
							error={!!errors.company}
							helperText={errors?.company?.message}
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<FuseSvgIcon size={20}>heroicons-solid:office-building</FuseSvgIcon>
									</InputAdornment>
								)
							}}
						/>
					)}
				/>
				<Controller
					control={control}
					name="emails"
					render={({ field }) => (
						<ContactEmailSelector
							className="mt-32"
							{...field}
							value={field.value as ContactEmailsType}
							onChange={(val) => field.onChange(val)}
						/>
					)}
				/>

				<Controller
					control={control}
					name="phoneNumbers"
					render={({ field }) => (
						<PhoneNumberSelector
							className="mt-32"
							{...field}
							error={!!errors.phoneNumbers}
							helperText={errors?.phoneNumbers?.message}
							value={field.value as ContactPhoneNumbersType}
							onChange={(val) => field.onChange(val)}
						/>
					)}
				/>

				<Controller
					control={control}
					name="address"
					render={({ field }) => (
						<TextField
							className="mt-32"
							{...field}
							label="Address"
							placeholder="Address"
							id="address"
							error={!!errors.address}
							helperText={errors?.address?.message}
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<FuseSvgIcon size={20}>heroicons-solid:location-marker</FuseSvgIcon>
									</InputAdornment>
								)
							}}
						/>
					)}
				/>
				<Controller
					control={control}
					name="birthday"
					render={({ field: { value, onChange } }) => (
						<DateTimePicker
							value={new Date(value)}
							onChange={onChange}
							className="mt-32 mb-16 w-full"
							slotProps={{
								textField: {
									id: 'birthday',
									label: 'Birthday',
									InputLabelProps: {
										shrink: true
									},
									fullWidth: true,
									variant: 'outlined',
									error: !!errors.birthday,
									helperText: errors?.birthday?.message
								},
								actionBar: {
									actions: ['clear', 'today']
								}
							}}
							slots={{
								openPickerIcon: BirtdayIcon
							}}
						/>
					)}
				/>
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

			<Box
				className="flex items-center mt-40 py-14 pr-16 pl-4 sm:pr-48 sm:pl-36 border-t"
				sx={{ backgroundColor: 'background.default' }}
			>
				{routeParams.id !== 'new' && (
					<Button
						color="error"
						onClick={handleRemoveContact}
					>
						Delete
					</Button>
				)}
				<Button
					className="ml-auto"
					onClick={() => history.back()}
				>
					Cancel
				</Button>
				<Button
					className="ml-8"
					variant="contained"
					color="secondary"
					disabled={_.isEmpty(dirtyFields) || !isValid}
					onClick={handleSubmit(onSubmit)}
				>
					Save
				</Button>
			</Box>
		</>
	);
}

export default ContactForm;
