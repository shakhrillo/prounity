import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseUtils from '@fuse/utils';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useContext, useMemo, useState } from 'react';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Box from '@mui/material/Box';
import { lighten } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'app/store';
import ContactListItem from './ContactListItem';
import { selectContacts } from '../../store/contactsSlice';
import { selectChats } from '../../store/chatListSlice';
import UserAvatar from '../../UserAvatar';
import MainSidebarMoreMenu from './MainSidebarMoreMenu';
import { ChatAppContext } from '../../ChatApp';
import { selectUser } from '../../store/userSlice';
import ChatListItem from './ChatListItem';

/**
 * The main sidebar.
 */
function MainSidebar() {
	const { setUserSidebarOpen } = useContext(ChatAppContext);

	const dispatch = useAppDispatch();
	const contacts = useAppSelector(selectContacts);
	const chats = useAppSelector(selectChats);
	const { data: user } = useAppSelector(selectUser);

	const [searchText, setSearchText] = useState('');

	function handleSearchText(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchText(event.target.value);
	}

	return (
		<div className="flex flex-col flex-auto h-full">
			<Box
				className="py-16 px-32 border-b-1"
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? lighten(theme.palette.background.default, 0.4)
							: lighten(theme.palette.background.default, 0.02)
				}}
			>
				<div className="flex justify-between items-center mb-16">
					{user && (
						<div
							className="flex items-center cursor-pointer"
							onClick={() => setUserSidebarOpen(true)}
							onKeyDown={() => setUserSidebarOpen(true)}
							role="button"
							tabIndex={0}
						>
							<UserAvatar
								className="relative"
								user={user}
							/>
							<Typography className="mx-16 font-medium">{user?.name}</Typography>
						</div>
					)}

					<MainSidebarMoreMenu className="-mx-16" />
				</div>

				{useMemo(
					() => (
						<Paper className="flex p-4 items-center w-full px-16 py-4 border-1 h-40 rounded-full shadow-none">
							<FuseSvgIcon
								color="action"
								size={20}
							>
								heroicons-solid:search
							</FuseSvgIcon>

							<Input
								placeholder="Search or start new chat"
								className="flex flex-1 px-8"
								disableUnderline
								fullWidth
								value={searchText}
								inputProps={{
									'aria-label': 'Search'
								}}
								onChange={handleSearchText}
							/>
						</Paper>
					),
					[searchText]
				)}
			</Box>

			<FuseScrollbars className="flex-1">
				<List className="w-full">
					{useMemo(() => {
						function getFilteredArray<T>(arr: T[], _searchText: string): T[] {
							if (_searchText.length === 0) {
								return arr;
							}
							return FuseUtils.filterArrayByString(arr, _searchText);
						}

						const chatListContacts =
							contacts.length > 0 && chats.length > 0
								? chats.map((_chat) => ({
										..._chat,
										...contacts.find((_contact) => _contact.id === _chat.contactId)
								  }))
								: [];

						const filteredContacts = getFilteredArray([...contacts], searchText);

						const filteredChatList = getFilteredArray([...chatListContacts], searchText);

						const container = {
							show: {
								transition: {
									staggerChildren: 0.1
								}
							}
						};

						const item = {
							hidden: { opacity: 0, y: 20 },
							show: { opacity: 1, y: 0 }
						};

						return (
							<motion.div
								className="flex flex-col shrink-0"
								variants={container}
								initial="hidden"
								animate="show"
							>
								{filteredChatList.length > 0 && (
									<motion.div variants={item}>
										<Typography
											className="font-medium text-20 px-32 py-24"
											color="secondary.main"
										>
											Chats
										</Typography>
									</motion.div>
								)}

								{filteredChatList.map((chat, index) => (
									<motion.div
										variants={item}
										key={chat.id}
									>
										<div className={clsx(filteredChatList.length !== index + 1 && 'border-b-1')}>
											<ChatListItem item={chat} />
										</div>
									</motion.div>
								))}

								{filteredContacts.length > 0 && (
									<motion.div variants={item}>
										<Typography
											className="font-medium text-20 px-32 py-24"
											color="secondary.main"
										>
											Contacts
										</Typography>
									</motion.div>
								)}

								{filteredContacts.map((contact, index) => (
									<motion.div
										variants={item}
										key={contact.id}
									>
										<div className={clsx(filteredContacts.length !== index + 1 && 'border-b-1')}>
											<ContactListItem item={contact} />
										</div>
									</motion.div>
								))}
							</motion.div>
						);
					}, [contacts, chats, searchText, dispatch])}
				</List>
			</FuseScrollbars>
		</div>
	);
}

export default MainSidebar;
