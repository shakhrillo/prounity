import { useAppSelector } from 'app/store';
import _ from '@lodash';
import * as React from 'react';
import { ForwardedRef, forwardRef, MouseEvent, useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/system/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import clsx from 'clsx';
import { selectCountries } from '../../store/countriesSlice';

type CountryCodeSelectorProps = {
	value: string;
	onChange: (T: string) => void;
	className?: string;
};

/**
 * The country code selector.
 */
const CountryCodeSelector = forwardRef((props: CountryCodeSelectorProps, ref: ForwardedRef<HTMLDivElement>) => {
	const { value, onChange, className } = props;

	const countries = useAppSelector(selectCountries);
	const country = _.find(countries, { iso: value });
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div ref={ref}>
			<Button
				className={clsx('flex items-center', className)}
				id="country-button"
				aria-controls={open ? 'country-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
				disableRipple
			>
				<Box
					component="span"
					className="w-24 h-16 overflow-hidden"
					sx={{
						background: "url('/assets/images/apps/contacts/flags.png') no-repeat 0 0",
						backgroundSize: '24px 3876px',
						backgroundPosition: country?.flagImagePos
					}}
				/>
				<span className="ml-8 font-medium">{country?.code}</span>
			</Button>
			<Menu
				id="country-menu"
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button'
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				{countries.map((item) => (
					<MenuItem
						onClick={() => {
							onChange(item.iso);
							handleClose();
						}}
						disableRipple
						key={item.iso}
					>
						<Box
							component="span"
							className="w-24 h-16 overflow-hidden"
							sx={{
								background: "url('/assets/images/apps/contacts/flags.png') no-repeat 0 0",
								backgroundSize: '24px 3876px',
								backgroundPosition: item.flagImagePos
							}}
						/>
						<span className="ml-8 font-medium">{item.code}</span>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
});

export default CountryCodeSelector;
