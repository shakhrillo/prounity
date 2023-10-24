import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function AccordionDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/accordion" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Accordion</Typography>
<Typography className="description">The accordion component allows the user to show and hide sections of related content on a page.</Typography>

<Typography className="text-14 mb-32" component="div">An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.</Typography>
<div className="border border-1 p-16 rounded-16 my-12">

<Typography className="text-14 mb-32" component="div">This component is no longer documented in the <a href="https://m2.material.io/">Material Design guidelines</a>, but Material UI will continue to support it.</Typography>
</div>

<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic accordion</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicAccordion.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/accordion/BasicAccordion.tsx').default} 
                    raw={require('!raw-loader!../components/accordion/BasicAccordion.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Controlled accordion</Typography>
<Typography className="text-14 mb-32" component="div">The Accordion component can be controlled or uncontrolled.</Typography>
<div className="border border-1 p-16 rounded-16 my-12">


<ul className="space-y-16">
<li>A component is <strong>controlled</strong> when it&#39;s managed by its parent using props.</li>
<li>A component is <strong>uncontrolled</strong> when it&#39;s managed by its own local state.</li>
</ul>
<Typography className="text-14 mb-32" component="div">Learn more about controlled and uncontrolled components in the <a href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components">React documentation</a>.</Typography>
</div>


<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ControlledAccordions.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/accordion/ControlledAccordions.tsx').default} 
                    raw={require('!raw-loader!../components/accordion/ControlledAccordions.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-14 mb-32" component="div">Here is an example of customizing the component.
You can learn more about this in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedAccordions.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/accordion/CustomizedAccordions.tsx').default} 
                    raw={require('!raw-loader!../components/accordion/CustomizedAccordions.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Performance</Typography>
<Typography className="text-14 mb-32" component="div">The content of Accordions is mounted by default even if the accordion is not expanded.
This default behavior has server-side rendering and SEO in mind.
If you render expensive component trees inside your accordion details or simply render many
accordions it might be a good idea to change this default behavior by enabling the
<code>{`unmountOnExit`}</code> in <code>{`TransitionProps`}</code>:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Accordion TransitionProps={{ unmountOnExit: true }} />
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">As with any performance optimization this is not a silver bullet.
Be sure to identify bottlenecks first and then try out these optimization strategies.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-14 mb-32" component="div">(WAI-ARIA: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">https://www.w3.org/WAI/ARIA/apg/patterns/accordion/</a>)</Typography>
<Typography className="text-14 mb-32" component="div">For optimal accessibility we recommend setting <code>{`id`}</code> and <code>{`aria-controls`}</code> on the
<code>{`AccordionSummary`}</code>. The <code>{`Accordion`}</code> will derive the necessary <code>{`aria-labelledby`}</code>
and <code>{`id`}</code> for the content region of the accordion.</Typography>

                </>
    
                     );
                   }
                   
                   export default AccordionDoc;
                   