import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function BottomNavigationDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/bottom-navigation" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Bottom Navigation</Typography>
<Typography className="description">The Bottom Navigation bar allows movement between primary destinations in an app.</Typography>

<Typography className="text-14 mb-32" component="div">Bottom navigation bars display three to five destinations at the bottom of a screen. Each destination is represented by an icon and an optional text label. When a bottom navigation icon is tapped, the user is taken to the top-level navigation destination associated with that icon.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Bottom navigation</Typography>
<Typography className="text-14 mb-32" component="div">When there are only <strong>three</strong> actions, display both icons and text labels at all times.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimpleBottomNavigation.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/bottom-navigation/SimpleBottomNavigation.tsx').default} 
                    raw={require('!raw-loader!../components/bottom-navigation/SimpleBottomNavigation.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Bottom navigation with no label</Typography>
<Typography className="text-14 mb-32" component="div">If there are <strong>four</strong> or <strong>five</strong> actions, display inactive views as icons only.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="LabelBottomNavigation.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/bottom-navigation/LabelBottomNavigation.tsx').default} 
                    raw={require('!raw-loader!../components/bottom-navigation/LabelBottomNavigation.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Fixed positioning</Typography>
<Typography className="text-14 mb-32" component="div">This demo keeps bottom navigation fixed to the bottom, no matter the amount of content on-screen.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FixedBottomNavigation.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/bottom-navigation/FixedBottomNavigation.tsx').default} 
                    raw={require('!raw-loader!../components/bottom-navigation/FixedBottomNavigation.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Third-party routing library</Typography>
<Typography className="text-14 mb-32" component="div">One frequent use case is to perform navigation on the client only, without an HTTP round-trip to the server.
The <code>{`BottomNavigationAction`}</code> component provides the <code>{`component`}</code> prop to handle this use case.
Here is a <a href="/material-ui/guides/routing/">more detailed guide</a>.</Typography>

                </>
    
                     );
                   }
                   
                   export default BottomNavigationDoc;
                   