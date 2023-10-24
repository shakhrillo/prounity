import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function ProgressDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/progress" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Progress</Typography>
<Typography className="description">Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.</Typography>

<Typography className="text-14 mb-32" component="div">Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.</Typography>
<ul className="space-y-16">
<li><strong>Determinate</strong> indicators display how long an operation will take.</li>
<li><strong>Indeterminate</strong> indicators visualize an unspecified wait time.</li>
</ul>
<Typography className="text-14 mb-32" component="div">The animations of the components rely on CSS as much as possible to work even before the JavaScript is loaded.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Circular</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Circular indeterminate</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CircularIndeterminate.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/CircularIndeterminate.tsx').default} 
                    raw={require('!raw-loader!../components/progress/CircularIndeterminate.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Circular color</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CircularColor.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/CircularColor.tsx').default} 
                    raw={require('!raw-loader!../components/progress/CircularColor.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Circular determinate</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CircularDeterminate.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/CircularDeterminate.tsx').default} 
                    raw={require('!raw-loader!../components/progress/CircularDeterminate.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Interactive integration</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CircularIntegration.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/CircularIntegration.tsx').default} 
                    raw={require('!raw-loader!../components/progress/CircularIntegration.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Circular with label</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CircularWithValueLabel.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/CircularWithValueLabel.tsx').default} 
                    raw={require('!raw-loader!../components/progress/CircularWithValueLabel.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Linear</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Linear indeterminate</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="LinearIndeterminate.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/LinearIndeterminate.tsx').default} 
                    raw={require('!raw-loader!../components/progress/LinearIndeterminate.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Linear color</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="LinearColor.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/LinearColor.tsx').default} 
                    raw={require('!raw-loader!../components/progress/LinearColor.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Linear determinate</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="LinearDeterminate.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/LinearDeterminate.tsx').default} 
                    raw={require('!raw-loader!../components/progress/LinearDeterminate.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Linear buffer</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="LinearBuffer.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/LinearBuffer.tsx').default} 
                    raw={require('!raw-loader!../components/progress/LinearBuffer.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Linear with label</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="LinearWithValueLabel.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/LinearWithValueLabel.tsx').default} 
                    raw={require('!raw-loader!../components/progress/LinearWithValueLabel.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Non-standard ranges</Typography>
<Typography className="text-14 mb-32" component="div">The progress components accept a value in the range 0 - 100. This simplifies things for screen-reader users, where these are the default min / max values. Sometimes, however, you might be working with a data source where the values fall outside this range. Here&#39;s how you can easily transform a value in any range to a scale of 0 - 100:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
// MIN = Minimum expected value
// MAX = Maximum expected value
// Function to normalise the values (MIN / MAX could be integrated)
const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

// Example component that utilizes the \`normalise\` function at the point of render.
function Progress(props) {
  return (
    <React.Fragment>
      <CircularProgress variant="determinate" value={normalise(props.value)} />
      <LinearProgress variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
  );
}
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-14 mb-32" component="div">Here are some examples of customizing the component.
You can learn more about this in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedProgressBars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/CustomizedProgressBars.tsx').default} 
                    raw={require('!raw-loader!../components/progress/CustomizedProgressBars.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Delaying appearance</Typography>
<Typography className="text-14 mb-32" component="div">There are <a href="https://www.nngroup.com/articles/response-times-3-important-limits/">3 important limits</a> to know around response time.
The ripple effect of the <code>{`ButtonBase`}</code> component ensures that the user feels that the system is reacting instantaneously.
Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second.
After 1.0 second, you can display a loader to keep user&#39;s flow of thought uninterrupted.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DelayingAppearance.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/DelayingAppearance.tsx').default} 
                    raw={require('!raw-loader!../components/progress/DelayingAppearance.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Limitations</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">High CPU load</Typography>
<Typography className="text-14 mb-32" component="div">Under heavy load, you might lose the stroke dash animation or see random <code>{`CircularProgress`}</code> ring widths.
You should run processor intensive operations in a web worker or by batch in order not to block the main rendering thread.</Typography>
<Typography className="text-14 mb-32" component="div"> src="/material-ui-static/images/progress/heavy-load.gif" alt="heavy load/></Typography>
<Typography className="text-14 mb-32" component="div">When it&#39;s not possible, you can leverage the <code>{`disableShrink`}</code> prop to mitigate the issue.
See <a href="https://github.com/mui/material-ui/issues/10327">this issue</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CircularUnderLoad.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/progress/CircularUnderLoad.tsx').default} 
                    raw={require('!raw-loader!../components/progress/CircularUnderLoad.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">High frequency updates</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`LinearProgress`}</code> uses a transition on the CSS transform property to provide a smooth update between different values.
The default transition duration is 200ms.
In the event a parent component updates the <code>{`value`}</code> prop too quickly, you will at least experience a 200ms delay between the re-render and the progress bar fully updated.</Typography>
<Typography className="text-14 mb-32" component="div">If you need to perform 30 re-renders per second or more, we recommend disabling the transition:</Typography>

<FuseHighlight component="pre" className="language-css">
{` 
.MuiLinearProgress-bar {
  transition: none;
}
`}
</FuseHighlight>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">IE 11</Typography>
<Typography className="text-14 mb-32" component="div">The circular progress component animation on IE 11 is degraded.
The stroke dash animation is not working (equivalent to <code>{`disableShrink`}</code>) and the circular animation wobbles.
You can solve the latter with:</Typography>

<FuseHighlight component="pre" className="language-css">
{` 
.MuiCircularProgress-indeterminate {
  animation: circular-rotate 1.4s linear infinite;
}

@keyframes circular-rotate {
  0% {
    transform: rotate(0deg);
    /* Fix IE11 wobbly */
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
}
`}
</FuseHighlight>

                </>
    
                     );
                   }
                   
                   export default ProgressDoc;
                   