import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function AlertDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/alert" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Alert</Typography>
<Typography className="description">An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.</Typography>

<div className="border border-1 p-16 rounded-16 my-12">

<Typography className="text-14 mb-32" component="div">This component is not documented in the <a href="https://m2.material.io/">Material Design guidelines</a>, but it is available in Material UI.</Typography>
</div>



<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic alerts</Typography>
<Typography className="text-14 mb-32" component="div">The alert offers four severity levels that set a distinctive icon and color.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicAlerts.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/alert/BasicAlerts.tsx').default} 
                    raw={require('!raw-loader!../components/alert/BasicAlerts.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Description</Typography>
<Typography className="text-14 mb-32" component="div">You can use the <code>{`AlertTitle`}</code> component to display a formatted title above the content.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DescriptionAlerts.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/alert/DescriptionAlerts.tsx').default} 
                    raw={require('!raw-loader!../components/alert/DescriptionAlerts.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Actions</Typography>
<Typography className="text-14 mb-32" component="div">An alert can have an action, such as a close or undo button.
It is rendered after the message, at the end of the alert.</Typography>
<Typography className="text-14 mb-32" component="div">If an <code>{`onClose`}</code> callback is provided and no <code>{`action`}</code> prop is set, a close icon is displayed. The <code>{`action`}</code> prop can be used to provide an alternative action, for example using a Button or IconButton.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ActionAlerts.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/alert/ActionAlerts.tsx').default} 
                    raw={require('!raw-loader!../components/alert/ActionAlerts.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Transition</Typography>
<Typography className="text-14 mb-32" component="div">You can use a <a href="/material-ui/transitions/">transition component</a> such as <code>{`Collapse`}</code> to transition the appearance of the alert.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TransitionAlerts.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/alert/TransitionAlerts.tsx').default} 
                    raw={require('!raw-loader!../components/alert/TransitionAlerts.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Icons</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`icon`}</code> prop allows you to add an icon to the beginning of the alert component.
This will override the default icon for the specified severity.</Typography>
<Typography className="text-14 mb-32" component="div">You can change the default severity to icon mapping with the <code>{`iconMapping`}</code> prop. This can be defined globally using <a href="/material-ui/customization/theme-components/#theme-default-props">theme customization</a>.</Typography>
<Typography className="text-14 mb-32" component="div">Setting the icon prop to <code>{`false`}</code> will remove the icon altogether.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="IconAlerts.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/alert/IconAlerts.tsx').default} 
                    raw={require('!raw-loader!../components/alert/IconAlerts.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Variants</Typography>
<Typography className="text-14 mb-32" component="div">Two additional variants are available – outlined, and filled:</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Outlined</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="OutlinedAlerts.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/alert/OutlinedAlerts.tsx').default} 
                    raw={require('!raw-loader!../components/alert/OutlinedAlerts.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">When using an outlined alert with the <a href="/material-ui/react-snackbar/#customization"><code>{`Snackbar`}</code> component</a>, background content will be visible and bleed through the alert by default.
You can prevent this by adding <code>{`bgcolor: 'background.paper'`}</code> to the<a href="/material-ui/customization/how-to-customize/#the-sx-prop"><code>{`sx`}</code> prop</a> on the <code>{`Alert`}</code> component.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Filled</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FilledAlerts.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/alert/FilledAlerts.tsx').default} 
                    raw={require('!raw-loader!../components/alert/FilledAlerts.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Toast</Typography>
<Typography className="text-14 mb-32" component="div">You can use the Snackbar to <a href="/material-ui/react-snackbar/#customization">display a toast</a> with the Alert.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Color</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`color`}</code> prop will override the default color for the specified severity.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ColorAlerts.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/alert/ColorAlerts.tsx').default} 
                    raw={require('!raw-loader!../components/alert/ColorAlerts.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-14 mb-32" component="div">(WAI-ARIA: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/">https://www.w3.org/WAI/ARIA/apg/patterns/alert/</a>)</Typography>
<Typography className="text-14 mb-32" component="div">When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads.</Typography>
<Typography className="text-14 mb-32" component="div">Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text.</Typography>
<Typography className="text-14 mb-32" component="div">Actions must have a tab index of 0 so that they can be reached by keyboard-only users.</Typography>

                </>
    
                     );
                   }
                   
                   export default AlertDoc;
                   