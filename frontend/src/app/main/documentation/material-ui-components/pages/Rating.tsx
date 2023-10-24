import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function RatingDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/rating" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Rating</Typography>
<Typography className="description">Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.</Typography>



<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Basic rating</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="BasicRating.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/rating/BasicRating.tsx').default} 
                    raw={require('!raw-loader!../components/rating/BasicRating.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Rating precision</Typography>
<Typography className="text-14 mb-32" component="div">The rating can display any float number with the <code>{`value`}</code> prop.
Use the <code>{`precision`}</code> prop to define the minimum increment value change allowed.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="HalfRating.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/rating/HalfRating.tsx').default} 
                    raw={require('!raw-loader!../components/rating/HalfRating.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Hover feedback</Typography>
<Typography className="text-14 mb-32" component="div">You can display a label on hover to help the user pick the correct rating value.
The demo uses the <code>{`onChangeActive`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="HoverRating.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/rating/HoverRating.tsx').default} 
                    raw={require('!raw-loader!../components/rating/HoverRating.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Sizes</Typography>
<Typography className="text-14 mb-32" component="div">For larger or smaller ratings use the <code>{`size`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="RatingSize.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/rating/RatingSize.tsx').default} 
                    raw={require('!raw-loader!../components/rating/RatingSize.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-14 mb-32" component="div">Here are some examples of customizing the component.
You can learn more about this in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedRating.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/rating/CustomizedRating.tsx').default} 
                    raw={require('!raw-loader!../components/rating/CustomizedRating.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Radio group</Typography>
<Typography className="text-14 mb-32" component="div">The rating is implemented with a radio group, set <code>{`highlightSelectedOnly`}</code> to restore the natural behavior.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="RadioGroupRating.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/rating/RadioGroupRating.tsx').default} 
                    raw={require('!raw-loader!../components/rating/RadioGroupRating.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-14 mb-32" component="div">(<a href="https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating">WAI tutorial</a>)</Typography>
<Typography className="text-14 mb-32" component="div">The accessibility of this component relies on:</Typography>
<ul className="space-y-16">
<li>A radio group with its fields visually hidden.
It contains six radio buttons, one for each star, and another for 0 stars that is checked by default. Be sure to provide a value for the <code>{`name`}</code> prop that is unique to the parent form.</li>
<li>Labels for the radio buttons containing actual text (&quot;1 Star&quot;, &quot;2 Stars&quot;, …).
Be sure to provide a suitable function to the <code>{`getLabelText`}</code> prop when the page is in a language other than English. You can use the <a href="https://mui.com/material-ui/guides/localization/">included locales</a>, or provide your own.</li>
<li>A visually distinct appearance for the rating icons.
By default, the rating component uses both a difference of color and shape (filled and empty icons) to indicate the value. In the event that you are using color as the only means to indicate the value, the information should also be also displayed as text, as in this demo. This is important to match <a href="https://www.w3.org/TR/WCAG21/#use-of-color">success Criterion 1.4.1</a> of WCAG2.1.</li>
</ul>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="TextRating.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/rating/TextRating.tsx').default} 
                    raw={require('!raw-loader!../components/rating/TextRating.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">ARIA</Typography>
<Typography className="text-14 mb-32" component="div">The read only rating has a role of &quot;img&quot;, and an aria-label that describes the displayed rating.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Keyboard</Typography>
<Typography className="text-14 mb-32" component="div">Because the rating component uses radio buttons, keyboard interaction follows the native browser behavior. Tab will focus the current rating, and cursor keys control the selected rating.</Typography>
<Typography className="text-14 mb-32" component="div">The read only rating is not focusable.</Typography>

                </>
    
                     );
                   }
                   
                   export default RatingDoc;
                   