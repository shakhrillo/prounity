import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function AvatarsDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/avatars" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Avatar</Typography>
<Typography className="description">Avatars are found throughout material design with uses in everything from tables to dialog menus.</Typography>



<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Image avatars</Typography>
<Typography className="text-14 mb-32" component="div">Image avatars can be created by passing standard <code>{`img`}</code> props <code>{`src`}</code> or <code>{`srcSet`}</code> to the component.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ImageAvatars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/avatars/ImageAvatars.tsx').default} 
                    raw={require('!raw-loader!../components/avatars/ImageAvatars.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Letter avatars</Typography>
<Typography className="text-14 mb-32" component="div">Avatars containing simple characters can be created by passing a string as <code>{`children`}</code>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="LetterAvatars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/avatars/LetterAvatars.tsx').default} 
                    raw={require('!raw-loader!../components/avatars/LetterAvatars.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">You can use different background colors for the avatar.
The following demo generates the color based on the name of the person.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BackgroundLetterAvatars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/avatars/BackgroundLetterAvatars.tsx').default} 
                    raw={require('!raw-loader!../components/avatars/BackgroundLetterAvatars.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Sizes</Typography>
<Typography className="text-14 mb-32" component="div">You can change the size of the avatar with the <code>{`height`}</code> and <code>{`width`}</code> CSS properties.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SizeAvatars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/avatars/SizeAvatars.tsx').default} 
                    raw={require('!raw-loader!../components/avatars/SizeAvatars.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Icon avatars</Typography>
<Typography className="text-14 mb-32" component="div">Icon avatars are created by passing an icon as <code>{`children`}</code>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="IconAvatars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/avatars/IconAvatars.tsx').default} 
                    raw={require('!raw-loader!../components/avatars/IconAvatars.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Variants</Typography>
<Typography className="text-14 mb-32" component="div">If you need square or rounded avatars, use the <code>{`variant`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="VariantAvatars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/avatars/VariantAvatars.tsx').default} 
                    raw={require('!raw-loader!../components/avatars/VariantAvatars.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Fallbacks</Typography>
<Typography className="text-14 mb-32" component="div">If there is an error loading the avatar image, the component falls back to an alternative in the following order:</Typography>
<ul className="space-y-16">
<li>the provided children</li>
<li>the first letter of the <code>{`alt`}</code> text</li>
<li>a generic avatar icon</li>
</ul>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FallbackAvatars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/avatars/FallbackAvatars.tsx').default} 
                    raw={require('!raw-loader!../components/avatars/FallbackAvatars.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Grouped</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`AvatarGroup`}</code> renders its children as a stack. Use the <code>{`max`}</code> prop to limit the number of avatars.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="GroupAvatars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/avatars/GroupAvatars.tsx').default} 
                    raw={require('!raw-loader!../components/avatars/GroupAvatars.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Total avatars</Typography>
<Typography className="text-14 mb-32" component="div">If you need to control the total number of avatars not shown, you can use the <code>{`total`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TotalAvatars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/avatars/TotalAvatars.tsx').default} 
                    raw={require('!raw-loader!../components/avatars/TotalAvatars.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">With badge</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BadgeAvatars.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/avatars/BadgeAvatars.tsx').default} 
                    raw={require('!raw-loader!../components/avatars/BadgeAvatars.tsx')}
                    /></Typography>

                </>
    
                     );
                   }
                   
                   export default AvatarsDoc;
                   