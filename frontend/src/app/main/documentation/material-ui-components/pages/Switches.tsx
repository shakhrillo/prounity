import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function SwitchesDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/switches" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Switch</Typography>
<Typography className="description">Switches toggle the state of a single setting on or off.</Typography>

<Typography className="text-14 mb-32" component="div">Switches are the preferred way to adjust settings on mobile.
The option that the switch controls, as well as the state it&#39;s in,
should be made clear from the corresponding inline label.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic switches</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicSwitches.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/switches/BasicSwitches.tsx').default} 
                    raw={require('!raw-loader!../components/switches/BasicSwitches.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Label</Typography>
<Typography className="text-14 mb-32" component="div">You can provide a label to the <code>{`Switch`}</code> thanks to the <code>{`FormControlLabel`}</code> component.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SwitchLabels.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/switches/SwitchLabels.tsx').default} 
                    raw={require('!raw-loader!../components/switches/SwitchLabels.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Size</Typography>
<Typography className="text-14 mb-32" component="div">Use the <code>{`size`}</code> prop to change the size of the switch.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SwitchesSize.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/switches/SwitchesSize.tsx').default} 
                    raw={require('!raw-loader!../components/switches/SwitchesSize.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Color</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ColorSwitches.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/switches/ColorSwitches.tsx').default} 
                    raw={require('!raw-loader!../components/switches/ColorSwitches.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Controlled</Typography>
<Typography className="text-14 mb-32" component="div">You can control the switch with the <code>{`checked`}</code> and <code>{`onChange`}</code> props:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ControlledSwitches.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/switches/ControlledSwitches.tsx').default} 
                    raw={require('!raw-loader!../components/switches/ControlledSwitches.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Switches with FormGroup</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`FormGroup`}</code> is a helpful wrapper used to group selection controls components that provides an easier API.
However, you are encouraged to use <a href="/material-ui/react-checkbox/">Checkboxes</a> instead if multiple related controls are required. (See: <a href="#when-to-use">When to use</a>).</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SwitchesGroup.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/switches/SwitchesGroup.tsx').default} 
                    raw={require('!raw-loader!../components/switches/SwitchesGroup.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-14 mb-32" component="div">Here are some examples of customizing the component.
You can learn more about this in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedSwitches.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/switches/CustomizedSwitches.tsx').default} 
                    raw={require('!raw-loader!../components/switches/CustomizedSwitches.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">🎨 If you are looking for inspiration, you can check <a href="https://mui-treasury.com/styles/switch/">MUI Treasury&#39;s customization examples</a>.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Label placement</Typography>
<Typography className="text-14 mb-32" component="div">You can change the placement of the label:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FormControlLabelPosition.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/switches/FormControlLabelPosition.tsx').default} 
                    raw={require('!raw-loader!../components/switches/FormControlLabelPosition.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">When to use</Typography>
<ul className="space-y-16">
<li><a href="https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8">Checkboxes vs. Switches</a></li>
</ul>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<ul className="space-y-16">
<li>It will render an element with the <code>{`checkbox`}</code> role not <code>{`switch`}</code> role since this
role isn&#39;t widely supported yet. Please test first if assistive technology of your
target audience supports this role properly. Then you can change the role with
<code>{`<Switch inputProps={{ role: 'switch' }}>`}</code></li>
<li>All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the <code>{`<label>`}</code> element (<a href="/material-ui/api/form-control-label/">FormControlLabel</a>).</li>
<li>When a label can&#39;t be used, it&#39;s necessary to add an attribute directly to the input component.
In this case, you can apply the additional attribute (e.g. <code>{`aria-label`}</code>, <code>{`aria-labelledby`}</code>, <code>{`title`}</code>) via the <code>{`inputProps`}</code> prop.</li>
</ul>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
`}
</FuseHighlight>

                </>
    
                     );
                   }
                   
                   export default SwitchesDoc;
                   