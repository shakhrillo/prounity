import { FuseNavigationType } from '@fuse/core/FuseNavigation/types/FuseNavigationType';
import UserType from 'app/store/user/UserType';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import FuseNavItemModel from '@fuse/core/FuseNavigation/models/FuseNavItemModel';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';

class FuseNavigationHelper {
	static selectById(nav: FuseNavigationType, id: string): FuseNavItemType | undefined {
		for (let i = 0; i < nav.length; i += 1) {
			const item = nav[i];
			if (item.id === id) {
				return item;
			}

			if (item.children) {
				const childItem = this.selectById(item.children, id);
				if (childItem) {
					return childItem;
				}
			}
		}

		return undefined;
	}

	static appendNavItem(
		nav: FuseNavigationType,
		item: FuseNavItemType,
		parentId: string | null = null
	): FuseNavigationType {
		if (!parentId) {
			return [...nav, item];
		}
		return nav.map((node) => {
			if (node.id === parentId) {
				const newNode = { ...node };
				newNode.children = [...(node.children || []), item];
				return newNode;
			}
			if (node.children) {
				return { ...node, children: this.appendNavItem(node.children, item, parentId) };
			}
			return { ...node };
		});
	}

	static prependNavItem(
		nav: FuseNavigationType,
		item: FuseNavItemType,
		parentId: string | null = null
	): FuseNavigationType {
		if (!parentId) {
			return [item, ...nav];
		}
		return nav.map((node) => {
			if (node.id === parentId) {
				const newNode = { ...node };
				newNode.children = [item, ...(node.children || [])];
				return newNode;
			}
			if (node.children) {
				return { ...node, children: this.prependNavItem(node.children, item, parentId) };
			}
			return { ...node };
		});
	}

	static filterNavigationByPermission(nav: FuseNavigationType, userRole: UserType['role']): FuseNavigationType {
		return nav.reduce((acc: FuseNavigationType, item) => {
			// If item has children, recursively filter them
			const children = item.children ? this.filterNavigationByPermission(item.children, userRole) : [];

			if (this.hasPermission(item.auth, userRole) || children.length) {
				const newItem = { ...item };
				newItem.children = children.length ? children : undefined;
				acc.push(newItem);
			}

			return acc;
		}, []);
	}

	/**
	 * The removeNavItem function removes a navigation item by its ID.
	 */
	static removeNavItem(nav: FuseNavigationType, id: string): FuseNavigationType {
		return nav.reduce((acc, node) => {
			if (node.id !== id) {
				if (node.children) {
					acc.push({
						...node,
						children: this.removeNavItem(node.children, id)
					});
				} else {
					acc.push(node);
				}
			}
			return acc;
		}, [] as FuseNavigationType);
	}

	/**
	 * The updateNavItem function updates a navigation item by its ID with new data.
	 */
	static updateNavItem(nav: FuseNavigationType, id: string, item: PartialDeep<FuseNavItemType>): FuseNavigationType {
		return nav.map((node) => {
			if (node.id === id) {
				return _.merge({}, node, item); // merge original node data with updated item data
			}
			if (node.children) {
				return {
					...node,
					children: this.updateNavItem(node.children, id, item)
				};
			}
			return node;
		});
	}

	/**
	 *  Convert to flat navigation
	 */
	static getFlatNavigation(navigationItems: FuseNavigationType = [], flatNavigation = []) {
		for (let i = 0; i < navigationItems.length; i += 1) {
			const navItem = navigationItems[i];

			if (navItem.type === 'item') {
				const _navtItem = FuseNavItemModel(navItem);
				flatNavigation.push(_navtItem);
			}

			if (navItem.type === 'collapse' || navItem.type === 'group') {
				if (navItem.children) {
					this.getFlatNavigation(navItem.children, flatNavigation);
				}
			}
		}
		return flatNavigation as FuseNavigationType | [];
	}

	static hasPermission(authArr: string[] | string | undefined, userRole: UserType['role']): boolean {
		/**
		 * If auth array is not defined
		 * Pass and allow
		 */
		if (authArr === null || authArr === undefined) {
			// console.info("auth is null || undefined:", authArr);
			return true;
		}

		if (authArr.length === 0) {
			/**
			 * if auth array is empty means,
			 * allow only user role is guest (null or empty[])
			 */
			// console.info("auth is empty[]:", authArr);
			return !userRole || userRole.length === 0;
		}

		/**
		 * Check if user has grants
		 */
		// console.info("auth arr:", authArr);
		/*
            Check if user role is array,
            */
		if (userRole && Array.isArray(authArr) && Array.isArray(userRole)) {
			return authArr.some((r: string) => userRole.indexOf(r) >= 0);
		}

		/*
            Check if user role is string,
            */
		return authArr.includes(userRole as string);
	}
}

export default FuseNavigationHelper;
