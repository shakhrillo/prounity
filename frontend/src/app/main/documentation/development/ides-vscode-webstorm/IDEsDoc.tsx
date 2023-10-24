import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/*
 * IDEs Doc
 * This document provides information on how to use ESLint and Prettier with Webstorm and Visual Studio Code (VSCode).
 * It includes instructions on how to install and configure the necessary plugins and settings.
 */
function IDEsDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				IDEs
			</Typography>

			<Typography
				className="text-20 mb-10 font-700"
				variant="h5"
			>
				Webstorm
			</Typography>

			<Typography
				className="text-16 mt-16 mb-10 font-700"
				variant="h6"
			>
				Using Prettier with ESLint
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				ESLint and Prettier are code quality tools that help ensure consistent code formatting and catch
				potential errors. To use them with Webstorm, we are using ESLint with <b>eslint-plugin-prettier</b>. To
				reformat the current file/folder, use the <b>Fix ESLint Problems</b> action. You can find it using Find
				Action (Cmd/Ctrl-Shift-A) or add a keyboard shortcut to it in <b>Preferences | Keymap</b>. Make sure
				that the <b>ESLint integration</b> is enabled in{' '}
				<b>Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint</b>.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Visual Studio Code (VSCode)
			</Typography>

			<Typography
				className="text-16 mt-16 mb-10 font-700"
				variant="h6"
			>
				Using Prettier with ESLint
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				To use ESLint and Prettier with VSCode, you need to install the necessary plugins. You can do this using
				the extension sidebar in VSCode. Here is an example <b>settings.json</b> configuration that will apply
				fixes whenever a file is saved:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-json mb-24"
			>
				{`
                            "editor.defaultFormatter": "esbenp.prettier-vscode",
                            "[javascript]": {
                                "editor.defaultFormatter": "esbenp.prettier-vscode"
                            },
                            "eslint.alwaysShowStatus": true,
                            "editor.formatOnSave": true,
                            "editor.formatOnPaste": true,
                            "eslint.format.enable": true,
                            "editor.codeActionsOnSave": {
                                "source.fixAll.eslint": true
                            }
                        `}
			</FuseHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				To configure ESLint and Prettier in VSCode further, refer to the official documentation:
			</Typography>

			<ul className="space-y-12">
				<li>
					<a
						href="https://eslint.org/docs/user-guide/getting-started"
						target="_blank"
						rel="noopener noreferrer"
					>
						ESLint Getting Started Guide
					</a>
				</li>
				<li>
					<a
						href="https://prettier.io/docs/en/install.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Prettier Installation Guide
					</a>
				</li>
				<li>
					<a
						href="https://eslint.org/docs/user-guide/configuring"
						target="_blank"
						rel="noopener noreferrer"
					>
						ESLint Configuration Guide
					</a>
				</li>
				<li>
					<a
						href="https://prettier.io/docs/en/configuration.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Prettier Configuration Guide
					</a>
				</li>
			</ul>
		</>
	);
}

export default IDEsDoc;
