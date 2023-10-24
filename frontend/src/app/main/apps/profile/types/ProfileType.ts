type ProfileGeneral = {
	gender: 'Male' | 'Female';
	birthday: string;
	locations: string[];
	about: string;
};

type ProfileWork = {
	occupation: string;
	skills: string;
	jobs: {
		company: string;
		date: string;
	}[];
};

type ProfileContact = {
	address: string;
	tel: string[];
	websites: string[];
	emails: string[];
};

type ProfileGroup = {
	id: string;
	name: string;
	category: string;
	members: string;
};

type ProfileFriend = {
	id: string;
	name: string;
	avatar: string;
};

/**
 * The Profile type definition.
 */
export type ProfileType = {
	general: ProfileGeneral;
	work: ProfileWork;
	contact: ProfileContact;
	groups: ProfileGroup[];
	friends: ProfileFriend[];
};
