/* eslint-disable  import/no-extraneous-dependencies */
import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';

function checkAndRename(file: string, fromExt: string, toExt: string): void {
	const content = fs.readFileSync(file, 'utf-8');

	try {
		const ast = parser.parse(content, {
			sourceType: 'module',
			plugins: ['jsx']
		});

		let hasJSX = false;
		traverse(ast, {
			JSXElement() {
				hasJSX = true;
			}
		});

		if ((fromExt === '.js' && !hasJSX) || (fromExt === '.jsx' && hasJSX)) {
			const newPath = path.join(path.dirname(file), path.basename(file, fromExt) + toExt);
			fs.renameSync(file, newPath);
			/* eslint-disable-next-line no-console */
			console.log(`Renamed ${file} to ${newPath}`);
		}
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.error(`Error processing file ${file}:`, error);
	}
}

// Check .js files and rename to .ts if they don't contain JSX
const jsFiles = glob.sync('**/*.js', {
	ignore: ['node_modules/**/*']
});
jsFiles.forEach((file) => checkAndRename(file, '.js', '.ts'));

// Check .jsx files and rename to .tsx if they contain JSX
const jsxFiles = glob.sync('**/*.jsx', {
	ignore: ['node_modules/**/*']
});
jsxFiles.forEach((file) => checkAndRename(file, '.jsx', '.tsx'));
