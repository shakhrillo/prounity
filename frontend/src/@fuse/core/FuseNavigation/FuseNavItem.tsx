import { FuseNavItemType } from './types/FuseNavItemType';

const components: { [key: string]: React.FC<unknown> } = {};

/**
 * Register a component to FuseNavItem.
 */
export function registerComponent<T = unknown>(name: string, Component: React.FC<T>) {
	components[name] = Component as React.FC<unknown>;
}

export type FuseNavItemComponentProps = {
	type: string;
	item: FuseNavItemType;
	dense?: boolean;
	nestedLevel?: number;
	onItemClick?: (T: FuseNavItemType) => void;
	checkPermission?: boolean;
};

/**
Component to render NavItem depending on its type.
*/
export default function FuseNavItem(props: FuseNavItemComponentProps) {
	const { type } = props;

	const C = components[type];

	return C ? <C {...(props as object)} /> : null;
}
