import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import CountryCodeSelector from './CountryCodeSelector';
import { ContactPhoneNumberType } from '../../types/ContactPhoneNumberType';

const schema = yup.object().shape({
	country: yup.string().required('You must select a country'),
	phoneNumber: yup.string().required('You must enter a phone number'),
	label: yup.string().required('You must enter a label')
});

const defaultValues = {
	country: '',
	phoneNumber: '',
	label: ''
};

type PhoneNumberInputProps = {
	value: ContactPhoneNumberType;
	onChange: (T: ContactPhoneNumberType) => void;
	onRemove: (T: ContactPhoneNumberType) => void;
	hideRemove?: boolean;
	error?: boolean;
};

/**
 * The phone number input.
 */
function PhoneNumberInput(props: PhoneNumberInputProps) {
	const { value, hideRemove, onChange, onRemove } = props;

	const { control, formState, handleSubmit, reset } = useForm<ContactPhoneNumberType>({
		mode: 'all',
		defaultValues,
		resolver: yupResolver(schema)
	});

	const { errors } = formState;

	useEffect(() => {
		reset(value);
	}, [reset, value]);

	function onSubmit(data: ContactPhoneNumberType) {
		onChange(data);
	}

	return (
		<form
			className="flex space-x-16 mb-16"
			onChange={handleSubmit(onSubmit)}
		>
			<Controller
				control={control}
				name="phoneNumber"
				render={({ field }) => (
					<TextField
						{...field}
						label="Phone Number"
						placeholder="Phone Number"
						variant="outlined"
						fullWidth
						error={!!errors.phoneNumber}
						helperText={errors?.phoneNumber?.message}
						InputProps={{
							startAdornment: (
								<Controller
									control={control}
									name="country"
									render={({ field: _field }) => (
										<InputAdornment position="start">
											<CountryCodeSelector {..._field} />
										</InputAdornment>
									)}
								/>
							)
						}}
					/>
				)}
			/>
			<Controller
				control={control}
				name="label"
				render={({ field }) => (
					<TextField
						{...field}
						label="Label"
						placeholder="Label"
						variant="outlined"
						fullWidth
						error={!!errors.label}
						helperText={errors?.label?.message}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<FuseSvgIcon size={20}>heroicons-solid:tag</FuseSvgIcon>
								</InputAdornment>
							)
						}}
					/>
				)}
			/>
			{!hideRemove && (
				<IconButton
					onClick={(ev) => {
						ev.stopPropagation();
						onRemove(value);
					}}
				>
					<FuseSvgIcon size={20}>heroicons-solid:trash</FuseSvgIcon>
				</IconButton>
			)}
		</form>
	);
}

PhoneNumberInput.defaultProps = {
	hideRemove: false
};

export default PhoneNumberInput;
