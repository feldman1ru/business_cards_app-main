import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SearchBar from './SearchBar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MoreButton from './MoreButton';
import Logged from './Logged';
import NotLogged from './NotLogged';
import MenuBar from './MenuBar';
import { useTheme } from '../../../../providers/ThemeProvider';
import { useUser } from '../../../../users/providers/UserProvider';
import { useMediaQuery } from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useEffect } from 'react';

const RightNavBar = () => {
	const [anchorEl, setAnchoeEl] = useState(null);
	const [isMenuOpen, setMenuStatus] = useState(false);
	const theme = useMuiTheme();
	const screenSize = useMediaQuery(theme.breakpoints.up('md'));
	const { user } = useUser();
	const handleCloseMenu = () => {
		setMenuStatus(false);
		setAnchoeEl(null);
	};

	const handleOpenMenu = ({ target }) => {
		setAnchoeEl(target);
		setMenuStatus(true);
	};

	const { isDark, toggleDarkMode } = useTheme();

	useEffect(() => {
		handleCloseMenu();
	}, [screenSize]);

	return (
		<>
			<Box sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
				<SearchBar />

				<IconButton sx={{ marginLeft: 1 }} onClick={toggleDarkMode}>
					{isDark ? <LightModeIcon /> : <DarkModeIcon />}
				</IconButton>

				{!user && <NotLogged />}

				{user && <Logged onClick={handleOpenMenu} />}
			</Box>

			<MoreButton onClick={setAnchoeEl} />

			<MenuBar
				isMenuOpen={isMenuOpen}
				anchorEl={anchorEl}
				onCloseMenu={handleCloseMenu}
			/>
		</>
	);
};

export default RightNavBar;
