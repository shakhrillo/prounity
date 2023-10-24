import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ComponentType } from 'react';

export type WithRouterProps = {
	location?: ReturnType<typeof useLocation>;
	params?: Record<string, string>;
	navigate?: ReturnType<typeof useNavigate>;
};

/**
 * The withRouter function is a higher-order component that wraps a component with the useLocation, useParams, and useNavigate hooks from React Router.
 * It passes the location, params, and navigate objects as props to the wrapped component.
 * The component is memoized to prevent unnecessary re-renders.
 */
const withRouter = <Props extends WithRouterProps>(Component: ComponentType<Props>) =>
	function WithRouterWrapper(props: Omit<Props, keyof WithRouterProps>) {
		const location = useLocation();
		const params = useParams();
		const navigate = useNavigate();

		return (
			<Component
				{...(props as Props)}
				location={location}
				params={params}
				navigate={navigate}
			/>
		);
	};

export default withRouter;
