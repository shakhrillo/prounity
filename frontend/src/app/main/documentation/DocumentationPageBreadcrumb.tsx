import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import DocumentationNavigation from './DocumentationNavigation';

const getPathTree = (departmentTree: FuseNavItemType, url: string) => {
	function findPath(node: FuseNavItemType, _url: string) {
		// If current node matches search node, return tail of path result
		if (node.url === _url) {
			return [];
		}

		// If current node not search node match, examine children. For first
		// child that returns an array (path), prepend current node to that
		// path result
		if (node.children) {
			// eslint-disable-next-line no-restricted-syntax
			for (const child of node.children) {
				const childPath = findPath(child, _url) as FuseNavItemType[] | boolean;
				if (Array.isArray(childPath)) {
					childPath.unshift(child);
					return childPath;
				}
			}
		}
		return false;
	}
	const response = findPath(departmentTree, url) as FuseNavItemType[];

	return response || [];
};

type DocumentationPageBreadcrumbProps = {
	className?: string;
};

/**
 * Documentation Page Breadcrumb
 */
function DocumentationPageBreadcrumb(props: DocumentationPageBreadcrumbProps) {
	const { className } = props;

	const { pathname } = useLocation();

	const pathArr: FuseNavItemType[] = getPathTree(DocumentationNavigation, pathname);

	return (
		<div className={clsx('flex-1 mb-16 sm:mb-0', className)}>
			<Breadcrumbs aria-label="breadcrumb">
				<Link
					className="font-semibold hover:underline"
					color="secondary"
					to="/documentation"
					role="button"
				>
					Documentation
				</Link>
				{pathArr.map((item) => (
					<Typography
						key={item.id}
						className="cursor-default"
					>
						{item.title}
					</Typography>
				))}
			</Breadcrumbs>
		</div>
	);
}

export default DocumentationPageBreadcrumb;
