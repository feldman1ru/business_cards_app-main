import React from 'react';
// import MuiButton from './data-display/MuiButton';
// import MuiDivider from './data-display/MuiDivider';
// import TypographyComponent from './data-display/TypographyComponents';
// import MuiStack from './layout/MuiStack';
// import MuiGrid from './layout/MuiGrid';
// import MuiAppBar from './navigation/MuiAppBar';
// import MuiBottomNavigation from './navigation/MuiBottomNavigation';
// import MuiBox from './layout/MuiBox';
// import MuiConteiner from './layout/MuiConteiner';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import NavItem from '../../routes/NavItem';

const MuiSandbox = () => {
	return (
		<div>
			<AppBar position="sticky" color="transparent">
				<Toolbar>
					<NavItem
						to="typography"
						label="TypographyComponent"
						sx={{ color: 'black' }}
					/>
					<NavItem to="divider" label="MuiDivider" sx={{ color: 'black' }} />
					<NavItem to="muibutton" label="MuiButton" sx={{ color: 'black' }} />
					<NavItem to="muistack" label="MuiStack" sx={{ color: 'black' }} />
					<NavItem to="muigrid" label="MuiGrid" sx={{ color: 'black' }} />
					<NavItem to="muiappbar" label="MuiAppBar" sx={{ color: 'black' }} />
					<NavItem
						to="muibottomnavigation"
						label="MuiBottomNavigation"
						sx={{ color: 'black' }}
					/>
					<NavItem to="muibox" label="Muibox" sx={{ color: 'black' }} />
					<NavItem
						to="MuiConteiner"
						label="Mui Conteiner"
						sx={{ color: 'black' }}
					/>
				</Toolbar>
			</AppBar>
			{/* <TypographyComponent />
			<MuiDivider />
			<MuiButton /> */}
			{/* <MuiBox /> */}
			{/* <MuiConteiner /> */}
			{/* <MuiStack />
			<MuiGrid />
			<MuiAppBar />
			<MuiBottomNavigation /> */}

			<Outlet />
		</div>
	);
};

export default MuiSandbox;
