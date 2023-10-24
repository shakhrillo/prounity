import axios from 'axios';
import ExtendedMockAdapter from './ExtendedMockAdapter';

/**
 * The mock adapter for Axios requests in the Fuse project.
 */
const mock = new ExtendedMockAdapter(axios, { delayResponse: 0 });

export default mock;
