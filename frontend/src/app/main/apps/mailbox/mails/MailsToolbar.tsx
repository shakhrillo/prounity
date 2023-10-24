import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import InputAdornment from '@mui/material/InputAdornment';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { OutlinedInput } from '@mui/material';
import Hidden from '@mui/material/Hidden';
import {
	deselectAllMails,
	selectAllMails,
	selectMails,
	selectMailsByParameter,
	selectSearchText,
	selectSelectedMailIds,
	setActionToMails,
	setMailsSearchText
} from '../store/mailsSlice';
import { selectLabels } from '../store/labelsSlice';
import { selectFolders, selectTrashFolderId } from '../store/foldersSlice';
import MailListTitle from './MailListTitle';

type MailToolbarProps = {
	onToggleLeftSidebar: () => void;
};

type MenuType = {
	select: null | HTMLElement;
	folders: null | HTMLElement;
	labels: null | HTMLElement;
};

/**
 * The mail toolbar.
 */
function MailToolbar(props: MailToolbarProps) {
	const { onToggleLeftSidebar } = props;
	const dispatch = useAppDispatch();
	const mails = useAppSelector(selectMails);
	const labels = useAppSelector(selectLabels);
	const folders = useAppSelector(selectFolders);
	const searchText = useAppSelector(selectSearchText);
	const { t } = useTranslation('mailboxApp');
	const selectedMailIds = useAppSelector(selectSelectedMailIds);
	const trashFolderId = useAppSelector(selectTrashFolderId);
	const [menu, setMenu] = useState<MenuType>({
		select: null,
		folders: null,
		labels: null
	});

	function handleMenuOpen(event: MouseEvent<HTMLButtonElement>, _menu: string) {
		setMenu({
			...menu,
			[_menu]: event.currentTarget
		});
	}

	function handleMenuClose(_event: MouseEvent<HTMLButtonElement | HTMLLIElement>, _menu: string) {
		setMenu({
			...menu,
			[_menu]: null
		});
	}

	function handleCheckChange(event: ChangeEvent<HTMLInputElement>) {
		return event.target.checked ? dispatch(selectAllMails()) : dispatch(deselectAllMails());
	}

	return (
		<div className="sticky top-0 z-10">
			<Box
				sx={{ backgroundColor: 'background.default' }}
				className="flex flex-col sm:flex-row items-center w-full min-h-64 py-12 sm:py-0 space-x-8 px-8 border-b "
			>
				<div className="flex items-center">
					<Hidden lgUp>
						<IconButton
							onClick={() => onToggleLeftSidebar()}
							aria-label="open left sidebar"
							size="small"
						>
							<FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
						</IconButton>
					</Hidden>

					<MailListTitle />
				</div>

				<OutlinedInput
					className="flex flex-1 items-center px-16 rounded-full"
					fullWidth
					placeholder={t('SEARCH_PLACEHOLDER')}
					value={searchText}
					onChange={(ev: ChangeEvent<HTMLInputElement>) => dispatch(setMailsSearchText(ev))}
					startAdornment={
						<InputAdornment position="start">
							<FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>
						</InputAdornment>
					}
					inputProps={{
						'aria-label': 'Search'
					}}
					size="small"
				/>
			</Box>

			<Box
				className="flex items-center w-full min-h-56 px-8 border-b space-x-8"
				sx={{ backgroundColor: 'background.paper' }}
			>
				<Checkbox
					onChange={handleCheckChange}
					checked={selectedMailIds.length === Object.keys(mails).length && selectedMailIds.length > 0}
					indeterminate={selectedMailIds.length !== Object.keys(mails).length && selectedMailIds.length > 0}
					size="small"
				/>

				<IconButton
					size="small"
					aria-label="More"
					aria-haspopup="true"
					onClick={(ev) => handleMenuOpen(ev, 'select')}
				>
					<FuseSvgIcon size={16}>heroicons-outline:chevron-down</FuseSvgIcon>
				</IconButton>

				<Menu
					id="select-menu"
					anchorEl={menu.select}
					open={Boolean(menu.select)}
					onClose={(ev: MouseEvent<HTMLButtonElement>) => handleMenuClose(ev, 'select')}
				>
					<MenuItem
						onClick={(ev) => {
							dispatch(selectAllMails());
							handleMenuClose(ev, 'select');
						}}
					>
						All
					</MenuItem>
					<MenuItem
						onClick={(ev: MouseEvent<HTMLLIElement>) => {
							dispatch(deselectAllMails());
							handleMenuClose(ev, 'select');
						}}
					>
						None
					</MenuItem>
					<MenuItem
						onClick={(ev: MouseEvent<HTMLLIElement>) => {
							dispatch(selectMailsByParameter(['unread', false]));
							handleMenuClose(ev, 'select');
						}}
					>
						Read
					</MenuItem>
					<MenuItem
						onClick={(ev: MouseEvent<HTMLLIElement>) => {
							dispatch(selectMailsByParameter(['unread', true]));
							handleMenuClose(ev, 'select');
						}}
					>
						Unread
					</MenuItem>
					<MenuItem
						onClick={(ev: MouseEvent<HTMLLIElement>) => {
							dispatch(selectMailsByParameter(['starred', true]));
							handleMenuClose(ev, 'select');
						}}
					>
						Starred
					</MenuItem>
					<MenuItem
						onClick={(ev: MouseEvent<HTMLLIElement>) => {
							dispatch(selectMailsByParameter(['starred', false]));
							handleMenuClose(ev, 'select');
						}}
					>
						Unstarred
					</MenuItem>
					<MenuItem
						onClick={(ev: MouseEvent<HTMLLIElement>) => {
							dispatch(selectMailsByParameter(['important', true]));
							handleMenuClose(ev, 'select');
						}}
					>
						Important
					</MenuItem>
					<MenuItem
						onClick={(ev: MouseEvent<HTMLLIElement>) => {
							dispatch(selectMailsByParameter(['important', false]));
							handleMenuClose(ev, 'select');
						}}
					>
						Unimportant
					</MenuItem>
				</Menu>

				{selectedMailIds.length > 0 && (
					<>
						<div className="border-r-1 h-32 w-1 mx-12 my-0" />

						<Tooltip title="Delete">
							<IconButton
								onClick={() => {
									dispatch(
										setActionToMails({
											type: 'folder',
											value: trashFolderId,
											ids: selectedMailIds
										})
									);
								}}
								aria-label="Delete"
								size="small"
							>
								<FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
							</IconButton>
						</Tooltip>

						<Tooltip title="Move to folder">
							<IconButton
								aria-label="More"
								aria-haspopup="true"
								onClick={(ev) => handleMenuOpen(ev, 'folders')}
								size="small"
							>
								<FuseSvgIcon>heroicons-outline:folder</FuseSvgIcon>
							</IconButton>
						</Tooltip>

						<Menu
							id="folders-menu"
							anchorEl={menu.folders}
							open={Boolean(menu.folders)}
							onClose={(ev: MouseEvent<HTMLLIElement>) => handleMenuClose(ev, 'folders')}
						>
							{folders.length > 0 &&
								folders.map((folder) => (
									<MenuItem
										onClick={(ev) => {
											dispatch(
												setActionToMails({
													type: 'folder',
													value: folder.id,
													ids: selectedMailIds
												})
											);
											handleMenuClose(ev, 'folders');
										}}
										key={folder.id}
									>
										{folder.title}
									</MenuItem>
								))}
						</Menu>

						<Tooltip title="Add label">
							<IconButton
								aria-label="label"
								aria-haspopup="true"
								onClick={(ev) => handleMenuOpen(ev, 'labels')}
								size="small"
							>
								<FuseSvgIcon>heroicons-outline:tag</FuseSvgIcon>
							</IconButton>
						</Tooltip>

						<Menu
							id="labels-menu"
							anchorEl={menu.labels}
							open={Boolean(menu.labels)}
							onClose={(ev: MouseEvent<HTMLLIElement>) => handleMenuClose(ev, 'labels')}
						>
							{labels.length > 0 &&
								labels.map((label) => (
									<MenuItem
										onClick={(ev) => {
											dispatch(
												setActionToMails({
													type: 'label',
													value: label.id,
													ids: selectedMailIds
												})
											);

											handleMenuClose(ev, 'labels');
										}}
										key={label.id}
									>
										{label.title}
									</MenuItem>
								))}
						</Menu>

						<Tooltip title="Mark as unread">
							<IconButton
								onClick={() => {
									dispatch(setActionToMails({ type: 'unread', value: true, ids: selectedMailIds }));
								}}
								aria-label="Mark as unread"
								size="small"
							>
								<FuseSvgIcon>heroicons-outline:mail</FuseSvgIcon>
							</IconButton>
						</Tooltip>

						<Tooltip title="Set important">
							<IconButton
								onClick={() => {
									dispatch(
										setActionToMails({ type: 'important', value: true, ids: selectedMailIds })
									);
								}}
								aria-label="important"
								size="small"
							>
								<FuseSvgIcon className="text-red-600 dark:text-red-500">
									heroicons-outline:exclamation-circle
								</FuseSvgIcon>
							</IconButton>
						</Tooltip>

						<Tooltip title="Set starred">
							<IconButton
								onClick={() => {
									dispatch(setActionToMails({ type: 'starred', value: true, ids: selectedMailIds }));
								}}
								aria-label="important"
								size="small"
							>
								<FuseSvgIcon className="text-orange-500 dark:text-red-400">
									heroicons-outline:star
								</FuseSvgIcon>
							</IconButton>
						</Tooltip>
					</>
				)}
			</Box>
		</div>
	);
}

export default MailToolbar;
