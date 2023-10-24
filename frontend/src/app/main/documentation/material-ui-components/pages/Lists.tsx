import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function ListsDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/lists" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Lists</Typography>
<Typography className="description">Lists are continuous, vertical indexes of text or images.</Typography>

<Typography className="text-14 mb-32" component="div">Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic List</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/BasicList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/BasicList.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">The last item of the previous demo shows how you can render a link:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemButton>
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">You can find a <a href="/material-ui/guides/routing/#list">demo with React Router following this section</a> of the documentation.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Nested List</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="NestedList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/NestedList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/NestedList.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Folder List</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FolderList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/FolderList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/FolderList.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Interactive</Typography>
<Typography className="text-14 mb-32" component="div">Below is an interactive demo that lets you explore the visual results of the different settings:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="InteractiveList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/InteractiveList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/InteractiveList.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Selected ListItem</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SelectedListItem.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/SelectedListItem.tsx').default} 
                    raw={require('!raw-loader!../components/lists/SelectedListItem.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Align list items</Typography>
<Typography className="text-14 mb-32" component="div">When displaying three lines or more, the avatar is not aligned at the top.
You should set the <code>{`alignItems="flex-start"`}</code> prop to align the avatar at the top, following the Material Design guidelines:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="AlignItemsList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/AlignItemsList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/AlignItemsList.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">List Controls</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Checkbox</Typography>
<Typography className="text-14 mb-32" component="div">A checkbox can either be a primary action or a secondary action.</Typography>
<Typography className="text-14 mb-32" component="div">The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CheckboxList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/CheckboxList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/CheckboxList.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">The checkbox is the secondary action for the list item and a separate target.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CheckboxListSecondary.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/CheckboxListSecondary.tsx').default} 
                    raw={require('!raw-loader!../components/lists/CheckboxListSecondary.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Switch</Typography>
<Typography className="text-14 mb-32" component="div">The switch is the secondary action and a separate target.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SwitchListSecondary.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/SwitchListSecondary.tsx').default} 
                    raw={require('!raw-loader!../components/lists/SwitchListSecondary.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Sticky subheader</Typography>
<Typography className="text-14 mb-32" component="div">Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader.
This feature relies on CSS sticky positioning.
(⚠️ no IE 11 support)</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PinnedSubheaderList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/PinnedSubheaderList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/PinnedSubheaderList.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Inset List Item</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`inset`}</code> prop enables a list item that does not have a leading icon or avatar to align correctly with items that do.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="InsetList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/InsetList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/InsetList.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Gutterless list</Typography>
<Typography className="text-14 mb-32" component="div">When rendering a list within a component that defines its own gutters, <code>{`ListItem`}</code> gutters can be disabled with <code>{`disableGutters`}</code>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="GutterlessList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/GutterlessList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/GutterlessList.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Virtualized List</Typography>
<Typography className="text-14 mb-32" component="div">In the following example, we demonstrate how to use <a href="https://github.com/bvaughn/react-window">react-window</a> with the <code>{`List`}</code> component.
It renders 200 rows and can easily handle more.
Virtualization helps with performance issues.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="VirtualizedList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/VirtualizedList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/VirtualizedList.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">The use of <a href="https://github.com/bvaughn/react-window">react-window</a> when possible is encouraged.
If this library doesn&#39;t cover your use case, you should consider using alternatives like <a href="https://github.com/petyosi/react-virtuoso">react-virtuoso</a>.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-14 mb-32" component="div">Here are some examples of customizing the component.
You can learn more about this in the
<a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedList.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/lists/CustomizedList.tsx').default} 
                    raw={require('!raw-loader!../components/lists/CustomizedList.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">🎨 If you are looking for inspiration, you can check <a href="https://mui-treasury.com/styles/list-item/">MUI Treasury&#39;s customization examples</a>.</Typography>

                </>
    
                     );
                   }
                   
                   export default ListsDoc;
                   