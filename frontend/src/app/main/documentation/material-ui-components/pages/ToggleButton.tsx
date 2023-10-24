import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function ToggleButtonDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/toggle-button" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Toggle Button</Typography>
<Typography className="description">A Toggle Button can be used to group related options.</Typography>

<Typography className="text-14 mb-32" component="div">To emphasize groups of related Toggle buttons,
a group should share a common container.
The <code>{`ToggleButtonGroup`}</code> controls the selected state of its child buttons when given its own <code>{`value`}</code> prop.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Exclusive selection</Typography>
<Typography className="text-14 mb-32" component="div">With exclusive selection, selecting one option deselects any other.</Typography>
<Typography className="text-14 mb-32" component="div">In this example, text justification toggle buttons present options for left, center, right, and fully justified text (disabled), with only one item available for selection at a time.</Typography>
<Typography className="text-14 mb-32" component="div"><strong>Note</strong>: Exclusive selection does not enforce that a button must be active. For that effect see <a href="#enforce-value-set">enforce value set</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ToggleButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/toggle-button/ToggleButtons.tsx').default} 
                    raw={require('!raw-loader!../components/toggle-button/ToggleButtons.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Multiple selection</Typography>
<Typography className="text-14 mb-32" component="div">Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ToggleButtonsMultiple.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/toggle-button/ToggleButtonsMultiple.tsx').default} 
                    raw={require('!raw-loader!../components/toggle-button/ToggleButtonsMultiple.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Size</Typography>
<Typography className="text-14 mb-32" component="div">For larger or smaller buttons, use the <code>{`size`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ToggleButtonSizes.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/toggle-button/ToggleButtonSizes.tsx').default} 
                    raw={require('!raw-loader!../components/toggle-button/ToggleButtonSizes.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Color</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ColorToggleButton.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/toggle-button/ColorToggleButton.tsx').default} 
                    raw={require('!raw-loader!../components/toggle-button/ColorToggleButton.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Vertical buttons</Typography>
<Typography className="text-14 mb-32" component="div">The buttons can be stacked vertically with the <code>{`orientation`}</code> prop set to &quot;vertical&quot;.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="VerticalToggleButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/toggle-button/VerticalToggleButtons.tsx').default} 
                    raw={require('!raw-loader!../components/toggle-button/VerticalToggleButtons.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Enforce value set</Typography>
<Typography className="text-14 mb-32" component="div">If you want to enforce that at least one button must be active, you can adapt your handleChange function.</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
const handleAlignment = (event, newAlignment) => {
  if (newAlignment !== null) {
    setAlignment(newAlignment);
  }
};

const handleDevices = (event, newDevices) => {
  if (newDevices.length) {
    setDevices(newDevices);
  }
};
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ToggleButtonNotEmpty.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/toggle-button/ToggleButtonNotEmpty.tsx').default} 
                    raw={require('!raw-loader!../components/toggle-button/ToggleButtonNotEmpty.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Standalone toggle button</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="StandaloneToggleButton.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/toggle-button/StandaloneToggleButton.tsx').default} 
                    raw={require('!raw-loader!../components/toggle-button/StandaloneToggleButton.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-14 mb-32" component="div">Here is an example of customizing the component.
You can learn more about this in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedDividers.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/toggle-button/CustomizedDividers.tsx').default} 
                    raw={require('!raw-loader!../components/toggle-button/CustomizedDividers.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">ARIA</Typography>
<ul className="space-y-16">
<li>ToggleButtonGroup has <code>{`role="group"`}</code>. You should provide an accessible label with <code>{`aria-label="label"`}</code>, <code>{`aria-labelledby="id"`}</code> or <code>{`<label>`}</code>.</li>
<li>ToggleButton sets <code>{`aria-pressed="<bool>"`}</code> according to the button state. You should label each button with <code>{`aria-label`}</code>.</li>
</ul>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Keyboard</Typography>
<Typography className="text-14 mb-32" component="div">At present, toggle buttons are in DOM order. Navigate between them with the tab key. The button behavior follows standard keyboard semantics.</Typography>

                </>
    
                     );
                   }
                   
                   export default ToggleButtonDoc;
                   