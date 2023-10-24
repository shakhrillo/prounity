import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function AppBarDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/app-bar" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">App Bar</Typography>
<Typography className="description">The App Bar displays information and actions relating to the current screen.</Typography>

<Typography className="text-14 mb-32" component="div">The top App bar provides content and actions related to the current screen. It&#39;s used for branding, screen titles, navigation, and actions.</Typography>
<Typography className="text-14 mb-32" component="div">It can transform into a contextual action bar or be used as a navbar.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic App bar</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ButtonAppBar.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/app-bar/ButtonAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/ButtonAppBar.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">App bar with menu</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="MenuAppBar.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/app-bar/MenuAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/MenuAppBar.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">App bar with responsive menu</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ResponsiveAppBar.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/app-bar/ResponsiveAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/ResponsiveAppBar.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">App bar with search field</Typography>
<Typography className="text-14 mb-32" component="div">A side searchbar.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SearchAppBar.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/app-bar/SearchAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/SearchAppBar.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Responsive App bar with Drawer</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DrawerAppBar.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/app-bar/DrawerAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/DrawerAppBar.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">App bar with a primary search field</Typography>
<Typography className="text-14 mb-32" component="div">A primary searchbar.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PrimarySearchAppBar.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/app-bar/PrimarySearchAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/PrimarySearchAppBar.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Dense (desktop only)</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DenseAppBar.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/app-bar/DenseAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/DenseAppBar.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Prominent</Typography>
<Typography className="text-14 mb-32" component="div">A prominent app bar.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ProminentAppBar.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/app-bar/ProminentAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/ProminentAppBar.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Bottom App bar</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BottomAppBar.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/app-bar/BottomAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/BottomAppBar.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Fixed placement</Typography>
<Typography className="text-14 mb-32" component="div">When you render the app bar position fixed, the dimension of the element doesn&#39;t impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions:</Typography>
<ol>
<li>You can use <code>{`position="sticky"`}</code> instead of fixed. ⚠️ sticky is not supported by IE11.</li>
<li>You can render a second <code>{`<Toolbar />`}</code> component:</li>
</ol>

<FuseHighlight component="pre" className="language-jsx">
{` 
function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
`}
</FuseHighlight>
<ol start={3}>
<li>You can use <code>{`theme.mixins.toolbar`}</code> CSS:</li>
</ol>

<FuseHighlight component="pre" className="language-jsx">
{` 
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
}
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Scrolling</Typography>
<Typography className="text-14 mb-32" component="div">You can use the <code>{`useScrollTrigger()`}</code> hook to respond to user scroll actions.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Hide App bar</Typography>
<Typography className="text-14 mb-32" component="div">The app bar hides on scroll down to leave more space for reading.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="HideAppBar.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/app-bar/HideAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/HideAppBar.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Elevate App bar</Typography>
<Typography className="text-14 mb-32" component="div">The app bar elevates on scroll to communicate that the user is not at the top of the page.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ElevateAppBar.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/app-bar/ElevateAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/ElevateAppBar.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Back to top</Typography>
<Typography className="text-14 mb-32" component="div">A floating action button appears on scroll to make it easy to get back to the top of the page.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BackToTop.js"
                    className="my-16"
                    iframe={true}
                    component={require('../components/app-bar/BackToTop.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/BackToTop.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3"><code>{`useScrollTrigger([options]) => trigger`}</code></Typography>
<Typography className="text-14 mt-12 mb-10" component="h4">Arguments</Typography>
<ol>
<li><Typography className="text-14 mb-32" component="div"><code>{`options`}</code> (<em>object</em> [optional]):</Typography>
<ul className="space-y-16">
<li><code>{`options.disableHysteresis`}</code> (<em>bool</em> [optional]): Defaults to <code>{`false`}</code>. Disable the hysteresis. Ignore the scroll direction when determining the <code>{`trigger`}</code> value.</li>
<li><code>{`options.target`}</code> (<em>Node</em> [optional]): Defaults to <code>{`window`}</code>.</li>
<li><code>{`options.threshold`}</code> (<em>number</em> [optional]): Defaults to <code>{`100`}</code>. Change the <code>{`trigger`}</code> value when the vertical scroll strictly crosses this threshold (exclusive).</li>
</ul>
</li>
</ol>
<Typography className="text-14 mt-12 mb-10" component="h4">Returns</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`trigger`}</code>: Does the scroll position match the criteria?</Typography>
<Typography className="text-14 mt-12 mb-10" component="h4">Examples</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Enable color on dark</Typography>
<Typography className="text-14 mb-32" component="div">Following the <a href="https://m2.material.io/design/color/dark-theme.html">Material Design guidelines</a>, the <code>{`color`}</code> prop has no effect on the appearance of the app bar in dark mode.
You can override this behavior by setting the <code>{`enableColorOnDark`}</code> prop to <code>{`true`}</code>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="EnableColorOnDarkAppBar.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/app-bar/EnableColorOnDarkAppBar.tsx').default} 
                    raw={require('!raw-loader!../components/app-bar/EnableColorOnDarkAppBar.tsx')}
                    /></Typography>

                </>
    
                     );
                   }
                   
                   export default AppBarDoc;
                   