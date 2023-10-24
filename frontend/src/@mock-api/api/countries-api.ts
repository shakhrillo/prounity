import mockApi from '../mock-api.json';
import mock from '../mock';
import { CountriesType } from '../../app/main/apps/contacts/types/CountryType';

const countriesApi = mockApi.components.examples.countries.value as CountriesType;

mock.onGet('/api/countries').reply(() => {
	return [200, countriesApi];
});
