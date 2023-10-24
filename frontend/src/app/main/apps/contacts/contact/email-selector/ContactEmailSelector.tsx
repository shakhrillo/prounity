import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import { ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';
import EmailInput from './EmailInput';
import { ContactEmailsType, ContactEmailType } from '../../types/ContactEmailType';
import { ContactEmailModel } from '../../models/ContactModel';

type ContactEmailSelectorProps = {
	value: ContactEmailsType;
	onChange: (T: ContactEmailsType) => void;
	className?: string;
};

/**
 * The contact email selector.
 */
const ContactEmailSelector = forwardRef((props: ContactEmailSelectorProps, ref: ForwardedRef<HTMLDivElement>) => {
	const { value, onChange, className } = props;

	return (
		<div
			className={clsx('w-full', className)}
			ref={ref}
		>
			{value.map((item, index) => (
				<EmailInput
					value={item}
					key={index}
					onChange={(val: ContactEmailType) => {
						onChange(value.map((_item, _index) => (index === _index ? val : _item)));
					}}
					onRemove={() => {
						onChange(value.filter((_item, _index) => index !== _index));
					}}
					hideRemove={value.length === 1}
				/>
			))}
			<Button
				className="group inline-flex items-center mt-2 -ml-4 py-2 px-4 rounded cursor-pointer"
				onClick={() => onChange([...value, ContactEmailModel({})])}
			>
				<FuseSvgIcon size={20}>heroicons-solid:plus-circle</FuseSvgIcon>

				<span className="ml-8 font-medium text-secondary group-hover:underline">Add an email address</span>
			</Button>
		</div>
	);
});

export default ContactEmailSelector;
