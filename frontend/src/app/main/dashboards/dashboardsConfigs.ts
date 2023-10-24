import { FuseRouteConfigsType } from '@fuse/utils/FuseUtils';
import AnalyticsDashboardAppConfig from './analytics/AnalyticsDashboardAppConfig';
import ProjectDashboardAppConfig from './project/ProjectDashboardAppConfig';
import FinanceDashboardAppConfig from './finance/FinanceDashboardAppConfig';
import CryptoDashboardAppConfig from './crypto/CryptoDashboardAppConfig';

/**
 * Dashboards
 */
const dashboardsConfigs: FuseRouteConfigsType = [
	AnalyticsDashboardAppConfig,
	ProjectDashboardAppConfig,
	FinanceDashboardAppConfig,
	CryptoDashboardAppConfig
];

export default dashboardsConfigs;
