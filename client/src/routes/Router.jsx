import React from 'react';
import CardsPage from '../cards/pages/CardsPage';
import { Routes, Route } from 'react-router-dom';
import ROUTES from './routesModel';
import AboutPage from '../pages/AboutPage';
import Sandbox from '../sandbox/Sandbox';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../users/pages/LoginPage';
import CardDetailsPage from '../cards/pages/CardDetailsPage';
import CompLogic from '../sandbox/CompLogic';
import SingupPage from '../users/pages/SingupPage';
import Loops from '../sandbox/Loops';
import StringInterpolation from '../sandbox/StringInterpolation';
import MuiSandbox from '../sandbox/mui-santbox/MuiSandbox';
import MuiButton from '../sandbox/mui-santbox/data-display/MuiButton';
import MuiDivider from '../sandbox/mui-santbox/data-display/MuiDivider';
import TypographyComponent from '../sandbox/mui-santbox/data-display/TypographyComponents';
import LifeCycleHooks from '../sandbox/life-cycle-hooks/LifeCycleHooks';
import InitialCycle from '../sandbox/life-cycle-hooks/InitialCycle';
import CustomCounterHook from '../sandbox/custom-hooks/CustomCounterHook';
import CustomName from '../sandbox/custom-hooks/CustomName';
import UseStateCycle from '../sandbox/life-cycle-hooks/UseStateCycle';
import UseEffectAsComponentDidMount from '../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount';
import UseEffectAsComponentDidUpdate from '../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate';
import UseEffectAsComponentWillUnmount from '../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount';
import UseEffectNoDependancies from '../sandbox/life-cycle-hooks/UseEffectNoDependancies';
import Memoization from '../sandbox/memoization/Memoization';
import UseCallback from '../sandbox/memoization/use-callback/UseCallback';
import MuiStack from '../sandbox/mui-santbox/layout/MuiStack';
import MuiGrid from '../sandbox/mui-santbox/layout/MuiGrid';
import MuiAppBar from '../sandbox/mui-santbox/navigation/MuiAppBar';
import MuiBottomNavigation from '../sandbox/mui-santbox/navigation/MuiBottomNavigation';
import MuiBox from '../sandbox/mui-santbox/layout/MuiBox';
import MuiConteiner from '../sandbox/mui-santbox/layout/MuiConteiner';
import UseMemo from '../sandbox/memoization/use-memo/UseMemo';
import A from '../sandbox/context/secondExe/components/A';
import FormTest from '../sandbox/Forms/FormTest';
import MyCardsPage from '../cards/pages/MyCardsPage';
import UseRefSandbox from '../sandbox/hooks/useRef/UseRefSandbox';
import UseRefCatchingEl from '../sandbox/hooks/useRef/UseRefCatchingEl';
import UseRefVsUseState from '../sandbox/hooks/useRef/UseRefVsUseState';
import EditCardPage from '../cards/pages/EditCardPage';
import CreateCardPage from '../cards/pages/CreateCardPage';
import FavCardsPage from '../cards/pages/FavCardPage';
import EditUserPage from '../users/pages/EditUserPage';
import UserProfile from '../users/pages/UserProfile';

const Router = () => {
	return (
		<Routes>
			<Route path={ROUTES.ROOT} element={<CardsPage />} />
			<Route path={ROUTES.ABOUT} element={<AboutPage />} />
			<Route path={ROUTES.CARDS} element={<CardsPage />} />
			<Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
			<Route
				path={`${ROUTES.CARD_DETAILS}/:cardId`}
				element={<CardDetailsPage />}
			/>
			<Route path={`${ROUTES.EDIT_CARD}/:cardId`} element={<EditCardPage />} />
			<Route path={`${ROUTES.MY_CARDS}`} element={<MyCardsPage />} />
			<Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
			<Route path={ROUTES.LOGIN} element={<LoginPage />} />
			<Route path={ROUTES.SIGNUP} element={<SingupPage />} />
			<Route path={`${ROUTES.EDIT_USER}/:userId`} element={<EditUserPage />} />
			<Route
				path={`${ROUTES.USER_PROFILE}/:userId`}
				element={<UserProfile />}
			/>
			<Route path={ROUTES.SANDBOX} element={<Sandbox />}>
				<Route path="logic" element={<CompLogic />} />
				<Route path="use-ref" element={<UseRefSandbox />}>
					<Route path="catching-element" element={<UseRefCatchingEl />} />
					<Route path="no-rendering" element={<UseRefVsUseState />} />
				</Route>
				<Route path="loops" element={<Loops />} />
				<Route path="stringInterpolation" element={<StringInterpolation />} />
				<Route path="custom-counter-hook" element={<CustomCounterHook />} />
				<Route path="context" element={<A />} />
				<Route path="form" element={<FormTest />} />
				<Route path="custom-name-hook" element={<CustomName />} />
				<Route path="memoization" element={<Memoization />}>
					<Route path="use-callback" element={<UseCallback />} />
					<Route path="usememo" element={<UseMemo />} />
				</Route>
				<Route path="life-cycle" element={<LifeCycleHooks />}>
					<Route path="initial" element={<InitialCycle />} />
					<Route path="use-state-cycle" element={<UseStateCycle />} />
					<Route
						path="component-did-mount"
						element={<UseEffectAsComponentDidMount />}
					/>
					<Route
						path="component-did-update"
						element={<UseEffectAsComponentDidUpdate />}
					/>
					<Route
						path="component-will-unmount"
						element={<UseEffectAsComponentWillUnmount />}
					/>
					<Route
						path="component-no-dependencies"
						element={<UseEffectNoDependancies />}
					/>
				</Route>
				<Route path="mui-sandbox" element={<MuiSandbox />}>
					<Route path="typography" element={<TypographyComponent />} />
					<Route path="muibutton" element={<MuiButton />} />
					<Route path="muistack" element={<MuiStack />} />
					<Route path="muigrid" element={<MuiGrid />} />
					<Route path="muiappbar" element={<MuiAppBar />} />
					<Route path="muibottomnavigation" element={<MuiBottomNavigation />} />
					<Route path="divider" element={<MuiDivider />} />
					<Route path="muibox" element={<MuiBox />} />
					<Route path="muiconteiner" element={<MuiConteiner />} />
				</Route>
			</Route>
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

Router.propTypes = {};

export default Router;
