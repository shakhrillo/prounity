import Typography from '@mui/material/Typography';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

/**
 * The jwt auth doc.
 * This document provides information on how to use the JWT authentication service.
 */
function JwtAuthDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				JwtService Example
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				The JWT Authentication Service Example in Fuse React provides a secure way to authenticate users and
				protect sensitive data. With this service, users can sign up and sign in to access protected resources.
				The service also saves user data, such as user shortcuts, layout, and theme settings, to a database for
				easy retrieval.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				The JwtService class is a utility class for handling JSON Web Tokens (JWTs). It provides methods for
				initializing the service, setting interceptors, and handling authentication.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Usage
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				To use JwtService, you need to import it from the appropriate file and initialize it in your
				application. The JwtService class provides the following methods:
			</Typography>

			<Paper className="max-w-md my-16">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell className="font-semibold text-14">Method Name</TableCell>
							<TableCell className="font-semibold text-14">Description</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>init()</TableCell>
							<TableCell>
								Initializes the JwtService by setting interceptors and handling authentication.
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>setInterceptors()</TableCell>
							<TableCell>Sets the interceptors for the Axios instance.</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>handleAuthentication()</TableCell>
							<TableCell>
								Handles authentication by checking for a valid access token and emitting events based on
								the result.
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-32"
			>
				{`
					class JwtService {
						/**
						 * Initializes the JwtService by setting interceptors and handling authentication.
						 */
						init() {
							this.setInterceptors();
							this.handleAuthentication();
						}
						
						/**
						 * Sets the interceptors for the Axios instance.
						 */
						setInterceptors = () => {
							axios.interceptors.response.use(
								(response: AxiosResponse<unknown>) => response,
								(err: AxiosError) =>
									new Promise(() => {
										if (err.response.status === 401 && err.config) {
											// if you ever get an unauthorized response, logout the user
											this.emit('onAutoLogout', 'Invalid access_token');
											_setSession(null);
										}
										throw err;
									})
							);
						};

						* Handles authentication by checking for a valid access token and emitting events based on the result.
						*/
						handleAuthentication = () => {
							const access_token = getAccessToken();

							if (!access_token) {
								this.emit('onNoAccessToken');

								return;
							}

							if (isAuthTokenValid(access_token)) {
								_setSession(access_token);
								this.emit('onAutoLogin', true);
							} else {
								_setSession(null);
								this.emit('onAutoLogout', 'access_token expired');
							}
						};

					/**
					 * Checks if the access token is expired.
					 */
					isAccessTokenValid() {
						const accessToken = this.getAccessToken();
						if (!accessToken) {
						console.warn('access token not found');
						return false;
						}

						const decodedToken = jwtDecode(accessToken) as { exp: number };
						const currentTime = Date.now() / 1000;
						if (decodedToken.exp < currentTime) {
						console.warn('access token expired');
						return false;
						}

						return true;
					}

					/**
					 * Gets the access token from the local storage.
					 */
					getAccessToken() {
						return window.localStorage.getItem('jwt_access_token');
					}

					/**
					 * Sets the access token in the local storage.
					 */
					setAccessToken(access_token: string) {
						window.localStorage.setItem('jwt_access_token', access_token);
					}

					/**
					 * Removes the access token from the local storage.
					 */
					removeAccessToken() {
						window.localStorage.removeItem('jwt_access_token');
					}

					/**
					 * 
					 * 
					 * This is simplified version of the original example!!
					 * Checkout at src/app/auth/services/jwtService/JwtService.ts
					 *
					 * 
					 */

					}

					const instance = new JwtService();

					export default instance;

					`}
			</FuseHighlight>

			<Typography
				className="mt-32 mb-8"
				variant="h6"
			>
				Connection with the AuthProvider:
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				The JwtService class is imported and used in the AuthProvider component to handle authentication and
				authorization. The useEffect hook is used to initialize the JwtService instance by calling the init
				method, which sets up the interceptors for the Axios instance and handles authentication.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-32"
			>
				{`
					import JwtService from './jwtService';

					const jwtService = new JwtService();

					function AuthProvider({ children }) {
						const [waitAuthCheck, setWaitAuthCheck] = useState(true);
						const [isAuthenticated, setIsAuthenticated] = useState(undefined);
						const dispatch = useDispatch();

						useEffect(() => {
							jwtService.onAutoLogin(success, pass);
							
							jwtService.init();

							function success(user) {
								dispatch(setUser(user));
								setWaitAuthCheck(false);
								setIsAuthenticated(true);
							}

							function pass(message) {
								if (message) {
									dispatch(showMessage({ message }));
								}

								setWaitAuthCheck(false);
								setIsAuthenticated(false);
							}
						}, [dispatch]);

						const val = React.useMemo(() => ({ isAuthenticated }), [isAuthenticated]);

						return waitAuthCheck ? <div>Loading...</div> : <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
					}

					function useAuth() {
						const context = React.useContext(AuthContext);
						if (context === undefined) {
							throw new Error('useAuth must be used within a AuthProvider');
						}
						return context;
					}

					export { useAuth, AuthProvider };
                `}
			</FuseHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				The init method is responsible for setting up the interceptors for the Axios instance. It adds an
				interceptor to the request object to add the access token to the request headers, and another
				interceptor to the response object to handle authentication errors. If an authentication error occurs,
				the JwtService emits an onAutoLogout event to log out the user.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				The AuthProvider component is a wrapper component that provides authentication information to child
				components. It is responsible for managing the authentication state of the application and providing the
				necessary information to child components.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				By initializing the JwtService instance in the AuthProvider component, the application can handle
				authentication and authorization in a centralized and consistent manner. This allows for easier
				maintenance and scalability of the application.
			</Typography>

			<Typography
				className="my-24 italic"
				component="p"
				color="text.secondary"
			>
				Important: We don't give you any backend code. We are demonstrating the usage with
				<code>@mock-api</code> (which is works with https requests as real).
			</Typography>

			<Typography
				className="my-24 italic"
				component="p"
			>
				Important: make sure to wrap the <code>&lt;Router&gt;</code> component with the{' '}
				<code>&lt;AuthProvider&gt;</code> component in <code>src/app/App.tsx</code>. The service initializes in
				the AuthProvider component.
			</Typography>

			<Typography
				className="my-24 italic"
				component="p"
			>
				The related service folder is located at <code>/src/app/auth/services/jwtService</code>. This folder
				contains the necessary files to customize the authentication service to fit specific needs.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Creating a Similar Service for Firebase
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				To create a similar service for Firebase, you can follow these steps:
			</Typography>

			<ol className="list-disc pl-8 mb-16 space-y-12">
				<li>Import the Firebase SDK and initialize it with your Firebase project configuration.</li>
				<li>
					Create a Firebase authentication service that provides methods for handling authentication with
					Firebase.
				</li>
				<li>Create a Firebase JWT service that provides methods for handling JSON Web Tokens with Firebase.</li>
				<li>Use the Firebase authentication service to authenticate users and obtain a Firebase ID token.</li>
				<li>Use the Firebase JWT service to verify the Firebase ID token and obtain the user's information.</li>
			</ol>

			<Typography
				className="mb-16"
				component="p"
			>
				Here's an example of how could be Firebase Auth service created:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-32"
			>
				{`
                import firebase from 'firebase/app';
                import 'firebase/auth';
                import jwtDecode from 'jwt-decode';

                class FirebaseAuthService {
                    /**
                     * Verifies a Firebase ID token and returns the decoded user information.
                     */
                    verifyIdToken = async (idToken: string) => {
                        try {
                            const decodedToken = jwtDecode(idToken) as { uid: string };
                            const user = await firebase.auth().getUser(decodedToken.uid);
                            return user;
                        } catch (error) {
                            throw error;
                        }
                    };
                }

                export default FirebaseAuthService;
                `}
			</FuseHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				In this example, `firebaseAuthService` is a class that provides a `verifyIdToken` method for verifying a
				Firebase ID token and returning the decoded user information. The `firebase` and `jwtDecode` libraries
				are imported to handle authentication and decoding of the ID token, respectively.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h6"
			>
				Connection with the AuthProvider
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				To use the FirebaseAuthService example in the AuthProvider component, you can import the
				firebaseAuthService class and create an instance of it in the AuthProvider component. You can then use
				the verifyIdToken method to verify the Firebase ID token and return the decoded user information.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				Here's an example of how to use the firebaseAuthService in the AuthProvider component: information.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-32"
			>
				{`
			const firebaseAuthService = new FirebaseAuthService();

			function AuthProvider({ children }) {
				const [waitAuthCheck, setWaitAuthCheck] = useState(true);
				const [isAuthenticated, setIsAuthenticated] = useState(undefined);
				const dispatch = useDispatch();

				useEffect(() => {
					const idToken = localStorage.getItem('idToken');
					if (idToken) {
						firebaseAuthService.verifyIdToken(idToken)
							.then(success)
							.catch(pass);
					} else {
						setWaitAuthCheck(false);
						setIsAuthenticated(false);
					}

					function success(user) {
						dispatch(setUser(user));
						setWaitAuthCheck(false);
						setIsAuthenticated(true);
					}

					function pass(message) {
						if (message) {
							dispatch(showMessage({ message }));
						}

						setWaitAuthCheck(false);
						setIsAuthenticated(false);
					}
				}, [dispatch]);

				const val = React.useMemo(() => ({ isAuthenticated }), [isAuthenticated]);

				return waitAuthCheck ? <div>Loading...</div> : <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
			}

			function useAuth() {
				const context = React.useContext(AuthContext);
				if (context === undefined) {
					throw new Error('useAuth must be used within a AuthProvider');
				}
				return context;
			}

			export { useAuth, AuthProvider };
			`}
			</FuseHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				In this example, the FirebaseJwtService class is imported and used to verify the Firebase ID token in
				the AuthProvider component. The verifyIdToken method is called with the stored ID token, and the
				appropriate success or pass function is called to handle the authentication response.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				If the authentication is successful, the setUser action is dispatched to update the user state in the
				Redux store, and the isAuthenticated state is set to true. If the authentication fails, the showMessage
				action is dispatched to show an error message, and the isAuthenticated state is set to false.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				The AuthProvider component also provides the AuthContext object as a React context object that provides
				authentication information to child components. The val variable is created using the useMemo hook to
				memoize the isAuthenticated state. The val variable is then passed as the value of the
				AuthContext.Provider component, which wraps the child components.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				Child components can access the authentication information provided by the AuthProvider component by
				using the useAuth hook to consume the AuthContext object. This allows child components to access the
				isAuthenticated state and other authentication-related information.
			</Typography>
		</>
	);
}

export default JwtAuthDoc;
