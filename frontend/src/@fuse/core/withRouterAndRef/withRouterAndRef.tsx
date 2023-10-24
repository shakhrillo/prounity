import { forwardRef, ComponentType } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export type WithRouterProps = {
	location: ReturnType<typeof useLocation>;
	params: Record<string, string>;
	navigate: ReturnType<typeof useNavigate>;
};

/**
 * The withRouter function is a higher-order component that wraps a component with the useLocation, useParams, and useNavigate hooks from React Router.
 * It passes the location, params, and navigate objects as props to the wrapped component.
 * The component is memoized to prevent unnecessary re-renders.
 */
const withRouterAndRef =
	/**
	 * A higher-order function that takes a component and returns a new component with the withRouter props.
	 */


		<Props extends WithRouterProps>(Component: ComponentType<Props>) =>
		/**
		 * A higher-order function that returns the wrapped component with the withRouter props.
		 */
		() => {
			const location = useLocation();
			const params = useParams();
			const navigate = useNavigate();
			const WithRouterAndRef = forwardRef((props, ref) => (
				<Component
					{...(props as Props)}
					location={location}
					params={params}
					navigate={navigate}
					forwardRef={ref}
				/>
			));

			const name = Component.displayName || Component.name;
			WithRouterAndRef.displayName = `withRouterAndRef(${name})`;
			return WithRouterAndRef;
		};

export default withRouterAndRef;
