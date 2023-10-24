import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function PopperDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/popper" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Popper</Typography>
<Typography className="description">A Popper can be used to display some content on top of another. It's an alternative to react-popper.</Typography>

<Typography className="text-14 mb-32" component="div">Some important features of the <code>{`Popper`}</code> component:</Typography>
<ul className="space-y-16">
<li>🕷 Popper relies on the 3rd party library (<a href="https://popper.js.org/">Popper.js</a>) for perfect positioning.</li>
<li>💄 It&#39;s an alternative API to react-popper. It aims for simplicity.</li>
<li>📦 <a href="/size-snapshot/">24.9 kB gzipped</a>.</li>
<li>The children is <a href="/material-ui/react-portal/"><code>{`Portal`}</code></a> to the body of the document to avoid rendering problems.
You can disable this behavior with <code>{`disablePortal`}</code>.</li>
<li>The scroll isn&#39;t blocked like with the <a href="/material-ui/react-popover/"><code>{`Popover`}</code></a> component.
The placement of the popper updates with the available area in the viewport.</li>
<li>Clicking away does not hide the <code>{`Popper`}</code> component.
If you need this behavior, you can use <a href="/material-ui/react-click-away-listener/"><code>{`ClickAwayListener`}</code></a> - see the example in the <a href="/material-ui/react-menu/#menulist-composition">menu documentation section</a>.</li>
<li>The <code>{`anchorEl`}</code> is passed as the reference object to create a new <code>{`Popper.js`}</code> instance.</li>
</ul>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic popper</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimplePopper.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popper/SimplePopper.tsx').default} 
                    raw={require('!raw-loader!../components/popper/SimplePopper.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Transitions</Typography>
<Typography className="text-14 mb-32" component="div">The open/close state of the popper can be animated with a render prop child and a transition component.
This component should respect the following conditions:</Typography>
<ul className="space-y-16">
<li>Be a direct child descendent of the popper.</li>
<li>Call the <code>{`onEnter`}</code> callback prop when the enter transition starts.</li>
<li>Call the <code>{`onExited`}</code> callback prop when the exit transition is completed.
These two callbacks allow the popper to unmount the child content when closed and fully transitioned.</li>
</ul>
<Typography className="text-14 mb-32" component="div">Popper has built-in support for <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TransitionsPopper.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popper/TransitionsPopper.tsx').default} 
                    raw={require('!raw-loader!../components/popper/TransitionsPopper.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">Alternatively, you can use <a href="https://github.com/pmndrs/react-spring">react-spring</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SpringPopper.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popper/SpringPopper.tsx').default} 
                    raw={require('!raw-loader!../components/popper/SpringPopper.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Positioned popper</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PositionedPopper.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popper/PositionedPopper.tsx').default} 
                    raw={require('!raw-loader!../components/popper/PositionedPopper.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Scroll playground</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ScrollPlayground.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popper/ScrollPlayground.js').default} 
                    raw={require('!raw-loader!../components/popper/ScrollPlayground.js')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Virtual element</Typography>
<Typography className="text-14 mb-32" component="div">The value of the <code>{`anchorEl`}</code> prop can be a reference to a fake DOM element.
You need to create an object shaped like the <a href="https://popper.js.org/docs/v2/virtual-elements/"><code>{`VirtualElement`}</code></a>.</Typography>
<Typography className="text-14 mb-32" component="div">Highlight part of the text to see the popper:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="VirtualElementPopper.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popper/VirtualElementPopper.tsx').default} 
                    raw={require('!raw-loader!../components/popper/VirtualElementPopper.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Complementary projects</Typography>
<Typography className="text-14 mb-32" component="div">For more advanced use cases you might be able to take advantage of:</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">material-ui-popup-state</Typography>
<Typography className="text-14 mb-32" component="div"> src="https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star" alt="stars/>
 src="https://img.shields.io/npm/dm/material-ui-popup-state.svg" alt="npm downloads/></Typography>
<Typography className="text-14 mb-32" component="div">The package <a href="https://github.com/jcoreio/material-ui-popup-state"><code>{`material-ui-popup-state`}</code></a> that takes care of popper state for you in most cases.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PopperPopupState.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popper/PopperPopupState.tsx').default} 
                    raw={require('!raw-loader!../components/popper/PopperPopupState.tsx')}
                    /></Typography>

                </>
    
                     );
                   }
                   
                   export default PopperDoc;
                   