import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function BoxDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/box" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Box</Typography>
<Typography className="description">The Box component serves as a wrapper component for most of the CSS utility needs.</Typography>

<Typography className="text-14 mb-32" component="div">The Box component packages <a href="/system/properties/">all the style functions</a> that are exposed in <code>{`@mui/system`}</code>.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Example</Typography>
<Typography className="text-14 mb-32" component="div"><a href="/system/palette/">The palette</a> style function.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">The <code>{`sx`}</code> prop</Typography>
<Typography className="text-14 mb-32" component="div">All system properties are available via the <a href="/system/getting-started/the-sx-prop/"><code>{`sx`}</code> prop</a>.
In addition, the <code>{`sx`}</code> prop allows you to specify any other CSS rules you may need. Here&#39;s an example of how you can use it:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BoxSx.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/box/BoxSx.tsx').default} 
                    raw={require('!raw-loader!../components/box/BoxSx.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Overriding Material UI components</Typography>
<Typography className="text-14 mb-32" component="div">The Box component wraps your component.
It creates a new DOM element, a <code>{`<div>`}</code> that by default can be changed with the <code>{`component`}</code> prop.
Let&#39;s say you want to use a <code>{`<span>`}</code> instead:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BoxComponent.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/box/BoxComponent.tsx').default} 
                    raw={require('!raw-loader!../components/box/BoxComponent.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">This works great when the changes can be isolated to a new DOM element.
For instance, you can change the margin this way.</Typography>
<Typography className="text-14 mb-32" component="div">However, sometimes you have to target the underlying DOM element.
As an example, you may want to change the border of the Button.
The Button component defines its own styles. CSS inheritance doesn&#39;t help.
To workaround the problem, you can use the <a href="/system/getting-started/the-sx-prop/"><code>{`sx`}</code></a> prop directly on the child if it is a Material UI component.</Typography>

<FuseHighlight component="pre" className="language-diff">
{` 
-<Box sx={{ border: '1px dashed grey' }}>
-  <Button>Save</Button>
-</Box>
+<Button sx={{ border: '1px dashed grey' }}>Save</Button>
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">For non-Material UI components, use the <code>{`component`}</code> prop.</Typography>

<FuseHighlight component="pre" className="language-diff">
{` 
-<Box sx={{ border: '1px dashed grey' }}>
-  <button>Save</button>
-</Box>
+<Box component="button" sx={{ border: '1px dashed grey' }}>Save</Box>
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">System props</Typography>
<Typography className="text-14 mb-32" component="div">As a CSS utility component, the <code>{`Box`}</code> also supports all <a href="/system/properties/"><code>{`system`}</code></a> properties. You can use them as prop directly on the component.
For instance, a margin-top:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Box mt={2}>
`}
</FuseHighlight>

                </>
    
                     );
                   }
                   
                   export default BoxDoc;
                   