import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function TransitionsDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/transitions" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Transitions</Typography>
<Typography className="description">Transitions help to make a UI expressive and easy to use.</Typography>

<Typography className="text-14 mb-32" component="div">Material UI provides transitions that can be used to introduce some basic <a href="https://m2.material.io/design/motion/">motion</a> to your applications.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Collapse</Typography>
<Typography className="text-14 mb-32" component="div">Expand from the start edge of the child element.
Use the <code>{`orientation`}</code> prop if you need a horizontal collapse.
The <code>{`collapsedSize`}</code> prop can be used to set the minimum width/height when not expanded.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimpleCollapse.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/transitions/SimpleCollapse.tsx').default} 
                    raw={require('!raw-loader!../components/transitions/SimpleCollapse.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Fade</Typography>
<Typography className="text-14 mb-32" component="div">Fade in from transparent to opaque.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimpleFade.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/transitions/SimpleFade.tsx').default} 
                    raw={require('!raw-loader!../components/transitions/SimpleFade.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Grow</Typography>
<Typography className="text-14 mb-32" component="div">Expands outwards from the center of the child element, while also fading in from transparent to opaque.</Typography>
<Typography className="text-14 mb-32" component="div">The second example demonstrates how to change the <code>{`transform-origin`}</code>, and conditionally applies
the <code>{`timeout`}</code> prop to change the entry speed.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimpleGrow.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/transitions/SimpleGrow.tsx').default} 
                    raw={require('!raw-loader!../components/transitions/SimpleGrow.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Slide</Typography>
<Typography className="text-14 mb-32" component="div">Slide in from the edge of the screen.
The <code>{`direction`}</code> prop controls which edge of the screen the transition starts from.</Typography>
<Typography className="text-14 mb-32" component="div">The Transition component&#39;s <code>{`mountOnEnter`}</code> prop prevents the child component from being mounted
until <code>{`in`}</code> is <code>{`true`}</code>.
This prevents the relatively positioned component from scrolling into view
from its off-screen position.
Similarly, the <code>{`unmountOnExit`}</code> prop removes the component from the DOM after it has been transition off-screen.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimpleSlide.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/transitions/SimpleSlide.tsx').default} 
                    raw={require('!raw-loader!../components/transitions/SimpleSlide.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Slide relative to a container</Typography>
<Typography className="text-14 mb-32" component="div">The Slide component also accepts <code>{`container`}</code> prop, which is a reference to a DOM node.
If this prop is set, the Slide component will slide from the edge of that DOM node.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SlideFromContainer.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/transitions/SlideFromContainer.tsx').default} 
                    raw={require('!raw-loader!../components/transitions/SlideFromContainer.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Zoom</Typography>
<Typography className="text-14 mb-32" component="div">Expand outwards from the center of the child element.</Typography>
<Typography className="text-14 mb-32" component="div">This example also demonstrates how to delay the enter transition.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimpleZoom.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/transitions/SimpleZoom.tsx').default} 
                    raw={require('!raw-loader!../components/transitions/SimpleZoom.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Child requirement</Typography>
<ul className="space-y-16">
<li><strong>Forward the style</strong>: To better support server rendering, Material UI provides a <code>{`style`}</code> prop to the children of some transition components (Fade, Grow, Zoom, Slide).
The <code>{`style`}</code> prop must be applied to the DOM for the animation to work as expected.</li>
<li><strong>Forward the ref</strong>: The transition components require the first child element to forward its ref to the DOM node. For more details about ref, check out <a href="/material-ui/guides/composition/#caveat-with-refs">Caveat with refs</a></li>
<li><strong>Single element</strong>: The transition components require only one child element (<code>{`React.Fragment`}</code> is not allowed).</li>
</ul>

<FuseHighlight component="pre" className="language-jsx">
{` 
// The \`props\` object contains a \`style\` prop.
// You need to provide it to the \`div\` element as shown here.
const MyComponent = React.forwardRef(function (props, ref) {
  return (
    <div ref={ref} {...props}>
      Fade
    </div>
  );
});

export default function Main() {
  return (
    <Fade>
      {/* MyComponent must be the only child */}
      <MyComponent />
    </Fade>
  );
}
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">TransitionGroup</Typography>
<Typography className="text-14 mb-32" component="div">To animate a component when it is mounted or unmounted, you can use the <a href="http://reactcommunity.org/react-transition-group/transition-group/"><code>{`TransitionGroup`}</code></a> component from <em>react-transition-group</em>.
As components are added or removed, the <code>{`in`}</code> prop is toggled automatically by <code>{`TransitionGroup`}</code>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TransitionGroupExample.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/transitions/TransitionGroupExample.tsx').default} 
                    raw={require('!raw-loader!../components/transitions/TransitionGroupExample.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">TransitionComponent prop</Typography>
<Typography className="text-14 mb-32" component="div">Some Material UI components use these transitions internally. These accept a <code>{`TransitionComponent`}</code> prop to customize the default transition.
You can use any of the above components or your own.
It should respect the following conditions:</Typography>
<ul className="space-y-16">
<li>Accepts an <code>{`in`}</code> prop. This corresponds to the open/close state.</li>
<li>Call the <code>{`onEnter`}</code> callback prop when the enter transition starts.</li>
<li>Call the <code>{`onExited`}</code> callback prop when the exit transition is completed.
These two callbacks allow to unmount the children when in a closed state and fully transitioned.</li>
</ul>
<Typography className="text-14 mb-32" component="div">For more information on creating a custom transition, visit the <em>react-transition-group</em> <a href="http://reactcommunity.org/react-transition-group/transition/"><code>{`Transition`}</code> documentation</a>.
You can also visit the dedicated sections of some of the components:</Typography>
<ul className="space-y-16">
<li><a href="/material-ui/react-modal/#transitions">Modal</a></li>
<li><a href="/material-ui/react-dialog/#transitions">Dialog</a></li>
<li><a href="/material-ui/react-popper/#transitions">Popper</a></li>
<li><a href="/material-ui/react-snackbar/#transitions">Snackbar</a></li>
<li><a href="/material-ui/react-tooltip/#transitions">Tooltip</a></li>
</ul>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Performance &amp; SEO</Typography>
<Typography className="text-14 mb-32" component="div">The content of transition component is mounted by default even if <code>{`in={false}`}</code>.
This default behavior has server-side rendering and SEO in mind.
If you render expensive component trees inside your transition it might be a good idea to change this default behavior by enabling the
<code>{`unmountOnExit`}</code> prop:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Fade in={false} unmountOnExit />
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">As with any performance optimization this is not a silver bullet.
Be sure to identify bottlenecks first and then try out these optimization strategies.</Typography>

                </>
    
                     );
                   }
                   
                   export default TransitionsDoc;
                   