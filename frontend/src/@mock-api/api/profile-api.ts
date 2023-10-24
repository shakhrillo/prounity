import mockApi from '../mock-api.json';
import mock from '../mock';
import { TimelineResponseDataType } from '../../app/main/apps/profile/tabs/timeline/TimelineTab';
import { AlbumsType } from '../../app/main/apps/profile/types/AlbumType';
import { ProfileType } from '../../app/main/apps/profile/types/ProfileType';

const timelineApi = mockApi.components.examples.profile_timeline.value as TimelineResponseDataType;
const photosVideosApi = mockApi.components.examples.profile_photos_videos.value as AlbumsType;
const aboutApi = mockApi.components.examples.profile_about.value as ProfileType;

mock.onGet('/api/profile/timeline').reply(() => {
	return [200, timelineApi];
});

mock.onGet('/api/profile/photos-videos').reply(() => {
	return [200, photosVideosApi];
});

mock.onGet('/api/profile/about').reply(() => {
	return [200, aboutApi];
});
