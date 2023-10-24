import { FuseRouteConfigsType } from '@fuse/utils/FuseUtils';
import AcademyAppConfig from './academy/AcademyAppConfig';
import CalendarAppConfig from './calendar/CalendarAppConfig';
import ChatAppConfig from './chat/ChatAppConfig';
import ContactsAppConfig from './contacts/ContactsAppConfig';
import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
import FileManagerAppConfig from './file-manager/FileManagerAppConfig';
import HelpCenterAppConfig from './help-center/HelpCenterAppConfig';
import MailboxAppConfig from './mailbox/MailboxAppConfig';
import NotesAppConfig from './notes/NotesAppConfig';
import ProfileAppConfig from './profile/profileAppConfig';
import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';
import TasksAppConfig from './tasks/TasksAppConfig';

/**
 * The list of application configurations.
 */
const appsConfigs: FuseRouteConfigsType = [
	AcademyAppConfig,
	CalendarAppConfig,
	ChatAppConfig,
	ContactsAppConfig,
	ECommerceAppConfig,
	FileManagerAppConfig,
	HelpCenterAppConfig,
	MailboxAppConfig,
	NotesAppConfig,
	ProfileAppConfig,
	ScrumboardAppConfig,
	TasksAppConfig
];

export default appsConfigs;
