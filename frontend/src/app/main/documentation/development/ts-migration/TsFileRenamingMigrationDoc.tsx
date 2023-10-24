import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

function TsFileRenamingMigrationDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-16 font-700"
			>
				Typescript migration:
			</Typography>
			<Typography
				variant="h5"
				className="mb-40 font-700"
			>
				File extension renaming helper ( .js to .ts/.tsx )
			</Typography>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Introduction
			</Typography>
			<Typography
				className="mb-16"
				variant="body1"
				gutterBottom
			>
				When migrating a project from JavaScript (JS) to TypeScript (TS), one of the initial steps is to rename
				`.js` and `.jsx` files to `.ts` and `.tsx`, respectively. This script aims to automate that process by
				identifying files that need to be renamed based on their content and then renaming them accordingly.
			</Typography>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				How the Script Works
			</Typography>
			<List>
				<ListItem>
					<ListItemText
						primary="Detection of JSX"
						secondary="The script uses the Babel parser to parse each file and check if it contains JSX syntax."
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="File Renaming"
						secondary={
							<Typography component="span">
								<Box>
									<span>`.js` files that don't contain JSX are renamed to `.ts`.</span>
								</Box>
								<Box>
									<span>`.jsx` files that contain JSX are renamed to `.tsx`.</span>
								</Box>
							</Typography>
						}
					/>
				</ListItem>
			</List>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Prerequisites
			</Typography>
			<List>
				<ListItem>
					<ListItemText
						primary="Node.js installed."
						secondary="To install Node.js, visit the official website and download the latest version."
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="ts-node installed, either globally or in the project."
						secondary="To install ts-node, run `npm install -g ts-node` or `npm install ts-node` in the project directory."
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="The following npm packages installed:"
						secondary={
							<Typography component="span">
								<Box>
									<span>`glob`</span>
								</Box>
								<Box>
									<span>`@babel/parser`</span>
								</Box>
								<Box>
									<span>`@babel/traverse`</span>
								</Box>
								<Box>
									<span>`@types/glob`</span>
								</Box>
								<Box>
									<span>`@types/node`</span>
								</Box>
							</Typography>
						}
					/>
				</ListItem>
			</List>
			<Typography
				className="mb-16"
				variant="body1"
				gutterBottom
			>
				To install the required packages, run the following command:
			</Typography>
			<Box mb={2}>
				<Paper>
					<Box p={2}>
						<code>npm install glob @babel/parser @babel/traverse @types/glob @types/node ts-node</code>
					</Box>
				</Paper>
			</Box>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Usage
			</Typography>
			<List>
				<ListItem>
					<ListItemText
						primary="Place the script in the root directory of your project."
						secondary="Make sure the script is in the same directory as the files you want to rename."
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Run the script using ts-node:"
						secondary={
							<Typography component="span">
								<Box>
									<code>npm run ext-rename-js-to-ts</code>
								</Box>
							</Typography>
						}
					/>
				</ListItem>
			</List>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Why Use This Script for Migration?
			</Typography>
			<List>
				<ListItem>
					<ListItemText
						primary="Automation"
						secondary="Manually renaming files, especially in a large codebase, is tedious. This script can process a vast number of files quickly."
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Accuracy"
						secondary="The script doesn't just rename files based on their extension. It inspects the content to determine whether a file actually contains JSX, ensuring accurate renaming."
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Safety"
						secondary="By only renaming files based on their content, the script helps reduce the risk of introducing errors into the project."
					/>
				</ListItem>
			</List>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Important Considerations
			</Typography>
			<List>
				<ListItem>
					<ListItemText
						primary="Backup Your Data"
						secondary="Before running the script, make sure to backup your project or use a version control system like Git. This ensures you can revert changes if needed."
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="TypeScript Configuration"
						secondary="After renaming, you'll need to set up a proper `tsconfig.json` to configure TypeScript. This script focuses solely on the renaming aspect of the migration."
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Manual Checks"
						secondary="Post renaming, it's advisable to manually inspect your project and ensure that the renaming process didn't inadvertently disrupt any part of your codebase."
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Type Annotations"
						secondary="This script helps with the initial step of migration. After renaming, you'll need to add type annotations and resolve type-related issues in the newly created TypeScript files."
					/>
				</ListItem>
			</List>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Conclusion
			</Typography>
			<Typography
				variant="body1"
				gutterBottom
			>
				Migrating from JavaScript to TypeScript can be a significant undertaking, especially in large projects.
				This script streamlines one of the initial, more tedious tasks, letting you focus on the nuances of
				adding types and enjoying the benefits of TypeScript sooner.
			</Typography>
		</>
	);
}

export default TsFileRenamingMigrationDoc;
