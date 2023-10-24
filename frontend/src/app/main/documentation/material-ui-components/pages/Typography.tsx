import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function TypographyDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/typography" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Typography</Typography>
<Typography className="description">Use typography to present your design and content as clearly and efficiently as possible.</Typography>

<Typography className="text-14 mb-32" component="div">Too many type sizes and styles at once can spoil any layout.
A <a href="https://m2.material.io/design/typography/#type-scale">typographic scale</a> has a limited set of type sizes that work well together along with the layout grid.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">General</Typography>
<Typography className="text-14 mb-32" component="div">The <em>Roboto</em> font will <strong>not</strong> be automatically loaded by Material UI.
You are responsible for loading any fonts used in your application.
Roboto Font has a few easy ways to get started. For more advanced configuration, check out
<a href="/material-ui/customization/typography/">the theme customization section</a>.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Roboto Font CDN</Typography>
<Typography className="text-14 mb-32" component="div">Shown below is a sample link markup used to load the Roboto font from a CDN:</Typography>

<FuseHighlight component="pre" className="language-html">
{` 
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Install with npm</Typography>
<Typography className="text-14 mb-32" component="div">You can <a href="https://www.npmjs.com/package/@fontsource/roboto">install it</a> by running one of the following commands in your terminal:</Typography>
<Typography className="text-14 mb-32" component="div">With <strong>npm</strong>:</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`npm install @fontsource/roboto`}</code></Typography>
<Typography className="text-14 mb-32" component="div">Or <strong>yarn</strong>:</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`yarn add @fontsource/roboto`}</code></Typography>
<Typography className="text-14 mb-32" component="div">Then, you can import it in your entry-point.</Typography>

<FuseHighlight component="pre" className="language-js">
{` 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">For more info check out <a href="https://github.com/fontsource/fontsource">Fontsource</a>.</Typography>
<Typography className="text-14 mb-32" component="div">Fontsource can be configured to load specific subsets, weights and styles.
Material UI default typography configuration only relies on 300, 400, 500, and 700 font weights.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Component</Typography>
<Typography className="text-14 mb-32" component="div">The Typography component makes it easy to apply a default set of font weights and sizes in your application.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Types.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/typography/Types.tsx').default} 
                    raw={require('!raw-loader!../components/typography/Types.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Theme</Typography>
<Typography className="text-14 mb-32" component="div">In some situations you might not be able to use the <code>{`Typography`}</code> component.
Hopefully, you might be able to take advantage of the <a href="/material-ui/customization/default-theme/?expand-path=$.typography"><code>{`typography`}</code></a> keys of the theme.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TypographyTheme.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/typography/TypographyTheme.tsx').default} 
                    raw={require('!raw-loader!../components/typography/TypographyTheme.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Changing the semantic element</Typography>
<Typography className="text-14 mb-32" component="div">The Typography component uses the <code>{`variantMapping`}</code> prop to associate a UI variant with a semantic element.
It&#39;s important to realize that the style of a typography component is independent from the semantic underlying element.</Typography>
<ul className="space-y-16">
<li>You can change the underlying element for a one-off situation with the <code>{`component`}</code> prop:</li>
</ul>

<FuseHighlight component="pre" className="language-jsx">
{` 
{
  /* There is already an h1 in the page, let's not duplicate it. */
}
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>;
`}
</FuseHighlight>
<ul className="space-y-16">
<li>You can change the mapping <a href="/material-ui/customization/typography/#adding-amp-disabling-variants">globally using the theme</a>:</li>
</ul>

<FuseHighlight component="pre" className="language-js">
{` 
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Adding &amp; disabling variants</Typography>
<Typography className="text-14 mb-32" component="div">In addition to using the default typography variants, you can add custom ones, or disable any you don&#39;t need. See the <a href="/material-ui/customization/typography/#adding-amp-disabling-variants">Adding &amp; disabling variants</a> example for more info.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">System props</Typography>
<Typography className="text-14 mb-32" component="div">As a CSS utility component, the <code>{`Typography`}</code> supports all <a href="/system/properties/"><code>{`system`}</code></a> properties. You can use them as prop directly on the component.
For instance, a margin-top:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Typography mt={2}>
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-14 mb-32" component="div">A few key factors to follow for an accessible typography:</Typography>
<ul className="space-y-16">
<li><strong>Color</strong>. Provide enough contrast between text and its background, check out the minimum recommended <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">WCAG 2.0 color contrast ratio</a> (4.5:1).</li>
<li><strong>Font size</strong>. Use <a href="/material-ui/customization/typography/#font-size">relative units (rem)</a> to accommodate the user&#39;s settings.</li>
<li><strong>Heading hierarchy</strong>. <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Don&#39;t skip</a> heading levels. In order to solve this problem, you need to <a href="#changing-the-semantic-element">separate the semantics from the style</a>.</li>
</ul>

                </>
    
                     );
                   }
                   
                   export default TypographyDoc;
                   