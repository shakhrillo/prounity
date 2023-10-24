import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function LinksDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/links" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Links</Typography>
<Typography className="description">The Link component allows you to easily customize anchor elements with your theme colors and typography styles.</Typography>



<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic links</Typography>
<Typography className="text-14 mb-32" component="div">The Link component is built on top of the <a href="/material-ui/api/typography/">Typography</a> component, meaning that you can use its props.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Links.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/links/Links.tsx').default} 
                    raw={require('!raw-loader!../components/links/Links.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">However, the Link component has some different default props than the Typography component:</Typography>
<ul className="space-y-16">
<li><code>{`color="primary"`}</code> as the link needs to stand out.</li>
<li><code>{`variant="inherit"`}</code> as the link will, most of the time, be used as a child of a Typography component.</li>
</ul>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Underline</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`underline`}</code> prop can be used to set the underline behavior. The default is <code>{`always`}</code>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="UnderlineLink.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/links/UnderlineLink.tsx').default} 
                    raw={require('!raw-loader!../components/links/UnderlineLink.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Security</Typography>
<Typography className="text-14 mb-32" component="div">When you use <code>{`target="_blank"`}</code> with Links, it is <a href="https://developers.google.com/web/tools/lighthouse/audits/noopener">recommended</a> to always set <code>{`rel="noopener"`}</code> or <code>{`rel="noreferrer"`}</code> when linking to third party content.</Typography>
<ul className="space-y-16">
<li><code>{`rel="noopener"`}</code> prevents the new page from being able to access the <code>{`window.opener`}</code> property and ensures it runs in a separate process.
Without this, the target page can potentially redirect your page to a malicious URL.</li>
<li><code>{`rel="noreferrer"`}</code> has the same effect, but also prevents the <em>Referer</em> header from being sent to the new page.
⚠️ Removing the referrer header will affect analytics.</li>
</ul>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Third-party routing library</Typography>
<Typography className="text-14 mb-32" component="div">One frequent use case is to perform navigation on the client only, without an HTTP round-trip to the server.
The <code>{`Link`}</code> component provides the <code>{`component`}</code> prop to handle this use case.
Here is a <a href="/material-ui/guides/routing/#link">more detailed guide</a>.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-14 mb-32" component="div">(WAI-ARIA: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/link/">https://www.w3.org/WAI/ARIA/apg/patterns/link/</a>)</Typography>
<ul className="space-y-16">
<li>When providing the content for the link, avoid generic descriptions like &quot;click here&quot; or &quot;go to&quot;.
Instead, use <a href="https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text">specific descriptions</a>.</li>
<li>For the best user experience, links should stand out from the text on the page. For instance, you can keep the default <code>{`underline="always"`}</code> behavior.</li>
<li>If a link doesn&#39;t have a meaningful href, <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">it should be rendered using a <code>{`<button>`}</code> element</a>.
The demo below illustrates how to properly link with a <code>{`<button>`}</code>:</li>
</ul>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ButtonLink.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/links/ButtonLink.tsx').default} 
                    raw={require('!raw-loader!../components/links/ButtonLink.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Keyboard accessibility</Typography>
<ul className="space-y-16">
<li>Interactive elements should receive focus in a coherent order when the user presses the <kbd className="key">Tab</kbd> key.</li>
<li>Users should be able to open a link by pressing <kbd className="key">Enter</kbd>.</li>
</ul>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Screen reader accessibility</Typography>
<ul className="space-y-16">
<li>When a link receives focus, screen readers should announce a descriptive link name.
If the link opens in a new window or browser tab, add an <a href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8"><code>{`aria-label`}</code></a> to inform screen reader users—for example, <em>&quot;To learn more, visit the About page which opens in a new window.&quot;</em></li>
</ul>

                </>
    
                     );
                   }
                   
                   export default LinksDoc;
                   