import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function BadgesDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/badges" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Badge</Typography>
<Typography className="description">Badge generates a small badge to the top-right of its child(ren).</Typography>



<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic badge</Typography>
<Typography className="text-14 mb-32" component="div">Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimpleBadge.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/badges/SimpleBadge.tsx').default} 
                    raw={require('!raw-loader!../components/badges/SimpleBadge.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Color</Typography>
<Typography className="text-14 mb-32" component="div">Use <code>{`color`}</code> prop to apply theme palette to component.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ColorBadge.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/badges/ColorBadge.tsx').default} 
                    raw={require('!raw-loader!../components/badges/ColorBadge.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-14 mb-32" component="div">Here is an example of customizing the component.
You can learn more about this in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedBadges.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/badges/CustomizedBadges.tsx').default} 
                    raw={require('!raw-loader!../components/badges/CustomizedBadges.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Badge visibility</Typography>
<Typography className="text-14 mb-32" component="div">The visibility of badges can be controlled using the <code>{`invisible`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BadgeVisibility.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/badges/BadgeVisibility.tsx').default} 
                    raw={require('!raw-loader!../components/badges/BadgeVisibility.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">The badge hides automatically when <code>{`badgeContent`}</code> is zero. You can override this with the <code>{`showZero`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ShowZeroBadge.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/badges/ShowZeroBadge.tsx').default} 
                    raw={require('!raw-loader!../components/badges/ShowZeroBadge.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Maximum value</Typography>
<Typography className="text-14 mb-32" component="div">You can use the <code>{`max`}</code> prop to cap the value of the badge content.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BadgeMax.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/badges/BadgeMax.tsx').default} 
                    raw={require('!raw-loader!../components/badges/BadgeMax.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Dot badge</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`dot`}</code> prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DotBadge.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/badges/DotBadge.tsx').default} 
                    raw={require('!raw-loader!../components/badges/DotBadge.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Badge overlap</Typography>
<Typography className="text-14 mb-32" component="div">You can use the <code>{`overlap`}</code> prop to place the badge relative to the corner of the wrapped element.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BadgeOverlap.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/badges/BadgeOverlap.tsx').default} 
                    raw={require('!raw-loader!../components/badges/BadgeOverlap.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Badge alignment</Typography>
<Typography className="text-14 mb-32" component="div">You can use the <code>{`anchorOrigin`}</code> prop to move the badge to any corner of the wrapped element.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BadgeAlignment.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/badges/BadgeAlignment.js').default} 
                    raw={require('!raw-loader!../components/badges/BadgeAlignment.js')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-14 mb-32" component="div">You can&#39;t rely on the content of the badge to be announced correctly.
You should provide a full description, for instance, with <code>{`aria-label`}</code>:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="AccessibleBadges.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/badges/AccessibleBadges.tsx').default} 
                    raw={require('!raw-loader!../components/badges/AccessibleBadges.tsx')}
                    /></Typography>

                </>
    
                     );
                   }
                   
                   export default BadgesDoc;
                   