import mockApi from '../../mock-api.json';
import mock from '../../mock';

const widgets = mockApi.components.examples.project_dashboard_widgets.value;
const projects = mockApi.components.examples.project_dashboard_projects.value;

mock.onGet('/api/dashboards/project/widgets').reply(() => {
	return [200, widgets];
});

mock.onGet('/api/dashboards/project/projects').reply(() => {
	return [200, projects];
});
