import Typography from '@mui/material/Typography';
import FuseHighlight from '@fuse/core/FuseHighlight';

/**
 * Directory Structure Doc
 * This document explains the directory structure and naming conventions used in Fuse React.
 */
function DirectoryStructureDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Directory Structure and Naming Conventions
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				This document explains the directory structure and naming conventions used in Fuse React. Fuse React is
				a modular approach based on route settings determined from config files. The directory structure and
				naming conventions are designed to make it easy to navigate and understand the codebase.
			</Typography>
			<FuseHighlight
				component="pre"
				className="language-jsx my-24"
			>
				{`
				├── chat
				│   ├── ChatApp.tsx
				│   ├── ChatAppConfig.tsx
				│   ├── ChatFirstScreen.tsx
				│   ├── Statuses.tsx
				│   ├── UserAvatar.tsx
				│   ├── chat
				│   │   ├── Chat.tsx
				│   │   └── ChatMoreMenu.tsx
				│   ├── models
				│   │   ├── ChatListItemModel.tsx
				│   │   ├── ChatMessageModel.tsx
				│   │   ├── ContactModel.tsx
				│   │   └── UserModel.tsx
				│   ├── sidebars
				│   │   ├── contact
				│   │   │   └── ContactSidebar.tsx
				│   │   ├── main
				│   │   │   ├── ChatListItem.tsx
				│   │   │   ├── ContactListItem.tsx
				│   │   │   ├── MainSidebar.tsx
				│   │   │   └── MainSidebarMoreMenu.tsx
				│   │   └── user
				│   │       └── UserSidebar.tsx
				│   ├── store
				│   │   ├── chatListSlice.tsx
				│   │   ├── chatMessagesSlice.tsx
				│   │   ├── contactsSlice.tsx
				│   │   ├── index.tsx
				│   │   └── userSlice.tsx
				│   └── types
				│       ├── ChatListItemType.ts
				│       ├── ChatListType.ts
				│       ├── ChatMessageType.ts
				│       ├── ContactAttachmentsType.ts
				│       ├── ContactDetailsType.ts
				│       ├── ContactEmailType.ts
				│       ├── ContactPhoneNumberType.ts
				│       ├── ContactStatusType.ts
				│       ├── ContactType.ts
				│       ├── MessageType.ts
				│       └── UserType.ts
				└── contacts`}
			</FuseHighlight>
			<Typography
				className="mb-16"
				component="p"
			>
				The directory structure of Fuse React is organized by feature, with each feature having its own
				directory. Within each feature directory, there are subdirectories for components, models, sidebars,
				store, and types.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<strong>Directories:</strong> named in lowercase and use hyphens to separate words. Example: `chat`,
				`contacts`.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<strong>Files:</strong> named in PascalCase and use the name of the component, type, or model they
				represent. Example: `ChatApp.tsx`, `ChatListItemType.ts`.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<strong>Components:</strong> named in PascalCase and use the name of the component they represent.
				Example: `ChatApp.tsx`, `Chat.tsx`.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<strong>Models:</strong> named in PascalCase and use the name of the model they represent. Example:
				`ChatListItemModel.tsx`, `UserModel.tsx`.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<strong>Sidebars/Tabs/Sections/Dialogs etc:</strong> For example Sidebar named in PascalCase and use the
				name of the sidebar they represent. The `sidebars` folder is used to store components that represent
				sidebars in the application. Other similar types of components, such as tabs, sections, or dialogs, may
				have their own folders with similar naming conventions. Example: `ContactSidebar.tsx`,
				`MainSidebar.tsx`.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<strong>Store files:</strong> named in camelCase and use the name of the slice they represent. Example:
				`chatListSlice.tsx`, `userSlice.tsx`.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<strong>Types:</strong> named in PascalCase and use the name of the type they represent. Example:
				`ChatListItemType.ts`, `UserType.ts`.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<strong>Config files:</strong> named in PascalCase and use the name of the feature they represent,
				followed by `Config`. Example: `ChatAppConfig.tsx`.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				By following these conventions, developers can quickly find the files and components they need and
				understand their purpose. This makes it easier to navigate and maintain the codebase, especially as the
				project grows in size and complexity.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				Fuse React's directory structure might look overwhelming and intimidating at first, but following this
				page and giving a bit time to understand it before jumping right into code will help immensely.
			</Typography>
		</>
	);
}

export default DirectoryStructureDoc;
