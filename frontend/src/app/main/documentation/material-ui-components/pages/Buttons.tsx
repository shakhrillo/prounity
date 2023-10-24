import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function ButtonsDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/buttons" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Button</Typography>
<Typography className="description">Buttons allow users to take actions, and make choices, with a single tap.</Typography>

<Typography className="text-14 mb-32" component="div">Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:</Typography>
<ul className="space-y-16">
<li>Modal windows</li>
<li>Forms</li>
<li>Cards</li>
<li>Toolbars</li>
</ul>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic button</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`Button`}</code> comes with three variants: text (default), contained, and outlined.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/BasicButtons.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/BasicButtons.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Text button</Typography>
<Typography className="text-14 mb-32" component="div"><a href="https://m2.material.io/components/buttons#text-button">Text buttons</a>
are typically used for less-pronounced actions, including those located: in dialogs, in cards.
In cards, text buttons help maintain an emphasis on card content.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TextButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/TextButtons.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/TextButtons.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Contained button</Typography>
<Typography className="text-14 mb-32" component="div"><a href="https://m2.material.io/components/buttons#contained-button">Contained buttons</a>
are high-emphasis, distinguished by their use of elevation and fill.
They contain actions that are primary to your app.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ContainedButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/ContainedButtons.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/ContainedButtons.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">You can remove the elevation with the <code>{`disableElevation`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DisableElevation.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/DisableElevation.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/DisableElevation.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Outlined button</Typography>
<Typography className="text-14 mb-32" component="div"><a href="https://m2.material.io/components/buttons#outlined-button">Outlined buttons</a> are medium-emphasis buttons.
They contain actions that are important but aren&#39;t the primary action in an app.</Typography>
<Typography className="text-14 mb-32" component="div">Outlined buttons are also a lower emphasis alternative to contained buttons,
or a higher emphasis alternative to text buttons.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="OutlinedButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/OutlinedButtons.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/OutlinedButtons.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Handling clicks</Typography>
<Typography className="text-14 mb-32" component="div">All components accept an <code>{`onClick`}</code> handler that is applied to the root DOM element.</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Button
  onClick={() => {
    alert('clicked');
  
>
  Click me
</Button>
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">Note that the documentation <a href="/material-ui/guides/api/#native-properties">avoids</a> mentioning native props (there are a lot) in the API section of the components.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Color</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ColorButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/ColorButtons.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/ColorButtons.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">In addition to using the default button colors, you can add custom ones, or disable any you don&#39;t need. See the <a href="/material-ui/customization/palette/#custom-colors">Adding new colors</a> examples for more info.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Sizes</Typography>
<Typography className="text-14 mb-32" component="div">For larger or smaller buttons, use the <code>{`size`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ButtonSizes.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/ButtonSizes.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/ButtonSizes.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Buttons with icons and label</Typography>
<Typography className="text-14 mb-32" component="div">Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="IconLabelButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/IconLabelButtons.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/IconLabelButtons.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Icon button</Typography>
<Typography className="text-14 mb-32" component="div">Icon buttons are commonly found in app bars and toolbars.</Typography>
<Typography className="text-14 mb-32" component="div">Icons are also appropriate for toggle buttons that allow a single choice to be selected or
deselected, such as adding or removing a star to an item.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="IconButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/IconButtons.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/IconButtons.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Sizes</Typography>
<Typography className="text-14 mb-32" component="div">For larger or smaller icon buttons, use the <code>{`size`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="IconButtonSizes.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/IconButtonSizes.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/IconButtonSizes.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Colors</Typography>
<Typography className="text-14 mb-32" component="div">Use <code>{`color`}</code> prop to apply theme color palette to component.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="IconButtonColors.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/IconButtonColors.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/IconButtonColors.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-14 mb-32" component="div">Here are some examples of customizing the component.
You can learn more about this in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedButtons.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/CustomizedButtons.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/CustomizedButtons.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">🎨 If you are looking for inspiration, you can check <a href="https://mui-treasury.com/styles/button/">MUI Treasury&#39;s customization examples</a>.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Complex button</Typography>
<Typography className="text-14 mb-32" component="div">The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the <code>{`ButtonBase`}</code>.
You can take advantage of this lower-level component to build custom interactions.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ButtonBaseDemo.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/buttons/ButtonBaseDemo.tsx').default} 
                    raw={require('!raw-loader!../components/buttons/ButtonBaseDemo.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Third-party routing library</Typography>
<Typography className="text-14 mb-32" component="div">One frequent use case is to perform navigation on the client only, without an HTTP round-trip to the server.
The <code>{`ButtonBase`}</code> component provides the <code>{`component`}</code> prop to handle this use case.
Here is a <a href="/material-ui/guides/routing/#button">more detailed guide</a>.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Limitations</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Cursor not-allowed</Typography>
<Typography className="text-14 mb-32" component="div">The ButtonBase component sets <code>{`pointer-events: none;`}</code> on disabled buttons, which prevents the appearance of a disabled cursor.</Typography>
<Typography className="text-14 mb-32" component="div">If you wish to use <code>{`not-allowed`}</code>, you have two options:</Typography>
<ol>
<li><strong>CSS only</strong>. You can remove the pointer-events style on the disabled state of the <code>{`<button>`}</code> element:</li>
</ol>

<FuseHighlight component="pre" className="language-css">
{` 
.MuiButtonBase-root:disabled {
  cursor: not-allowed;
  pointer-events: auto;
}
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">However:</Typography>
<ul className="space-y-16">
<li>You should add <code>{`pointer-events: none;`}</code> back when you need to display <a href="/material-ui/react-tooltip/#disabled-elements">tooltips on disabled elements</a>.</li>
<li>The cursor won&#39;t change if you render something other than a button element, for instance, a link <code>{`<a>`}</code> element.</li>
</ul>
<ol start={2}>
<li><strong>DOM change</strong>. You can wrap the button:</li>
</ol>

<FuseHighlight component="pre" className="language-jsx">
{` 
<span style={{ cursor: 'not-allowed' }}>
  <Button component={Link} disabled>
    disabled
  </Button>
</span>
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">This has the advantage of supporting any element, for instance, a link <code>{`<a>`}</code> element.</Typography>

                </>
    
                     );
                   }
                   
                   export default ButtonsDoc;
                   