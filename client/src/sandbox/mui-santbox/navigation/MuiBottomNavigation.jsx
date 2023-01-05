import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React from 'react';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';

// const MuiBottomNavigation = () => {
// 	return (
// 		<div>
// 			<p>
// 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam esse,
// 				exercitationem id nobis magni ut porro saepe at aspernatur eum veritatis
// 				natus quasi iusto nostrum eaque! Consequuntur possimus recusandae
// 				aliquid.
// 			</p>
// 			<Paper sx={{ position: 'stiky' }} elevation={4}>
// 				<BottomNavigation showLabels>
// 					<BottomNavigationAction label="Facebook" icon={<Facebook />} />
// 					<BottomNavigationAction label="Instagram" icon={<Instagram />} />
// 					<BottomNavigationAction label="Twitter" icon={<Twitter />} />
// 				</BottomNavigation>
// 			</Paper>
// 		</div>
// 	);
// };

const MuiBottomNavigation = () => {
	return (
		<div>
			<Paper sx={{ position: 'stiky' }} elevation={4}>
				<BottomNavigation showLabels>
					<BottomNavigationAction label="Facebook" icon={<Facebook />} />
					<BottomNavigationAction label="Instagram" icon={<Instagram />} />
					<BottomNavigationAction label="Twitter" icon={<Twitter />} />
				</BottomNavigation>
			</Paper>
		</div>
	);
};

export default MuiBottomNavigation;
