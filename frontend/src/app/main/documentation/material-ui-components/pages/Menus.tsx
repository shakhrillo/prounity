import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function MenusDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/menus" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Menu</Typography>
<Typography className="description">Menus display a list of choices on temporary surfaces.</Typography>

<Typography className="text-14 mb-32" component="div">A menu displays a list of choices on a temporary surface. It appears when the user interacts with a button, or other control.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic menu</Typography>
<Typography className="text-14 mb-32" component="div">A basic menu opens over the anchor element by default (this option can be <a href="#menu-positioning">changed</a> via props). When close to a screen edge, a basic menu vertically realigns to make sure that all menu items are completely visible.</Typography>
<Typography className="text-14 mb-32" component="div">Choosing an option should immediately ideally commit the option and close the menu.</Typography>
<Typography className="text-14 mb-32" component="div"><strong>Disambiguation</strong>: In contrast to simple menus, simple dialogs can present additional detail related to the options available for a list item or provide navigational or orthogonal actions related to the primary task. Although they can display the same content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user&#39;s current context.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicMenu.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/BasicMenu.tsx').default} 
                    raw={require('!raw-loader!../components/menus/BasicMenu.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Icon menu</Typography>
<Typography className="text-14 mb-32" component="div">In desktop viewport, padding is increased to give more space to the menu.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="IconMenu.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/IconMenu.tsx').default} 
                    raw={require('!raw-loader!../components/menus/IconMenu.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Dense menu</Typography>
<Typography className="text-14 mb-32" component="div">For the menu that has long list and long text, you can use the <code>{`dense`}</code> prop to reduce the padding and text size.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DenseMenu.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/DenseMenu.tsx').default} 
                    raw={require('!raw-loader!../components/menus/DenseMenu.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Selected menu</Typography>
<Typography className="text-14 mb-32" component="div">If used for item selection, when opened, simple menus places the initial focus on the selected menu item.
The currently selected menu item is set using the <code>{`selected`}</code> prop (from <a href="/material-ui/api/list-item/">ListItem</a>).
To use a selected menu item without impacting the initial focus, set the <code>{`variant`}</code> prop to &quot;menu&quot;.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimpleListMenu.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/SimpleListMenu.tsx').default} 
                    raw={require('!raw-loader!../components/menus/SimpleListMenu.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Positioned menu</Typography>
<Typography className="text-14 mb-32" component="div">Because the <code>{`Menu`}</code> component uses the <code>{`Popover`}</code> component to position itself, you can use the same <a href="/material-ui/react-popover/#anchor-playground">positioning props</a> to position it.
For instance, you can display the menu on top of the anchor:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="PositionedMenu.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/PositionedMenu.tsx').default} 
                    raw={require('!raw-loader!../components/menus/PositionedMenu.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">MenuList composition</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`Menu`}</code> component uses the <code>{`Popover`}</code> component internally.
However, you might want to use a different positioning strategy, or not blocking the scroll.
For answering those needs, we expose a <code>{`MenuList`}</code> component that you can compose, with <code>{`Popper`}</code> in this example.</Typography>
<Typography className="text-14 mb-32" component="div">The primary responsibility of the <code>{`MenuList`}</code> component is to handle the focus.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="MenuListComposition.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/MenuListComposition.tsx').default} 
                    raw={require('!raw-loader!../components/menus/MenuListComposition.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Account menu</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`Menu`}</code> content can be mixed with other components like <code>{`Avatar`}</code>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="AccountMenu.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/AccountMenu.tsx').default} 
                    raw={require('!raw-loader!../components/menus/AccountMenu.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-14 mb-32" component="div">Here is an example of customizing the component.
You can learn more about this in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedMenus.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/CustomizedMenus.tsx').default} 
                    raw={require('!raw-loader!../components/menus/CustomizedMenus.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`MenuItem`}</code> is a wrapper around <code>{`ListItem`}</code> with some additional styles.
You can use the same list composition features with the <code>{`MenuItem`}</code> component:</Typography>
<Typography className="text-14 mb-32" component="div">🎨 If you are looking for inspiration, you can check <a href="https://mui-treasury.com/styles/menu/">MUI Treasury&#39;s customization examples</a>.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Max height menu</Typography>
<Typography className="text-14 mb-32" component="div">If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="LongMenu.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/LongMenu.tsx').default} 
                    raw={require('!raw-loader!../components/menus/LongMenu.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Limitations</Typography>
<Typography className="text-14 mb-32" component="div">There is <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=327437">a flexbox bug</a> that prevents <code>{`text-overflow: ellipsis`}</code> from working in a flexbox layout.
You can use the <code>{`Typography`}</code> component with <code>{`noWrap`}</code> to workaround this issue:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TypographyMenu.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/TypographyMenu.tsx').default} 
                    raw={require('!raw-loader!../components/menus/TypographyMenu.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Change transition</Typography>
<Typography className="text-14 mb-32" component="div">Use a different transition.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FadeMenu.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/FadeMenu.tsx').default} 
                    raw={require('!raw-loader!../components/menus/FadeMenu.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Context menu</Typography>
<Typography className="text-14 mb-32" component="div">Here is an example of a context menu. (Right click to open.)</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ContextMenu.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/ContextMenu.tsx').default} 
                    raw={require('!raw-loader!../components/menus/ContextMenu.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Complementary projects</Typography>
<Typography className="text-14 mb-32" component="div">For more advanced use cases you might be able to take advantage of:</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">material-ui-popup-state</Typography>
<Typography className="text-14 mb-32" component="div"> src="https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star" alt="stars/>
 src="https://img.shields.io/npm/dm/material-ui-popup-state.svg" alt="npm downloads/></Typography>
<Typography className="text-14 mb-32" component="div">The package <a href="https://github.com/jcoreio/material-ui-popup-state"><code>{`material-ui-popup-state`}</code></a> that takes care of menu state for you in most cases.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="MenuPopupState.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/menus/MenuPopupState.tsx').default} 
                    raw={require('!raw-loader!../components/menus/MenuPopupState.tsx')}
                    /></Typography>

                </>
    
                     );
                   }
                   
                   export default MenusDoc;
                   