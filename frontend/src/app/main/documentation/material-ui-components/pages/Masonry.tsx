import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function MasonryDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/masonry" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Masonry</Typography>
<Typography className="description">Masonry lays out contents of varying dimensions as blocks of the same width and different height with configurable gaps.</Typography>

<Typography className="text-14 mb-32" component="div">Masonry maintains a list of content blocks with a consistent width but different height.
The contents are ordered by row.
If a row is already filled with the specified number of columns, the next item starts another row, and it is added to the shortest column in order to optimize the use of space.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic masonry</Typography>
<Typography className="text-14 mb-32" component="div">A simple example of a <code>{`Masonry`}</code>. <code>{`Masonry`}</code> is a container for one or more items. It can receive any element including <code>{`<div />`}</code> and <code>{`<img />`}</code>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicMasonry.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/masonry/BasicMasonry.tsx').default} 
                    raw={require('!raw-loader!../components/masonry/BasicMasonry.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Image masonry</Typography>
<Typography className="text-14 mb-32" component="div">This example demonstrates the use of <code>{`Masonry`}</code> for images. <code>{`Masonry`}</code> orders its children by row.
If you&#39;d like to order images by column, check out <a href="/material-ui/react-image-list/#masonry-image-list">ImageList</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ImageMasonry.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/masonry/ImageMasonry.tsx').default} 
                    raw={require('!raw-loader!../components/masonry/ImageMasonry.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Items with variable height</Typography>
<Typography className="text-14 mb-32" component="div">This example demonstrates the use of <code>{`Masonry`}</code> for items with variable height.
Items can move to other columns in order to abide by the rule that items are always added to the shortest column and hence optimize the use of space.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="MasonryWithVariableHeightItems.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/masonry/MasonryWithVariableHeightItems.tsx').default} 
                    raw={require('!raw-loader!../components/masonry/MasonryWithVariableHeightItems.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Columns</Typography>
<Typography className="text-14 mb-32" component="div">This example demonstrates the use of the <code>{`columns`}</code> to configure the number of columns of a <code>{`Masonry`}</code>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FixedColumns.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/masonry/FixedColumns.tsx').default} 
                    raw={require('!raw-loader!../components/masonry/FixedColumns.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div"><code>{`columns`}</code> accepts responsive values:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ResponsiveColumns.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/masonry/ResponsiveColumns.tsx').default} 
                    raw={require('!raw-loader!../components/masonry/ResponsiveColumns.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Spacing</Typography>
<Typography className="text-14 mb-32" component="div">This example demonstrates the use of the <code>{`spacing`}</code> to configure the spacing between items.
It is important to note that the value provided to the <code>{`spacing`}</code> prop is multiplied by the theme&#39;s spacing field.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FixedSpacing.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/masonry/FixedSpacing.tsx').default} 
                    raw={require('!raw-loader!../components/masonry/FixedSpacing.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div"><code>{`spacing`}</code> accepts responsive values:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ResponsiveSpacing.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/masonry/ResponsiveSpacing.tsx').default} 
                    raw={require('!raw-loader!../components/masonry/ResponsiveSpacing.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Server-side rendering</Typography>
<Typography className="text-14 mb-32" component="div">This example demonstrates the use of the <code>{`defaultHeight`}</code>, <code>{`defaultColumns`}</code> and <code>{`defaultSpacing`}</code>, which are used to
support server-side rendering.</Typography>
<div className="border border-1 p-16 rounded-16 my-12">

<Typography className="text-14 mb-32" component="div"><code>{`defaultHeight`}</code> should be large enough to render all rows. Also, it is worth mentioning that items are not added to the shortest column in case of server-side rendering.</Typography>
</div>


<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SSRMasonry.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/masonry/SSRMasonry.tsx').default} 
                    raw={require('!raw-loader!../components/masonry/SSRMasonry.tsx')}
                    /></Typography>

                </>
    
                     );
                   }
                   
                   export default MasonryDoc;
                   