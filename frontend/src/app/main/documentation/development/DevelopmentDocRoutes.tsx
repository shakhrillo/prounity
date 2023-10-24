import { lazy } from 'react';
import TsFileRenamingMigrationDoc from './ts-migration/TsFileRenamingMigrationDoc';
import CodeSplittingDoc from './code-splitting/CodeSplittingDoc';
import MultiLanguageDoc from './multi-language/MultiLanguageDoc';

const WithReducersCodeSplittingDoc = lazy(() => import('./code-splitting/with-reducers/WithReducersCodeSplittingDoc'));
const WithSlicesCodeSplittingDoc = lazy(() => import('./code-splitting/with-slices/WithSlicesCodeSplittingDoc'));
const DevelopmentServerDoc = lazy(() => import('./development-server/DevelopmentServerDoc'));
const ProductionDoc = lazy(() => import('./production/ProductionDoc'));
const DeploymentDoc = lazy(() => import('./deployment/DeploymentDoc'));
const DirectoryStructureDoc = lazy(() => import('./directory-structure/DirectoryStructureDoc'));
const ApiCallsDoc = lazy(() => import('./api-calls/ApiCallsDoc'));
const UpdatingFuseReactDoc = lazy(() => import('./updating-fuse-react/UpdatingFuseReactDoc'));
const IDEsDoc = lazy(() => import('./ides-vscode-webstorm/IDEsDoc'));
const HerokuNotesDoc = lazy(() => import('./heroku-notes/HerokuNotesDoc'));

/**
 * Development Doc Routes
 */
const DevelopmentDocRoutes = [
	{
		path: 'development/development-server',
		element: <DevelopmentServerDoc />
	},
	{
		path: 'development/production',
		element: <ProductionDoc />
	},
	{
		path: 'development/deployment',
		element: <DeploymentDoc />
	},
	{
		path: 'development/directory-structure',
		element: <DirectoryStructureDoc />
	},
	{
		path: 'development/api-calls',
		element: <ApiCallsDoc />
	},
	{
		path: 'development/code-splitting',
		element: <CodeSplittingDoc />
	},
	{
		path: 'development/code-splitting/with-reducers',
		element: <WithReducersCodeSplittingDoc />
	},
	{
		path: 'development/code-splitting/with-slices',
		element: <WithSlicesCodeSplittingDoc />
	},
	{
		path: 'development/multi-language',
		element: <MultiLanguageDoc />
	},
	{
		path: 'development/updating-fuse-react',
		element: <UpdatingFuseReactDoc />
	},
	{
		path: 'development/ts-file-rename-migration',
		element: <TsFileRenamingMigrationDoc />
	},
	{
		path: 'development/ides-vscode-webstorm',
		element: <IDEsDoc />
	},
	{
		path: 'development/heroku-notes',
		element: <HerokuNotesDoc />
	}
];

export default DevelopmentDocRoutes;
