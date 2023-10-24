import { useDebounce, usePrevious } from '@fuse/hooks';
import { styled } from '@mui/material/styles';
import { Controller, useForm } from 'react-hook-form';
import themeLayoutConfigs, { themeLayoutDefaultsProps } from 'app/theme-layouts/themeLayoutConfigs';
import _ from '@lodash';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectFuseCurrentSettings, setDefaultSettings } from 'app/store/fuse/settingsSlice';
import { selectUser } from 'app/store/user/userSlice';
import { useAppDispatch } from 'app/store';
import { Palette } from '@mui/material/styles/createPalette';
import ThemeFormConfigTypes from '@fuse/core/FuseSettings/ThemeFormConfigTypes';
import { PartialDeep } from 'type-fest';
import PaletteSelector from './palette-generator/PaletteSelector';
import SectionPreview from './palette-generator/SectionPreview';

/**
 * The Root styled component is used to style the root div of the FuseSettings component.
 * It uses the styled function from the MUI styles library to create a styled component.
 */
const Root = styled('div')(({ theme }) => ({
	'& .FuseSettings-formControl': {
		margin: '6px 0',
		width: '100%',
		'&:last-child': {
			marginBottom: 0
		}
	},

	'& .FuseSettings-group': {},

	'& .FuseSettings-formGroupTitle': {
		position: 'absolute',
		top: -10,
		left: 8,
		fontWeight: 600,
		padding: '0 4px',
		backgroundColor: theme.palette.background.paper
	},

	'& .FuseSettings-formGroup': {
		position: 'relative',
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: 2,
		padding: '12px 12px 0 12px',
		margin: '24px 0 16px 0',
		'&:first-of-type': {
			marginTop: 16
		}
	}
}));

export type FuseThemeType = {
	palette: PartialDeep<Palette>;
};

export type FuseThemesType = { [key: string]: FuseThemeType };

export type FuseSettingsConfigType = {
	layout: {
		style?: string;
		config?: PartialDeep<themeLayoutDefaultsProps>;
	};
	customScrollbars?: boolean;
	direction: 'rtl' | 'ltr';
	theme: {
		main: FuseThemeType;
		navbar: FuseThemeType;
		toolbar: FuseThemeType;
		footer: FuseThemeType;
	};
	defaultAuth?: string[];
	loginRedirectUrl: string;
};

/**
 * The FuseSettings component is responsible for rendering the settings form for the Fuse React application.
 * It uses the useForm hook from the react-hook-form library to handle form state and validation.
 * It also uses various MUI components to render the form fields and sections.
 * The component is memoized to prevent unnecessary re-renders.
 */
