import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'app/store';
import withRouter from '@fuse/core/withRouter';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Tooltip from '@mui/material/Tooltip';
import MailActionsMenu from './MailActionsMenu';
import MailLabelsMenu from './MailLabelsMenu';
import { selectMail } from '../store/mailSlice';
import { setActionToMails } from '../store/mailsSlice';

/**
 * The mail toolbar.
 */
function MailToolbar() {
	const dispatch = useAppDispatch();
	const { data: mail } = useAppSelector(selectMail);
	const theme = useTheme();
	const navigate = useNavigate();

	function handleGoBack() {
		navigate(-1);
	}

	if (!mail) {
		return null;
	}

	return (
		<Box
			sx={{ backgroundColor: 'background.default' }}
			className="flex items-center justify-between w-full min-h-64 px-8 border-b"
		>
			<IconButton
				onClick={handleGoBack}
				className="lg:hidden md:-mx-8"
			>
				<FuseSvgIcon>
					{theme.direction === 'ltr'
						? 'heroicons-outline:arrow-narrow-left'
						: 'heroicons-outline:arrow-narrow-right'}
				</FuseSvgIcon>
			</IconButton>

			<div className="flex flex-1 justify-end items-center">
				<MailLabelsMenu
					labels={mail.labels}
					onChange={(value) => {
						dispatch(setActionToMails({ type: 'labels', value, ids: [mail.id] }));
					}}
					className="mx-4"
				/>

				<Tooltip title="Set important">
					<IconButton
						className="mx-4"
						onClick={() =>
							dispatch(setActionToMails({ type: 'important', value: !mail.important, ids: [mail.id] }))
						}
					>
						<FuseSvgIcon className={clsx(mail.important && 'text-red-600 dark:text-red-500')}>
							heroicons-outline:exclamation-circle
						</FuseSvgIcon>
					</IconButton>
				</Tooltip>

				<Tooltip title="Set starred">
					<IconButton
						className="mx-4"
						onClick={() =>
							dispatch(setActionToMails({ type: 'starred', value: !mail.starred, ids: [mail.id] }))
						}
					>
						<FuseSvgIcon className={clsx(mail.starred && 'text-orange-500 dark:text-red-400')}>
							heroicons-outline:star
						</FuseSvgIcon>
					</IconButton>
				</Tooltip>

				<MailActionsMenu className="mx-4" />
			</div>
		</Box>
	);
}

export default withRouter(MailToolbar);
