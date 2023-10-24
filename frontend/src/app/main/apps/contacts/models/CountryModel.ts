import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { CountryType } from '../types/CountryType';

/**
 * The country model.
 */
const CountryModel = (data: PartialDeep<CountryType>) =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		iso: '',
		name: '',
		code: '',
		flagImagePos: ''
	});

export default CountryModel;
