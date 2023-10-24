import Icon from '@mui/material/Icon';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { ChangeEvent, useState } from 'react';

import { useTranslation } from 'react-i18next';

/**
 * Sample accounts data.
 */
const accounts = {
	creapond: 'johndoe@creapond.com',
	withinpixels: 'johndoe@withinpixels.com'
};

/**
 * The mailbox app sidebar header.
 */
function MailboxAppSidebarHeader() {
	const [selectedAccount, setSelectedCount] = useState('creapond');
	const { t } = useTranslation('mailboxApp');

	function handleAccountChange(ev: ChangeEvent<HTMLInputElement>) {
		setSelectedCount(ev.target.value);
	}

	return (
		<div className="flex flex-col justify-center h-full p-24">
			<div className="flex items-center flex-1">
				<Icon
					component={motion.span}
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { delay: 0.2 } }}
					className="text-24 md:text-32"
				>
					mail
				</Icon>
				<motion.span
					initial={{ x: -20 }}
					animate={{ x: 0, transition: { delay: 0.2 } }}
				>
					<Typography className="text-16 md:text-24 mx-12 font-semibold">{t('APP_TITLE')}</Typography>
				</motion.span>
			</div>

			<motion.div
				initial={{ y: 20, opacity: 0.8 }}
				animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
			>
				<TextField
					className="w-full"
					id="account-selection"
					select
					label={selectedAccount}
					value={selectedAccount}
					onChange={handleAccountChange}
					placeholder="Select Account"
					margin="normal"
					variant="filled"
				>
					{Object.keys(accounts).map((key) => (
						<MenuItem
							key={key}
							value={key}
						>
							{accounts[key]}
						</MenuItem>
					))}
				</TextField>
			</motion.div>
		</div>
	);
}

export default MailboxAppSidebarHeader;