function FuseSettings() {
	const dispatch = useAppDispatch();
	const user = useSelector(selectUser);
	const settings = useSelector(selectFuseCurrentSettings);
	const { reset, watch, control } = useForm({
		mode: 'onChange',
		defaultValues: settings
	});
	const form = watch();
	const formConfigs = themeLayoutConfigs[form.layout.style].form;
	const prevForm = usePrevious(form ? _.merge({}, form) : null);
	const prevSettings = usePrevious(settings ? _.merge({}, settings) : null);
	const formChanged = !_.isEqual(form, prevForm);
	const settingsChanged = !_.isEqual(settings, prevSettings);

	const handleUpdate = useDebounce((newSettings: FuseSettingsConfigType) => {
		dispatch(setDefaultSettings(newSettings));
	}, 300);

	useEffect(() => {
		// Skip initial changes
		if (!prevForm && !prevSettings) {
			return;
		}

		// If theme settings changed update form data
		if (settingsChanged) {
			reset(settings);
			return;
		}

		const newSettings = _.merge({}, settings, form);

		// No need to change
		if (_.isEqual(newSettings, settings)) {
			return;
		}

		// If form changed update theme settings
		if (formChanged) {
			if (settings.layout.style !== newSettings.layout.style) {
				_.set(newSettings, 'layout.config', themeLayoutConfigs[newSettings?.layout?.style]?.defaults);
			}
			handleUpdate(newSettings);
		}
	}, [dispatch, form, formChanged, handleUpdate, prevForm, prevSettings, reset, settings, settingsChanged, user]);

	const getForm = useCallback(
		(_formConfigs: ThemeFormConfigTypes, prefix: string) =>
			Object.entries(_formConfigs).map(([key, formControl]) => {
				const target = prefix ? `${prefix}.${key}` : key;
				switch (formControl.type) {
					case 'radio': {
						return (
							<Controller
								key={target}
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								name={target}
								control={control}
								render={({ field }) => (
									<FormControl
										component="fieldset"
										className="FuseSettings-formControl"
									>
										<FormLabel
											component="legend"
											className="text-14"
										>
											{formControl.title}
										</FormLabel>
										<RadioGroup
											{...field}
											aria-label={formControl.title}
											className="FuseSettings-group"
											row={formControl.options.length < 4}
										>
											{formControl.options.map((opt: { value: string; name: string }) => (
												<FormControlLabel
													key={opt.value}
													value={opt.value}
													control={<Radio />}
													label={opt.name}
												/>
											))}
										</RadioGroup>
									</FormControl>
								)}
							/>
						);
					}
					case 'switch': {
						return (
							<Controller
								key={target}
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								name={target}
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl
										component="fieldset"
										className="FuseSettings-formControl"
									>
										<FormLabel
											component="legend"
											className="text-14"
										>
											{formControl.title}
										</FormLabel>
										<Switch
											checked={value as boolean}
											onChange={(ev) => onChange(ev.target.checked)}
											aria-label={formControl.title}
										/>
									</FormControl>
								)}
							/>
						);
					}
					case 'number': {
						return (
							<div
								key={target}
								className="FuseSettings-formControl"
							>
								<Controller
									// eslint-disable-next-line @typescript-eslint/ban-ts-comment
									// @ts-ignore
									name={target}
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											label={formControl.title}
											type="number"
											InputLabelProps={{
												shrink: true
											}}
											variant="outlined"
										/>
									)}
								/>
							</div>
						);
					}
					case 'group': {
						return (
							<div
								key={target}
								className="FuseSettings-formGroup"
							>
								<Typography
									className="FuseSettings-formGroupTitle"
									color="text.secondary"
								>
									{formControl.title}
								</Typography>
								{getForm(formControl.children, target)}
							</div>
						);
					}
					default: {
						return '';
					}
				}
			}),
		[control]
	);

	return (
		<Root>
			<div className="FuseSettings-formGroup">
				<Typography
					className="FuseSettings-formGroupTitle"
					color="text.secondary"
				>
					Layout
				</Typography>

				<Controller
					name="layout.style"
					control={control}
					render={({ field }) => (
						<FormControl
							component="fieldset"
							className="FuseSettings-formControl"
						>
							<FormLabel
								component="legend"
								className="text-14"
							>
								Style
							</FormLabel>
							<RadioGroup
								{...field}
								aria-label="Layout Style"
								className="FuseSettings-group"
							>
								{Object.entries(themeLayoutConfigs).map(([key, layout]) => (
									<FormControlLabel
										key={key}
										value={key}
										control={<Radio />}
										label={layout.title}
									/>
								))}
							</RadioGroup>
						</FormControl>
					)}
				/>

				{useMemo(() => getForm(formConfigs, 'layout.config'), [formConfigs, getForm])}

				<Typography
					className="my-16 text-12 italic"
					color="text.secondary"
				>
					*Not all option combinations are available
				</Typography>
			</div>

			<div className="FuseSettings-formGroup pb-16">
				<Typography
					className="FuseSettings-formGroupTitle"
					color="text.secondary"
				>
					Theme
				</Typography>

				<div className="-mx-8 flex flex-wrap">
					<Controller
						name="theme.main"
						control={control}
						render={({ field: { value, onChange } }) => (
							<PaletteSelector
								value={value}
								onChange={onChange}
								triggerElement={
									<div className="group m-8 flex w-128 cursor-pointer flex-col items-center space-y-8">
										<SectionPreview
											className="transition-shadow group-hover:shadow-lg"
											section="main"
										/>
										<Typography className="mb-24 flex-1 text-14 font-semibold opacity-80 group-hover:opacity-100">
											Main Palette
										</Typography>
									</div>
								}
							/>
						)}
					/>

					<Controller
						name="theme.navbar"
						control={control}
						render={({ field: { value, onChange } }) => (
							<PaletteSelector
								value={value}
								onChange={onChange}
								triggerElement={
									<div className="group m-8 flex w-128 cursor-pointer flex-col items-center space-y-8">
										<SectionPreview
											className="transition-shadow group-hover:shadow-lg"
											section="navbar"
										/>
										<Typography className="mb-24 flex-1 text-14 font-semibold opacity-80 group-hover:opacity-100">
											Navbar Palette
										</Typography>
									</div>
								}
							/>
						)}
					/>

					<Controller
						name="theme.toolbar"
						control={control}
						render={({ field: { value, onChange } }) => (
							<PaletteSelector
								value={value}
								onChange={onChange}
								triggerElement={
									<div className="group m-8 flex w-128 cursor-pointer flex-col items-center space-y-8">
										<SectionPreview
											className="transition-shadow group-hover:shadow-lg"
											section="toolbar"
										/>
										<Typography className="mb-24 flex-1 text-14 font-semibold opacity-80 group-hover:opacity-100">
											Toolbar Palette
										</Typography>
									</div>
								}
							/>
						)}
					/>

					<Controller
						name="theme.footer"
						control={control}
						render={({ field: { value, onChange } }) => (
							<PaletteSelector
								value={value}
								onChange={onChange}
								triggerElement={
									<div className="group m-8 flex w-128 cursor-pointer flex-col items-center space-y-8">
										<SectionPreview
											className="transition-shadow group-hover:shadow-lg"
											section="footer"
										/>
										<Typography className="mb-24 flex-1 text-14 font-semibold opacity-80 group-hover:opacity-100">
											Footer Palette
										</Typography>
									</div>
								}
							/>
						)}
					/>
				</div>
			</div>

			<Controller
				name="customScrollbars"
				control={control}
				render={({ field: { onChange, value } }) => (
					<FormControl
						component="fieldset"
						className="FuseSettings-formControl"
					>
						<FormLabel
							component="legend"
							className="text-14"
						>
							Custom Scrollbars
						</FormLabel>
						<Switch
							checked={value}
							onChange={(ev) => onChange(ev.target.checked)}
							aria-label="Custom Scrollbars"
						/>
					</FormControl>
				)}
			/>

			<Controller
				name="direction"
				control={control}
				render={({ field }) => (
					<FormControl
						component="fieldset"
						className="FuseSettings-formControl"
					>
						<FormLabel
							component="legend"
							className="text-14"
						>
							Direction
						</FormLabel>
						<RadioGroup
							{...field}
							aria-label="Layout Direction"
							className="FuseSettings-group"
							row
						>
							<FormControlLabel
								key="rtl"
								value="rtl"
								control={<Radio />}
								label="RTL"
							/>
							<FormControlLabel
								key="ltr"
								value="ltr"
								control={<Radio />}
								label="LTR"
							/>
						</RadioGroup>
					</FormControl>
				)}
			/>
		</Root>
	);
}

export default memo(FuseSettings);
