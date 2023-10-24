import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function BackdropDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/backdrop" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Backdrop</Typography>
<Typography className="description">The Backdrop component narrows the user's focus to a particular element on the screen.</Typography>

<Typography className="text-14 mb-32" component="div">The Backdrop signals a state change within the application and can be used for creating loaders, dialogs, and more.
In its simplest form, the Backdrop component will add a dimmed layer over your application.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Example</Typography>
<Typography className="text-14 mb-32" component="div">The demo below shows a basic Backdrop with a Circular Progress component in the foreground to indicate a loading state.
After clicking <strong>Show Backdrop</strong>, you can click anywhere on the page to close it.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="SimpleBackdrop.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/backdrop/SimpleBackdrop.tsx').default} 
                    raw={require('!raw-loader!../components/backdrop/SimpleBackdrop.tsx')}
                    /></Typography>

                </>
    
                     );
                   }
                   
                   export default BackdropDoc;
                   