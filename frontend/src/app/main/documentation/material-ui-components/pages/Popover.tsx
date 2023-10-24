import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function PopoverDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/popover" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Popover</Typography>
<Typography className="description">A Popover can be used to display some content on top of another.</Typography>

<Typography className="text-14 mb-32" component="div">Things to know when using the <code>{`Popover`}</code> component:</Typography>
<ul className="space-y-16">
<li>The component is built on top of the <a href="/material-ui/react-modal/"><code>{`Modal`}</code></a> component.</li>
<li>The scroll and click away are blocked unlike with the <a href="/material-ui/react-popper/"><code>{`Popper`}</code></a> component.</li>
</ul>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic Popover</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicPopover.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popover/BasicPopover.tsx').default} 
                    raw={require('!raw-loader!../components/popover/BasicPopover.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Anchor playground</Typography>
<Typography className="text-14 mb-32" component="div">Use the radio buttons to adjust the <code>{`anchorOrigin`}</code> and <code>{`transformOrigin`}</code> positions.
You can also set the <code>{`anchorReference`}</code> to <code>{`anchorPosition`}</code> or <code>{`anchorEl`}</code>.
When it is <code>{`anchorPosition`}</code>, the component will, instead of <code>{`anchorEl`}</code>,
refer to the <code>{`anchorPosition`}</code> prop which you can adjust to set
the position of the popover.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="AnchorPlayground.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popover/AnchorPlayground.js').default} 
                    raw={require('!raw-loader!../components/popover/AnchorPlayground.js')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Mouse over interaction</Typography>
<Typography className="text-14 mb-32" component="div">This demo demonstrates how to use the <code>{`Popover`}</code> component and the mouseover event to achieve popover behavior.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="MouseOverPopover.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popover/MouseOverPopover.tsx').default} 
                    raw={require('!raw-loader!../components/popover/MouseOverPopover.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Virtual element</Typography>
<Typography className="text-14 mb-32" component="div">The value of the <code>{`anchorEl`}</code> prop can be a reference to a fake DOM element.
You need to provide an object with the following interface:</Typography>

<FuseHighlight component="pre" className="language-ts">
{` 
interface PopoverVirtualElement {
  nodeType: 1;
  getBoundingClientRect: () => DOMRect;
}
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">Highlight part of the text to see the popover:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="VirtualElementPopover.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popover/VirtualElementPopover.tsx').default} 
                    raw={require('!raw-loader!../components/popover/VirtualElementPopover.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">For more information on the virtual element&#39;s properties, see the following resources:</Typography>
<ul className="space-y-16">
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect">getBoundingClientRect</a></li>
<li><a href="https://drafts.fxtf.org/geometry-1/#domrectreadonly">DOMRect</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType">Node types</a></li>
</ul>
<Typography className="text-14 mb-32" component="div">:::warning
The usage of a virtual element for the Popover component requires the <code>{`nodeType`}</code> property.
This is different from virtual elements used for the <a href="/material-ui/react-popper/#virtual-element"><code>{`Popper`}</code></a> or <a href="/material-ui/react-tooltip/#virtual-element"><code>{`Tooltip`}</code></a> components, both of which don&#39;t require the property.
:::</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Complementary projects</Typography>
<Typography className="text-14 mb-32" component="div">For more advanced use cases, you might be able to take advantage of:</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">material-ui-popup-state</Typography>
<Typography className="text-14 mb-32" component="div"> src="https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star" alt="stars/>
 src="https://img.shields.io/npm/dm/material-ui-popup-state.svg" alt="npm downloads/></Typography>
<Typography className="text-14 mb-32" component="div">The package <a href="https://github.com/jcoreio/material-ui-popup-state"><code>{`material-ui-popup-state`}</code></a> that takes care of popover state for you in most cases.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PopoverPopupState.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/popover/PopoverPopupState.tsx').default} 
                    raw={require('!raw-loader!../components/popover/PopoverPopupState.tsx')}
                    /></Typography>

                </>
    
                     );
                   }
                   
                   export default PopoverDoc;
                   