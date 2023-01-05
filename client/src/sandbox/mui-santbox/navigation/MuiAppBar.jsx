import { AppBar, Toolbar } from '@mui/material';
import React from 'react';

// const MuiAppBar = () => {
// 	return <AppBar position="sticky">in app bar</AppBar>;
// };
const MuiAppBar = () => {
	return (
		<AppBar position="sticky">
			<Toolbar>in toolbar</Toolbar>
		</AppBar>
	);
};

export default MuiAppBar;
