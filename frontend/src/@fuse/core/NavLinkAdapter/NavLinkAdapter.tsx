import { NavLink, NavLinkProps, useNavigate } from 'react-router-dom';
import { CSSProperties, forwardRef, ReactNode } from 'react';

export type NavLinkAdapterPropsType = NavLinkProps & {
	activeClassName?: string;
	activeStyle?: CSSProperties;
	children?: ReactNode;
};

/**
 * The NavLinkAdapter component is a wrapper around the React Router NavLink component.
 * It adds the ability to navigate programmatically using the useNavigate hook.
 * The component is memoized to prevent unnecessary re-renders.
 */
const NavLinkAdapter = forwardRef<HTMLAnchorElement, NavLinkAdapterPropsType>((props, ref) => {
	const { activeClassName = 'active', activeStyle, role = 'button', ..._props } = props;
	const navigate = useNavigate();

	return (
		<NavLink
			ref={ref}
			role={role}
			{..._props}
			onClick={(e) => {
				e.preventDefault();
				navigate(_props.to);
			}}
			className={({ isActive }) =>
				[_props.className, isActive ? activeClassName : null].filter(Boolean).join(' ')
			}
			style={({ isActive }) => ({
				..._props.style,
				...(isActive ? activeStyle : null)
			})}
		>
			{props.children}
		</NavLink>
	);
});

export default NavLinkAdapter;
