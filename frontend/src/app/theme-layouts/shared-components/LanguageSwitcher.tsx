import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeLanguage, LanguageType, selectCurrentLanguage, selectLanguages } from 'app/store/i18nSlice';
import { useAppDispatch } from 'app/store';

/**
 * The language switcher.
 */
function LanguageSwitcher() {
	const currentLanguage = useSelector(selectCurrentLanguage);
	const languages = useSelector(selectLanguages);
	const [menu, setMenu] = useState<null | HTMLElement>(null);
	const dispatch = useAppDispatch();

	const langMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		setMenu(event.currentTarget);
	};

	const langMenuClose = () => {
		setMenu(null);
	};

	function handleLanguageChange(lng: LanguageType) {
		dispatch(changeLanguage(lng.id));

		langMenuClose();
	}

	return (
		<>
			<Button
				className="h-40 w-64"
				onClick={langMenuClick}
			>
				<img
					className="mx-4 min-w-20"
					src={`assets/images/flags/${currentLanguage.flag}.svg`}
					alt={currentLanguage.title}
				/>

				<Typography
					className="mx-4 font-semibold uppercase"
					color="text.secondary"
				>
					{currentLanguage.id}
				</Typography>
			</Button>

			<Popover
				open={Boolean(menu)}
				anchorEl={menu}
				onClose={langMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>
				{languages.map((lng) => (
					<MenuItem
						key={lng.id}
						onClick={() => handleLanguageChange(lng)}
					>
						<ListItemIcon className="min-w-40">
							<img
								className="min-w-20"
								src={`assets/images/flags/${lng.flag}.svg`}
								alt={lng.title}
							/>
						</ListItemIcon>
						<ListItemText primary={lng.title} />
					</MenuItem>
				))}

				<MenuItem
					component={Link}
					to="/documentation/configuration/multi-language"
					onClick={langMenuClose}
					role="button"
				>
					<ListItemText primary="Learn More" />
				</MenuItem>
			</Popover>
		</>
	);
}

export default LanguageSwitcher;
