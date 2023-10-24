import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function DrawersDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/drawers" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Drawer</Typography>
<Typography className="description">The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as switching accounts.</Typography>

<Typography className="text-14 mb-32" component="div">A navigation drawer can either be permanently on-screen or controlled by a navigation menu icon.</Typography>
<Typography className="text-14 mb-32" component="div"><a href="https://m2.material.io/components/sheets-side">Side sheets</a> are supplementary surfaces primarily used on tablet and desktop.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Temporary drawer</Typography>
<Typography className="text-14 mb-32" component="div">Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.</Typography>
<Typography className="text-14 mb-32" component="div">The Drawer can be cancelled by clicking the overlay or pressing the Esc key.
It closes when an item is selected, handled by controlling the <code>{`open`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TemporaryDrawer.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/drawers/TemporaryDrawer.tsx').default} 
                    raw={require('!raw-loader!../components/drawers/TemporaryDrawer.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Swipeable</Typography>
<Typography className="text-14 mb-32" component="div">You can make the drawer swipeable with the <code>{`SwipeableDrawer`}</code> component.</Typography>
<Typography className="text-14 mb-32" component="div">This component comes with a 2 kB gzipped payload overhead.
Some low-end mobile devices won&#39;t be able to follow the fingers at 60 FPS.
You can use the <code>{`disableBackdropTransition`}</code> prop to help.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SwipeableTemporaryDrawer.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/drawers/SwipeableTemporaryDrawer.tsx').default} 
                    raw={require('!raw-loader!../components/drawers/SwipeableTemporaryDrawer.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">The following properties are used in this documentation website for optimal usability of the component:</Typography>
<ul className="space-y-16">
<li>iOS is hosted on high-end devices.
The backdrop transition can be enabled without dropping frames.
The performance will be good enough.</li>
<li>iOS has a &quot;swipe to go back&quot; feature that interferes
with the discovery feature, so discovery has to be disabled.</li>
</ul>

<FuseHighlight component="pre" className="language-jsx">
{` 
const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />;
`}
</FuseHighlight>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Swipeable edge</Typography>
<Typography className="text-14 mb-32" component="div">You can configure the <code>{`SwipeableDrawer`}</code> to have a visible edge when closed.</Typography>
<Typography className="text-14 mb-32" component="div">If you are on a desktop, you can toggle the drawer with the &quot;OPEN&quot; button.
If you are on mobile, you can open the demo in CodeSandbox (&quot;edit&quot; icon) and swipe.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SwipeableEdgeDrawer.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/drawers/SwipeableEdgeDrawer.tsx').default} 
                    raw={require('!raw-loader!../components/drawers/SwipeableEdgeDrawer.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Keep mounted</Typography>
<Typography className="text-14 mb-32" component="div">The Modal used internally by the Swipeable Drawer has the <code>{`keepMounted`}</code> prop set by default.
This means that the contents of the drawer are always present in the DOM.</Typography>
<Typography className="text-14 mb-32" component="div">You can change this default behavior with the <code>{`ModalProps`}</code> prop, but you may encounter issues with <code>{`keepMounted: false`}</code> in React 18.</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Drawer
  variant="temporary"
  ModalProps={{
    keepMounted: false,
  
/>
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Responsive drawer</Typography>
<Typography className="text-14 mb-32" component="div">You can use the <code>{`temporary`}</code> variant to display a drawer for small screens and <code>{`permanent`}</code> for a drawer for wider screens.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ResponsiveDrawer.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/drawers/ResponsiveDrawer.tsx').default} 
                    raw={require('!raw-loader!../components/drawers/ResponsiveDrawer.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Persistent drawer</Typography>
<Typography className="text-14 mb-32" component="div">Persistent navigation drawers can toggle open or closed.
The drawer sits on the same surface elevation as the content.
It is closed by default and opens by selecting the menu icon, and stays open until closed by the user.
The state of the drawer is remembered from action to action and session to session.</Typography>
<Typography className="text-14 mb-32" component="div">When the drawer is outside of the page grid and opens, the drawer forces other content to change size and adapt to the smaller viewport.</Typography>
<Typography className="text-14 mb-32" component="div">Persistent navigation drawers are acceptable for all sizes larger than mobile.
They are not recommended for apps with multiple levels of hierarchy that require using an up arrow for navigation.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PersistentDrawerLeft.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/drawers/PersistentDrawerLeft.tsx').default} 
                    raw={require('!raw-loader!../components/drawers/PersistentDrawerLeft.tsx')}
                    />
<FuseExample
                    name="PersistentDrawerRight.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/drawers/PersistentDrawerRight.tsx').default} 
                    raw={require('!raw-loader!../components/drawers/PersistentDrawerRight.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Mini variant drawer</Typography>
<Typography className="text-14 mb-32" component="div">In this variation, the persistent navigation drawer changes its width.
Its resting state is as a mini-drawer at the same elevation as the content, clipped by the app bar.
When expanded, it appears as the standard persistent navigation drawer.</Typography>
<Typography className="text-14 mb-32" component="div">The mini variant is recommended for apps sections that need quick selection access alongside content.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="MiniDrawer.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/drawers/MiniDrawer.tsx').default} 
                    raw={require('!raw-loader!../components/drawers/MiniDrawer.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Permanent drawer</Typography>
<Typography className="text-14 mb-32" component="div">Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed.</Typography>
<Typography className="text-14 mb-32" component="div">Permanent navigation drawers are the <strong>recommended default for desktop</strong>.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Full-height navigation</Typography>
<Typography className="text-14 mb-32" component="div">Apps focused on information consumption that use a left-to-right hierarchy.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PermanentDrawerLeft.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/drawers/PermanentDrawerLeft.tsx').default} 
                    raw={require('!raw-loader!../components/drawers/PermanentDrawerLeft.tsx')}
                    />
<FuseExample
                    name="PermanentDrawerRight.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/drawers/PermanentDrawerRight.tsx').default} 
                    raw={require('!raw-loader!../components/drawers/PermanentDrawerRight.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Clipped under the app bar</Typography>
<Typography className="text-14 mb-32" component="div">Apps focused on productivity that require balance across the screen.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ClippedDrawer.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/drawers/ClippedDrawer.tsx').default} 
                    raw={require('!raw-loader!../components/drawers/ClippedDrawer.tsx')}
                    /></Typography>

                </>
    
                     );
                   }
                   
                   export default DrawersDoc;
                   