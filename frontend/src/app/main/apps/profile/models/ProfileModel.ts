import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { ProfileType } from '../types/ProfileType';

/**
 * The profile model.
 */
function ProfileModel(data: PartialDeep<ProfileType>) {
	data = data || {};

	return _.defaults(data, {
		general: {
			gender: 'Male',
			birthday: '',
			locations: [],
			about: ''
		},
		work: {
			occupation: '',
			skills: '',
			jobs: []
		},
		contact: {
			address: '',
			tel: [],
			websites: [],
			emails: []
		},
		groups: [],
		friends: []
	});
}

export default ProfileModel;
