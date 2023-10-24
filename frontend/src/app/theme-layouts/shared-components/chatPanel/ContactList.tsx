import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';
import { memo, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import clsx from 'clsx';
import { getChat } from './store/chatMessagesSlice';
import { selectContacts, selectSelectedContactId } from './store/contactsSlice';
import { openChatPanel } from './store/stateSlice';
import ContactButton from './ContactButton';
import { selectChats } from './store/chatListSlice';

const Root = styled(FuseScrollbars)(({ theme }) => ({
	background: theme.palette.background.paper
}));

type ContactListProps = {
	className?: string;
};

/**
 * The contact list.
 */
function ContactList(props: ContactListProps) {
	const { className } = props;
	const dispatch = useAppDispatch();
	const contacts = useAppSelector(selectContacts);
	const selectedContactId = useAppSelector(selectSelectedContactId);
	const chats = useAppSelector(selectChats);
	const contactListScroll = useRef<HTMLDivElement>(null);

	const scrollToTop = () => {
		if (!contactListScroll.current) {
			return;
		}

		contactListScroll.current.scrollTop = 0;
	};

	return (
		<Root
			className={clsx('flex shrink-0 flex-col overflow-y-auto py-8 overscroll-contain', className)}
			ref={contactListScroll}
			option={{ suppressScrollX: true, wheelPropagation: false }}
		>
			{useMemo(() => {
				const chatListContacts =
					contacts.length > 0 && chats.length > 0
						? chats.map((_chat) => ({
								..._chat,
								...contacts.find((_contact) => _contact.id === _chat.contactId)
						  }))
						: [];

				const handleContactClick = (contactId: string) => {
					dispatch(openChatPanel());
					dispatch(getChat(contactId));
					scrollToTop();
				};

				const container = {
					show: {
						transition: {
							staggerChildren: 0.05
						}
					}
				};

				const item = {
					hidden: { opacity: 0, scale: 0.6 },
					show: { opacity: 1, scale: 1 }
				};

				return (
					contacts.length > 0 && (
						<motion.div
							variants={container}
							initial="hidden"
							animate="show"
							className="flex flex-col shrink-0"
						>
							{chatListContacts &&
								chatListContacts.map((contact) => {
									return (
										<motion.div
											variants={item}
											key={contact.id}
										>
											<ContactButton
												contact={contact}
												selectedContactId={selectedContactId}
												onClick={handleContactClick}
											/>
										</motion.div>
									);
								})}
							<Divider className="mx-24 my-8" />
							{contacts.map((contact) => {
								const chatContact = chats.find((_chat) => _chat.contactId === contact.id);

								return !chatContact ? (
									<motion.div
										variants={item}
										key={contact.id}
									>
										<ContactButton
											contact={contact}
											selectedContactId={selectedContactId}
											onClick={handleContactClick}
										/>
									</motion.div>
								) : null;
							})}
						</motion.div>
					)
				);
			}, [chats, contacts, dispatch, selectedContactId])}
		</Root>
	);
}

export default memo(ContactList);
