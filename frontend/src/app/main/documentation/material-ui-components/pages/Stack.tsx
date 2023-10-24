import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function StackDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/stack" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Stack</Typography>
<Typography className="description">Stack is a container component for arranging elements vertically or horizontally.</Typography>

<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Introduction</Typography>
<Typography className="text-14 mb-32" component="div">The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child.</Typography>
<div className="border border-1 p-16 rounded-16 my-12">

<Typography className="text-14 mb-32" component="div">Stack is ideal for one-dimensional layouts, while Grid is preferable when you need both vertical <em>and</em> horizontal arrangement.</Typography>
</div>



<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basics</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
import Stack from '@mui/material/Stack';
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">The Stack component acts as a generic container, wrapping around the elements to be arranged.</Typography>
<Typography className="text-14 mb-32" component="div">Use the <code>{`spacing`}</code> prop to control the space between children.
The spacing value can be any number, including decimals, or a string.
(The prop is converted into a CSS property using the <a href="/material-ui/customization/spacing/"><code>{`theme.spacing()`}</code></a> helper.)</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicStack.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/stack/BasicStack.tsx').default} 
                    raw={require('!raw-loader!../components/stack/BasicStack.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Stack vs. Grid</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`Stack`}</code> is concerned with one-dimensional layouts, while <a href="/material-ui/react-grid/">Grid</a> handles two-dimensional layouts. The default direction is <code>{`column`}</code> which stacks children vertically.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Direction</Typography>
<Typography className="text-14 mb-32" component="div">By default, Stack arranges items vertically in a column.
Use the <code>{`direction`}</code> prop to position items horizontally in a row:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DirectionStack.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/stack/DirectionStack.tsx').default} 
                    raw={require('!raw-loader!../components/stack/DirectionStack.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Dividers</Typography>
<Typography className="text-14 mb-32" component="div">Use the <code>{`divider`}</code> prop to insert an element between each child.
This works particularly well with the <a href="/material-ui/react-divider/">Divider</a> component, as shown below:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DividerStack.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/stack/DividerStack.tsx').default} 
                    raw={require('!raw-loader!../components/stack/DividerStack.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Responsive values</Typography>
<Typography className="text-14 mb-32" component="div">You can switch the <code>{`direction`}</code> or <code>{`spacing`}</code> values based on the active breakpoint.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ResponsiveStack.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/stack/ResponsiveStack.tsx').default} 
                    raw={require('!raw-loader!../components/stack/ResponsiveStack.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Flexbox gap</Typography>
<Typography className="text-14 mb-32" component="div">To use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap">flexbox <code>{`gap`}</code></a> for the spacing implementation, set the <code>{`useFlexGap`}</code> prop to true.</Typography>
<Typography className="text-14 mb-32" component="div">It removes the <a href="#limitations">known limitations</a> of the default implementation that uses CSS nested selector. However, CSS flexbox gap is not fully supported in some browsers.</Typography>
<Typography className="text-14 mb-32" component="div">We recommend checking the <a href="https://caniuse.com/?search=flex%20gap">support percentage</a> before using it.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FlexboxGapStack.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/stack/FlexboxGapStack.tsx').default} 
                    raw={require('!raw-loader!../components/stack/FlexboxGapStack.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">To set the prop to all stack instances, create a theme with default props:</Typography>

<FuseHighlight component="pre" className="language-js">
{` 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>…</Stack> {/* uses flexbox gap by default */}
    </ThemeProvider>
  );
}
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Interactive demo</Typography>
<Typography className="text-14 mb-32" component="div">Below is an interactive demo that lets you explore the visual results of the different settings:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="InteractiveStack.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/stack/InteractiveStack.tsx').default} 
                    raw={require('!raw-loader!../components/stack/InteractiveStack.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">System props</Typography>
<Typography className="text-14 mb-32" component="div">As a CSS utility component, the <code>{`Stack`}</code> supports all <a href="/system/properties/"><code>{`system`}</code></a> properties. You can use them as props directly on the component.
For instance, a margin-top:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Stack mt={2}>
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Limitations</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Margin on the children</Typography>
<Typography className="text-14 mb-32" component="div">Customizing the margin on the children is not supported by default.</Typography>
<Typography className="text-14 mb-32" component="div">For instance, the top-margin on the <code>{`Button`}</code> component below will be ignored.</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Stack>
  <Button sx={{ marginTop: '30px' }}>...</Button>
</Stack>
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">:::success
To overcome this limitation, set <a href="#flexbox-gap"><code>{`useFlexGap`}</code></a> prop to true to switch to CSS flexbox gap implementation.</Typography>
<Typography className="text-14 mb-32" component="div">You can learn more about this limitation by visiting this <a href="https://github.com/mui/material-ui/issues/33754">RFC</a>.
:::</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">white-space: nowrap</Typography>
<Typography className="text-14 mb-32" component="div">The initial setting on flex items is <code>{`min-width: auto`}</code>.
This causes a positioning conflict when children use <code>{`white-space: nowrap;`}</code>.
You can reproduce the issue with:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Stack direction="row">
  <Typography noWrap>
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">In order for the item to stay within the container you need to set <code>{`min-width: 0`}</code>.</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Stack direction="row" sx={{ minWidth: 0 }}>
  <Typography noWrap>
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ZeroWidthStack.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/stack/ZeroWidthStack.tsx').default} 
                    raw={require('!raw-loader!../components/stack/ZeroWidthStack.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Anatomy</Typography>
<Typography className="text-14 mb-32" component="div">The Stack component is composed of a single root <code>{`<div>`}</code> element:</Typography>

<FuseHighlight component="pre" className="language-html">
{` 
<div className="MuiStack-root">
  <!-- Stack contents -->
</div>
`}
</FuseHighlight>

                </>
    
                     );
                   }
                   
                   export default StackDoc;
                   