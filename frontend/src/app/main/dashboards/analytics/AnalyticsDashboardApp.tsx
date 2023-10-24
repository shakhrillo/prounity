import { useEffect } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from 'app/store';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import AnalyticsDashboardAppHeader from './AnalyticsDashboardAppHeader';
import VisitorsOverviewWidget from './widgets/VisitorsOverviewWidget';
import ConversionsWidget from './widgets/ConversionsWidget';
import ImpressionsWidget from './widgets/ImpressionsWidget';
import VisitsWidget from './widgets/VisitsWidget';
import VisitorsVsPageViewsWidget from './widgets/VisitorsVsPageViewsWidget';
import NewVsReturningWidget from './widgets/NewVsReturningWidget';
import AgeWidget from './widgets/AgeWidget';
import LanguageWidget from './widgets/LanguageWidget';
import GenderWidget from './widgets/GenderWidget';
import _ from '../../../../@lodash/@lodash';

const container = {
	show: {
		transition: {
			staggerChildren: 0.06
		}
	}
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 }
};

/**
 * The analytics dashboard app.
 */
function AnalyticsDashboardApp() {
	const dispatch = useAppDispatch();
	const widgets = useAppSelector(selectWidgets);

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	if (_.isEmpty(widgets)) {
		return null;
	}

	return (
		<FusePageSimple
			header={<AnalyticsDashboardAppHeader />}
			content={
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
					variants={container}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={item}
						className="sm:col-span-2 lg:col-span-3"
					>
						<VisitorsOverviewWidget />
					</motion.div>

					<motion.div
						variants={item}
						className="sm:col-span-2 lg:col-span-1 "
					>
						<ConversionsWidget />
					</motion.div>

					<motion.div
						variants={item}
						className="sm:col-span-2 lg:col-span-1 "
					>
						<ImpressionsWidget />
					</motion.div>

					<motion.div
						variants={item}
						className="sm:col-span-2 lg:col-span-1 "
					>
						<VisitsWidget />
					</motion.div>

					<motion.div
						variants={item}
						className="sm:col-span-2 lg:col-span-3"
					>
						<VisitorsVsPageViewsWidget />
					</motion.div>

					<div className="w-full mt-16 sm:col-span-3">
						<Typography className="text-2xl font-semibold tracking-tight leading-6">
							Your Audience
						</Typography>
						<Typography
							className="font-medium tracking-tight"
							color="text.secondary"
						>
							Demographic properties of your users
						</Typography>
					</div>

					<div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 w-full">
						<motion.div variants={item}>
							<NewVsReturningWidget />
						</motion.div>
						<motion.div variants={item}>
							<GenderWidget />
						</motion.div>
						<motion.div variants={item}>
							<AgeWidget />
						</motion.div>
						<motion.div variants={item}>
							<LanguageWidget />
						</motion.div>
					</div>
				</motion.div>
			}
		/>
	);
}

export default AnalyticsDashboardApp;
