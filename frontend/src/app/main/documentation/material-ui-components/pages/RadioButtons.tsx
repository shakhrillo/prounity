import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function RadioButtonsDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/radio-buttons" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Radio Group</Typography>
<Typography className="description">The Radio Group allows the user to select one option from a set.</Typography>

<Typography className="text-14 mb-32" component="div">Use radio buttons when the user needs to see all available options.
If available options can be collapsed, consider using a <a href="/material-ui/react-select/">Select component</a> because it uses less space.</Typography>
<Typography className="text-14 mb-32" component="div">Radio buttons should have the most commonly used option selected by default.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Radio group</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`RadioGroup`}</code> is a helpful wrapper used to group <code>{`Radio`}</code> components that provides an easier API, and proper keyboard accessibility to the group.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="RadioButtonsGroup.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/radio-buttons/RadioButtonsGroup.tsx').default} 
                    raw={require('!raw-loader!../components/radio-buttons/RadioButtonsGroup.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Direction</Typography>
<Typography className="text-14 mb-32" component="div">To lay out the buttons horizontally, set the <code>{`row`}</code> prop:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="RowRadioButtonsGroup.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/radio-buttons/RowRadioButtonsGroup.tsx').default} 
                    raw={require('!raw-loader!../components/radio-buttons/RowRadioButtonsGroup.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Controlled</Typography>
<Typography className="text-14 mb-32" component="div">You can control the radio with the <code>{`value`}</code> and <code>{`onChange`}</code> props:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ControlledRadioButtonsGroup.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/radio-buttons/ControlledRadioButtonsGroup.tsx').default} 
                    raw={require('!raw-loader!../components/radio-buttons/ControlledRadioButtonsGroup.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Standalone radio buttons</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`Radio`}</code> can also be used standalone, without the RadioGroup wrapper.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="RadioButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/radio-buttons/RadioButtons.tsx').default} 
                    raw={require('!raw-loader!../components/radio-buttons/RadioButtons.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Size</Typography>
<Typography className="text-14 mb-32" component="div">Use the <code>{`size`}</code> prop or customize the font size of the svg icons to change the size of the radios.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SizeRadioButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/radio-buttons/SizeRadioButtons.tsx').default} 
                    raw={require('!raw-loader!../components/radio-buttons/SizeRadioButtons.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Color</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ColorRadioButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/radio-buttons/ColorRadioButtons.tsx').default} 
                    raw={require('!raw-loader!../components/radio-buttons/ColorRadioButtons.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Label placement</Typography>
<Typography className="text-14 mb-32" component="div">You can change the placement of the label with the <code>{`FormControlLabel`}</code> component&#39;s <code>{`labelPlacement`}</code> prop:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FormControlLabelPlacement.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/radio-buttons/FormControlLabelPlacement.tsx').default} 
                    raw={require('!raw-loader!../components/radio-buttons/FormControlLabelPlacement.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Show error</Typography>
<Typography className="text-14 mb-32" component="div">In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ErrorRadios.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/radio-buttons/ErrorRadios.tsx').default} 
                    raw={require('!raw-loader!../components/radio-buttons/ErrorRadios.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-14 mb-32" component="div">Here is an example of customizing the component.
You can learn more about this in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedRadios.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/radio-buttons/CustomizedRadios.tsx').default} 
                    raw={require('!raw-loader!../components/radio-buttons/CustomizedRadios.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2"><code>{`useRadioGroup`}</code></Typography>
<Typography className="text-14 mb-32" component="div">For advanced customization use cases, a <code>{`useRadioGroup()`}</code> hook is exposed.
It returns the context value of the parent radio group.
The Radio component uses this hook internally.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">API</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
import { useRadioGroup } from '@mui/material/RadioGroup';
`}
</FuseHighlight>
<Typography className="text-14 mt-12 mb-10" component="h4">Returns</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`value`}</code> (<em>object</em>):</Typography>
<ul className="space-y-16">
<li><code>{`value.name`}</code> (<em>string</em> [optional]): The name used to reference the value of the control.</li>
<li><code>{`value.onChange`}</code> (<em>func</em> [optional]): Callback fired when a radio button is selected.</li>
<li><code>{`value.value`}</code> (<em>any</em> [optional]): Value of the selected radio button.</li>
</ul>
<Typography className="text-14 mt-12 mb-10" component="h4">Example</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="UseRadioGroup.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/radio-buttons/UseRadioGroup.tsx').default} 
                    raw={require('!raw-loader!../components/radio-buttons/UseRadioGroup.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">When to use</Typography>
<ul className="space-y-16">
<li><a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/">Checkboxes vs. Radio Buttons</a></li>
</ul>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-14 mb-32" component="div">(WAI-ARIA: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/radio/">https://www.w3.org/WAI/ARIA/apg/patterns/radio/</a>)</Typography>
<ul className="space-y-16">
<li><Typography className="text-14 mb-32" component="div">All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the <code>{`<label>`}</code> element (<a href="/material-ui/api/form-control-label/">FormControlLabel</a>).</Typography>
</li>
<li><Typography className="text-14 mb-32" component="div">When a label can&#39;t be used, it&#39;s necessary to add an attribute directly to the input component.
In this case, you can apply the additional attribute (e.g. <code>{`aria-label`}</code>, <code>{`aria-labelledby`}</code>, <code>{`title`}</code>) via the <code>{`inputProps`}</code> property.</Typography>
</li>
</ul>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Radio
  value="radioA"
  inputProps={{
    'aria-label': 'Radio A',
  
/>
`}
</FuseHighlight>

                </>
    
                     );
                   }
                   
                   export default RadioButtonsDoc;
                   