import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function ChipsDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/chips" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Chip</Typography>
<Typography className="description">Chips are compact elements that represent an input, attribute, or action.</Typography>

<Typography className="text-14 mb-32" component="div">Chips allow users to enter information, make selections, filter content, or trigger actions.</Typography>
<Typography className="text-14 mb-32" component="div">While included here as a standalone component, the most common use will
be in some form of input, so some of the behavior demonstrated here is
not shown in context.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic chip</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`Chip`}</code> component supports outlined and filled styling.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/BasicChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/BasicChips.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Chip actions</Typography>
<Typography className="text-14 mb-32" component="div">You can use the following actions.</Typography>
<ul className="space-y-16">
<li>Chips with the <code>{`onClick`}</code> prop defined change appearance on focus, hover, and click.</li>
<li>Chips with the <code>{`onDelete`}</code> prop defined will display a delete icon which changes appearance on hover.</li>
</ul>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Clickable</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ClickableChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/ClickableChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/ClickableChips.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Deletable</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DeletableChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/DeletableChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/DeletableChips.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Clickable and deletable</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ClickableAndDeletableChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/ClickableAndDeletableChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/ClickableAndDeletableChips.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Clickable link</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ClickableLinkChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/ClickableLinkChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/ClickableLinkChips.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Custom delete icon</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomDeleteIconChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/CustomDeleteIconChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/CustomDeleteIconChips.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Chip adornments</Typography>
<Typography className="text-14 mb-32" component="div">You can add ornaments to the beginning of the component.</Typography>
<Typography className="text-14 mb-32" component="div">Use the <code>{`avatar`}</code> prop to add an avatar or use the <code>{`icon`}</code> prop to add an icon.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Avatar chip</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="AvatarChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/AvatarChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/AvatarChips.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Icon chip</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="IconChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/IconChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/IconChips.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Color chip</Typography>
<Typography className="text-14 mb-32" component="div">You can use the <code>{`color`}</code> prop to define a color from theme palette.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ColorChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/ColorChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/ColorChips.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Sizes chip</Typography>
<Typography className="text-14 mb-32" component="div">You can use the <code>{`size`}</code> prop to define a small Chip.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SizesChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/SizesChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/SizesChips.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Multiline chip</Typography>
<Typography className="text-14 mb-32" component="div">By default, Chips displays labels only in a single line.
To have them support multiline content, use the <code>{`sx`}</code> prop to add <code>{`height:auto`}</code> to the Chip component, and <code>{`whiteSpace: normal`}</code> to the <code>{`label`}</code> styles.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="MultilineChips.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/MultilineChips.tsx').default} 
                    raw={require('!raw-loader!../components/chips/MultilineChips.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Chip array</Typography>
<Typography className="text-14 mb-32" component="div">An example of rendering multiple chips from an array of values.
Deleting a chip removes it from the array. Note that since no
<code>{`onClick`}</code> prop is defined, the <code>{`Chip`}</code> can be focused, but does not
gain depth while clicked or touched.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ChipsArray.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/ChipsArray.tsx').default} 
                    raw={require('!raw-loader!../components/chips/ChipsArray.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Chip playground</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ChipsPlayground.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/chips/ChipsPlayground.js').default} 
                    raw={require('!raw-loader!../components/chips/ChipsPlayground.js')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-14 mb-32" component="div">If the Chip is deletable or clickable then it is a button in tab order. When the Chip is focused (e.g. when tabbing) releasing (<code>{`keyup`}</code> event) <code>{`Backspace`}</code> or <code>{`Delete`}</code> will call the <code>{`onDelete`}</code> handler while releasing <code>{`Escape`}</code> will blur the Chip.</Typography>

                </>
    
                     );
                   }
                   
                   export default ChipsDoc;
                   