import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function CardsDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/cards" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Card</Typography>
<Typography className="description">Cards contain content and actions about a single subject.</Typography>

<Typography className="text-14 mb-32" component="div">Cards are surfaces that display content and actions on a single topic.</Typography>
<Typography className="text-14 mb-32" component="div">They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic card</Typography>
<Typography className="text-14 mb-32" component="div">Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicCard.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/cards/BasicCard.tsx').default} 
                    raw={require('!raw-loader!../components/cards/BasicCard.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Outlined Card</Typography>
<Typography className="text-14 mb-32" component="div">Set <code>{`variant="outlined"`}</code> to render an outlined card.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="OutlinedCard.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/cards/OutlinedCard.tsx').default} 
                    raw={require('!raw-loader!../components/cards/OutlinedCard.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Complex Interaction</Typography>
<Typography className="text-14 mb-32" component="div">On desktop, card content can expand. (Click the downward chevron to view the recipe.)</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="RecipeReviewCard.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/cards/RecipeReviewCard.tsx').default} 
                    raw={require('!raw-loader!../components/cards/RecipeReviewCard.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Media</Typography>
<Typography className="text-14 mb-32" component="div">Example of a card using an image to reinforce the content.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="MediaCard.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/cards/MediaCard.tsx').default} 
                    raw={require('!raw-loader!../components/cards/MediaCard.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">By default, we use the combination of a <code>{`<div>`}</code> element and a <em>background image</em> to display the media. It can be problematic in some situations, for example, you might want to display a video or a responsive image. Use the <code>{`component`}</code> prop for these use cases:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ImgMediaCard.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/cards/ImgMediaCard.tsx').default} 
                    raw={require('!raw-loader!../components/cards/ImgMediaCard.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">:::warning
When <code>{`component="img"`}</code>, CardMedia relies on <code>{`object-fit`}</code> for centering the image. It&#39;s not supported by IE11.
:::</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Primary action</Typography>
<Typography className="text-14 mb-32" component="div">Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a <code>{`CardActionArea`}</code> component.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ActionAreaCard.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/cards/ActionAreaCard.tsx').default} 
                    raw={require('!raw-loader!../components/cards/ActionAreaCard.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">A card can also offer supplemental actions which should stand detached from the main action area in order to avoid event overlap.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="MultiActionAreaCard.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/cards/MultiActionAreaCard.tsx').default} 
                    raw={require('!raw-loader!../components/cards/MultiActionAreaCard.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">UI Controls</Typography>
<Typography className="text-14 mb-32" component="div">Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card.</Typography>
<Typography className="text-14 mb-32" component="div">Here&#39;s an example of a media control card.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="MediaControlCard.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/cards/MediaControlCard.tsx').default} 
                    raw={require('!raw-loader!../components/cards/MediaControlCard.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">🎨 If you are looking for inspiration, you can check <a href="https://mui-treasury.com/components/card/">MUI Treasury&#39;s customization examples</a>.</Typography>

                </>
    
                     );
                   }
                   
                   export default CardsDoc;
                   