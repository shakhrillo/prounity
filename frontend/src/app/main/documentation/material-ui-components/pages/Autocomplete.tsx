import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
                   import Button from '@mui/material/Button';
                   import Icon from '@mui/material/Icon';
                   import Typography from '@mui/material/Typography';
				   import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
                  
                   function AutocompleteDoc(props) {
                     return (
                       
                <>
					<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
					  <DocumentationPageBreadcrumb />
					  <Button 
							className="normal-case"
							variant="contained"
                            color="secondary"
							component="a" 
							href="https://mui.com/components/autocomplete" 
							target="_blank"
							role="button"
							size="small"
							startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}
							>
							Reference
						</Button>
					</div>
                     <Typography className="text-32 my-16 font-700" component="h1">Autocomplete</Typography>
<Typography className="description">The autocomplete is a normal text input enhanced by a panel of suggested options.</Typography>

<Typography className="text-14 mb-32" component="div">The widget is useful for setting the value of a single-line textbox in one of two types of scenarios:</Typography>
<ol>
<li>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name: <a href="#combo-box">combo box</a>.</li>
<li>The textbox may contain any arbitrary value, but it is advantageous to suggest possible values to the user, e.g., a search field may suggest similar or previous searches to save the user time: <a href="#free-solo">free solo</a>.</li>
</ol>
<Typography className="text-14 mb-32" component="div">It&#39;s meant to be an improved version of the &quot;react-select&quot; and &quot;downshift&quot; packages.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Combo box</Typography>
<Typography className="text-14 mb-32" component="div">The value must be chosen from a predefined set of allowed values.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ComboBox.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/ComboBox.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/ComboBox.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Options structure</Typography>
<Typography className="text-14 mb-32" component="div">By default, the component accepts the following options structures:</Typography>

<FuseHighlight component="pre" className="language-ts">
{` 
interface AutocompleteOption {
  label: string;
}
// or
type AutocompleteOption = string;
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">for instance:</Typography>

<FuseHighlight component="pre" className="language-js">
{` 
const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];
// or
const options = ['The Godfather', 'Pulp Fiction'];
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">However, you can use different structures by providing a <code>{`getOptionLabel`}</code> prop.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Playground</Typography>
<Typography className="text-14 mb-32" component="div">Each of the following examples demonstrates one feature of the Autocomplete component.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Playground.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/Playground.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/Playground.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Country select</Typography>
<Typography className="text-14 mb-32" component="div">Choose one of the 248 countries.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CountrySelect.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/CountrySelect.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/CountrySelect.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Controlled states</Typography>
<Typography className="text-14 mb-32" component="div">The component has two states that can be controlled:</Typography>
<ol>
<li>the &quot;value&quot; state with the <code>{`value`}</code>/<code>{`onChange`}</code> props combination. This state represents the value selected by the user, for instance when pressing <kbd className="key">Enter</kbd>.</li>
<li>the &quot;input value&quot; state with the <code>{`inputValue`}</code>/<code>{`onInputChange`}</code> props combination. This state represents the value displayed in the textbox.</li>
</ol>
<Typography className="text-14 mb-32" component="div">These two states are isolated, and should be controlled independently.</Typography>
<div className="border border-1 p-16 rounded-16 my-12">


<ul className="space-y-16">
<li>A component is <strong>controlled</strong> when it&#39;s managed by its parent using props.</li>
<li>A component is <strong>uncontrolled</strong> when it&#39;s managed by its own local state.</li>
</ul>
<Typography className="text-14 mb-32" component="div">Learn more about controlled and uncontrolled components in the <a href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components">React documentation</a>.</Typography>
</div>


<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="ControllableStates.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/ControllableStates.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/ControllableStates.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Free solo</Typography>
<Typography className="text-14 mb-32" component="div">Set <code>{`freeSolo`}</code> to true so the textbox can contain any arbitrary value.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Search input</Typography>
<Typography className="text-14 mb-32" component="div">The prop is designed to cover the primary use case of a <strong>search input</strong> with suggestions, e.g. Google search or react-autowhatever.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FreeSolo.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/FreeSolo.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/FreeSolo.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">:::warning
Be careful when using the free solo mode with non-string options, as it may cause type mismatch.</Typography>
<Typography className="text-14 mb-32" component="div">The value created by typing into the textbox is always a string, regardless of the type of the options.
:::</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Creatable</Typography>
<Typography className="text-14 mb-32" component="div">If you intend to use this mode for a <a href="#combo-box">combo box</a> like experience (an enhanced version of a select element) we recommend setting:</Typography>
<ul className="space-y-16">
<li><code>{`selectOnFocus`}</code> to help the user clear the selected value.</li>
<li><code>{`clearOnBlur`}</code> to help the user enter a new value.</li>
<li><code>{`handleHomeEndKeys`}</code> to move focus inside the popup with the <kbd className="key">Home</kbd> and <kbd className="key">End</kbd> keys.</li>
<li>A last option, for instance: <code>{`Add "YOUR SEARCH"`}</code>.</li>
</ul>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FreeSoloCreateOption.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/FreeSoloCreateOption.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/FreeSoloCreateOption.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">You could also display a dialog when the user wants to add a new value.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FreeSoloCreateOptionDialog.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/FreeSoloCreateOptionDialog.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/FreeSoloCreateOptionDialog.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Grouped</Typography>
<Typography className="text-14 mb-32" component="div">You can group the options with the <code>{`groupBy`}</code> prop.
If you do so, make sure that the options are also sorted with the same dimension that they are grouped by,
otherwise, you will notice duplicate headers.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Grouped.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/Grouped.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/Grouped.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">To control how the groups are rendered, provide a custom <code>{`renderGroup`}</code> prop.
This is a function that accepts an object with two fields:</Typography>
<ul className="space-y-16">
<li><code>{`group`}</code>—a string representing a group name</li>
<li><code>{`children`}</code>—a collection of list items that belong to the group</li>
</ul>
<Typography className="text-14 mb-32" component="div">The following demo shows how to use this prop to define custom markup and override the styles of the default groups:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="RenderGroup.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/RenderGroup.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/RenderGroup.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Disabled options</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="DisabledOptions.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/DisabledOptions.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/DisabledOptions.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2"><code>{`useAutocomplete`}</code></Typography>
<Typography className="text-14 mb-32" component="div">For advanced customization use cases, a headless <code>{`useAutocomplete()`}</code> hook is exposed.
It accepts almost the same options as the Autocomplete component minus all the props
related to the rendering of JSX.
The Autocomplete component is built on this hook.</Typography>

<FuseHighlight component="pre" className="language-tsx">
{` 
import useAutocomplete from '@mui/base/useAutocomplete';
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div">The <code>{`useAutocomplete`}</code> hook is also reexported from @mui/material for convenience and backward compatibility.</Typography>

<FuseHighlight component="pre" className="language-tsx">
{` 
import useAutocomplete from '@mui/material/useAutocomplete';
`}
</FuseHighlight>
<ul className="space-y-16">
<li>📦 <a href="/size-snapshot/">4.5 kB gzipped</a>.</li>
</ul>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="UseAutocomplete.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/UseAutocomplete.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/UseAutocomplete.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Customized hook</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomizedHook.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/CustomizedHook.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/CustomizedHook.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">Head to the <a href="#customization">customization</a> section for an example with the <code>{`Autocomplete`}</code> component instead of the hook.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Asynchronous requests</Typography>
<Typography className="text-14 mb-32" component="div">The component supports two different asynchronous use-cases:</Typography>
<ul className="space-y-16">
<li><a href="#load-on-open">Load on open</a>: it waits for the component to be interacted with to load the options.</li>
<li><a href="#search-as-you-type">Search as you type</a>: a new request is made for each keystroke.</li>
</ul>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Load on open</Typography>
<Typography className="text-14 mb-32" component="div">It displays a progress state as long as the network request is pending.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Asynchronous.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/Asynchronous.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/Asynchronous.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Search as you type</Typography>
<Typography className="text-14 mb-32" component="div">If your logic is fetching new options on each keystroke and using the current value of the textbox
to filter on the server, you may want to consider throttling requests.</Typography>
<Typography className="text-14 mb-32" component="div">Additionally, you will need to disable the built-in filtering of the <code>{`Autocomplete`}</code> component by
overriding the <code>{`filterOptions`}</code> prop:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Autocomplete filterOptions={(x) => x} />
`}
</FuseHighlight>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Google Maps place</Typography>
<Typography className="text-14 mb-32" component="div">A customized UI for Google Maps Places Autocomplete.
For this demo, we need to load the <a href="https://developers.google.com/maps/documentation/javascript/overview">Google Maps JavaScript</a> and <a href="https://developers.google.com/maps/documentation/places/web-service/overview">Google Places</a> API.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="GoogleMaps.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/GoogleMaps.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/GoogleMaps.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">:::error
Before you can start using the Google Maps JavaScript API and Places API, you need to get your own <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">API key</a>.
:::</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Multiple values</Typography>
<Typography className="text-14 mb-32" component="div">Also known as tags, the user is allowed to enter more than one value.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Tags.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/Tags.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/Tags.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Fixed options</Typography>
<Typography className="text-14 mb-32" component="div">In the event that you need to lock certain tags so that they can&#39;t be removed, you can set the chips disabled.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="FixedTags.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/FixedTags.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/FixedTags.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Checkboxes</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CheckboxesTags.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/CheckboxesTags.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/CheckboxesTags.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Limit tags</Typography>
<Typography className="text-14 mb-32" component="div">You can use the <code>{`limitTags`}</code> prop to limit the number of displayed options when not focused.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="LimitTags.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/LimitTags.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/LimitTags.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Sizes</Typography>
<Typography className="text-14 mb-32" component="div">Fancy smaller inputs? Use the <code>{`size`}</code> prop.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Sizes.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/Sizes.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/Sizes.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Customization</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Custom input</Typography>
<Typography className="text-14 mb-32" component="div">The <code>{`renderInput`}</code> prop allows you to customize the rendered input.
The first argument of this render prop contains props that you need to forward.
Pay specific attention to the <code>{`ref`}</code> and <code>{`inputProps`}</code> keys.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="CustomInputAutocomplete.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/CustomInputAutocomplete.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/CustomInputAutocomplete.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Globally Customized Options</Typography>
<Typography className="text-14 mb-32" component="div">To globally customize the Autocomplete options for all components in your app,
you can use the <a href="/material-ui/customization/theme-components/#theme-default-props">theme default props</a> and set the <code>{`renderOption`}</code> property in the <code>{`defaultProps`}</code> key.
The <code>{`renderOption`}</code> property takes the <code>{`ownerState`}</code> as the fourth parameter, which includes props and internal component state.
To display the label, you can use the <code>{`getOptionLabel`}</code> prop from the <code>{`ownerState`}</code>.
This approach enables different options for each Autocomplete component while keeping the options styling consistent.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="GloballyCustomizedOptions.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/GloballyCustomizedOptions.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/GloballyCustomizedOptions.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">GitHub&#39;s picker</Typography>
<Typography className="text-14 mb-32" component="div">This demo reproduces GitHub&#39;s label picker:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="GitHubLabel.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/GitHubLabel.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/GitHubLabel.tsx')}
                    /></Typography>
<Typography className="text-14 mb-32" component="div">Head to the <a href="#customized-hook">Customized hook</a> section for a customization example with the <code>{`useAutocomplete`}</code> hook instead of the component.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Hint</Typography>
<Typography className="text-14 mb-32" component="div">The following demo shows how to add a hint feature to the Autocomplete using the <code>{`renderInput`}</code> and <code>{`filterOptions`}</code> props:</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="AutocompleteHint.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/AutocompleteHint.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/AutocompleteHint.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Highlights</Typography>
<Typography className="text-14 mb-32" component="div">The following demo relies on <a href="https://github.com/moroshko/autosuggest-highlight">autosuggest-highlight</a>, a small (1 kB) utility for highlighting text in autosuggest and autocomplete components.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Highlights.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/Highlights.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/Highlights.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Custom filter</Typography>
<Typography className="text-14 mb-32" component="div">The component exposes a factory to create a filter method that can be provided to the <code>{`filterOptions`}</code> prop.
You can use it to change the default option filter behavior.</Typography>

<FuseHighlight component="pre" className="language-js">
{` 
import { createFilterOptions } from '@mui/material/Autocomplete';
`}
</FuseHighlight>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3"><code>{`createFilterOptions(config) => filterOptions`}</code></Typography>
<Typography className="text-14 mt-12 mb-10" component="h4">Arguments</Typography>
<ol>
<li><code>{`config`}</code> (<em>object</em> [optional]):</li>
</ol>
<ul className="space-y-16">
<li><code>{`config.ignoreAccents`}</code> (<em>bool</em> [optional]): Defaults to <code>{`true`}</code>. Remove diacritics.</li>
<li><code>{`config.ignoreCase`}</code> (<em>bool</em> [optional]): Defaults to <code>{`true`}</code>. Lowercase everything.</li>
<li><code>{`config.limit`}</code> (<em>number</em> [optional]): Default to null. Limit the number of suggested options to be shown. For example, if <code>{`config.limit`}</code> is <code>{`100`}</code>, only the first <code>{`100`}</code> matching options are shown. It can be useful if a lot of options match and virtualization wasn&#39;t set up.</li>
<li><code>{`config.matchFrom`}</code> (<em>&#39;any&#39; | &#39;start&#39;</em> [optional]): Defaults to <code>{`'any'`}</code>.</li>
<li><code>{`config.stringify`}</code> (<em>func</em> [optional]): Controls how an option is converted into a string so that it can be matched against the input text fragment.</li>
<li><code>{`config.trim`}</code> (<em>bool</em> [optional]): Defaults to <code>{`false`}</code>. Remove trailing spaces.</li>
</ul>
<Typography className="text-14 mt-12 mb-10" component="h4">Returns</Typography>
<Typography className="text-14 mb-32" component="div"><code>{`filterOptions`}</code>: the returned filter method can be provided directly to the <code>{`filterOptions`}</code> prop of the <code>{`Autocomplete`}</code> component, or the parameter of the same name for the hook.</Typography>
<Typography className="text-14 mb-32" component="div">In the following demo, the options need to start with the query prefix:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

<Autocomplete filterOptions={filterOptions} />;
`}
</FuseHighlight>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Filter.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/Filter.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/Filter.tsx')}
                    /></Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">Advanced</Typography>
<Typography className="text-14 mb-32" component="div">For richer filtering mechanisms, like fuzzy matching, it&#39;s recommended to look at <a href="https://github.com/kentcdodds/match-sorter">match-sorter</a>. For instance:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
import { matchSorter } from 'match-sorter';

const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

<Autocomplete filterOptions={filterOptions} />;
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Virtualization</Typography>
<Typography className="text-14 mb-32" component="div">Search within 10,000 randomly generated options. The list is virtualized thanks to <a href="https://github.com/bvaughn/react-window">react-window</a>.</Typography>
<Typography className="text-14 mb-32" component="div"><FuseExample
                    name="Virtualize.js"
                    className="my-16"
                    iframe={false}
                    component={require('../components/autocomplete/Virtualize.tsx').default} 
                    raw={require('!raw-loader!../components/autocomplete/Virtualize.tsx')}
                    /></Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Events</Typography>
<Typography className="text-14 mb-32" component="div">If you would like to prevent the default key handler behavior, you can set the event&#39;s <code>{`defaultMuiPrevented`}</code> property to <code>{`true`}</code>:</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<Autocomplete
  onKeyDown={(event) => {
    if (event.key === 'Enter') {
      // Prevent's default 'Enter' behavior.
      event.defaultMuiPrevented = true;
      // your handler code
    }
  
/>
`}
</FuseHighlight>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Limitations</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">autocomplete/autofill</Typography>
<Typography className="text-14 mb-32" component="div">Browsers have heuristics to help the user fill in form inputs.
However, this can harm the UX of the component.</Typography>
<Typography className="text-14 mb-32" component="div">By default, the component disables the input <strong>autocomplete</strong> feature (remembering what the user has typed for a given field in a previous session) with the <code>{`autoComplete="off"`}</code> attribute.
Google Chrome does not currently support this attribute setting (<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=587466">Issue 587466</a>).
A possible workaround is to remove the <code>{`id`}</code> to have the component generate a random one.</Typography>
<Typography className="text-14 mb-32" component="div">In addition to remembering past entered values, the browser might also propose <strong>autofill</strong> suggestions (saved login, address, or payment details).
In the event you want the avoid autofill, you can try the following:</Typography>
<ul className="space-y-16">
<li><Typography className="text-14 mb-32" component="div">Name the input without leaking any information the browser can use. e.g. <code>{`id="field1"`}</code> instead of <code>{`id="country"`}</code>. If you leave the id empty, the component uses a random id.</Typography>
</li>
<li><Typography className="text-14 mb-32" component="div">Set <code>{`autoComplete="new-password"`}</code> (some browsers will suggest a strong password for inputs with this attribute setting):</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<TextField
  {...params}
  inputProps={{
    ...params.inputProps,
    autoComplete: 'new-password',
  
/>
`}
</FuseHighlight>
</li>
</ul>
<Typography className="text-14 mb-32" component="div">Read <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion">the guide on MDN</a> for more details.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">iOS VoiceOver</Typography>
<Typography className="text-14 mb-32" component="div">VoiceOver on iOS Safari doesn&#39;t support the <code>{`aria-owns`}</code> attribute very well.
You can work around the issue with the <code>{`disablePortal`}</code> prop.</Typography>
<Typography className="text-16 mt-20 mb-10 font-700" component="h3">ListboxComponent</Typography>
<Typography className="text-14 mb-32" component="div">If you provide a custom <code>{`ListboxComponent`}</code> prop, you need to make sure that the intended scroll container has the <code>{`role`}</code> attribute set to <code>{`listbox`}</code>. This ensures the correct behavior of the scroll, for example when using the keyboard to navigate.</Typography>
<Typography className="text-24 mt-24 mb-10 font-700" component="h2">Accessibility</Typography>
<Typography className="text-14 mb-32" component="div">(WAI-ARIA: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/">https://www.w3.org/WAI/ARIA/apg/patterns/combobox/</a>)</Typography>
<Typography className="text-14 mb-32" component="div">We encourage the usage of a label for the textbox.
The component implements the WAI-ARIA authoring practices.</Typography>

                </>
    
                     );
                   }
                   
                   export default AutocompleteDoc;
                   