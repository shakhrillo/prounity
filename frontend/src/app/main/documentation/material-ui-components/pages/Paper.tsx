import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function PaperDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/paper" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Paper</Typography>
<Typography className="description">In Material Design, the physical properties of paper are translated to the screen. </Typography>

<Typography className="text-14 mb-32" component="div">The background of an application resembles the flat, opaque texture of a sheet of paper, and an application&#39;s behavior mimics paper&#39;s ability to be re-sized, shuffled, and bound together in multiple sheets.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic paper</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimplePaper.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/paper/SimplePaper.tsx').default} 
                    raw={require('!raw-loader!../components/paper/SimplePaper.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Variants</Typography>
<Typography className="text-14 mb-32" component="div">If you need an outlined surface, use the <code>{`variant`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Variants.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/paper/Variants.tsx').default} 
                    raw={require('!raw-loader!../components/paper/Variants.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Elevation</Typography>
<Typography className="text-14 mb-32" component="div">The elevation can be used to establish a hierarchy between other content. In practical terms, the elevation controls the size of the shadow applied to the surface. In dark mode, raising the elevation also makes the surface lighter.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Elevation.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/paper/Elevation.tsx').default} 
                    raw={require('!raw-loader!../components/paper/Elevation.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">The change of shade in dark mode is done by applying a semi-transparent gradient to the <code>{`background-image`}</code> property.
This can lead to confusion when overriding the styles of <code>{`Paper`}</code>, as setting just the <code>{`background-color`}</code> property will not affect the elevation-related shading.
To ignore the shading and set the background color that is not affected by elevation in dark mode, override the <code>{`background`}</code> property (or both <code>{`background-color`}</code> and <code>{`background-image`}</code>).</Typography>

                </>
    
                     );
                   }
                   
                   export default PaperDoc;
                   