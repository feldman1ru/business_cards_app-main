import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavItem from '../routes/NavItem';
import { Outlet } from 'react-router-dom';
import { useUser } from '../users/providers/UserProvider';
import { Navigate } from 'react-router-dom';
import ROUTES from '../routes/routesModel';

const Sandbox = () => {
	const { user } = useUser();

	if (!user || !user.isAdmin) return <Navigate replace to={ROUTES.CARDS} />;

	return (
		<div>
			<AppBar position="sticky" color="transparent">
				<Toolbar>
					<NavItem to="logic" label="comp-logic" sx={{ color: 'black' }} />
					<NavItem
						to="mui-sandbox"
						label="mui sandbox"
						sx={{ color: 'black' }}
					/>
					<NavItem
						label="life cycle hooks"
						to="life-cycle"
						sx={{ color: 'black' }}
					/>
					<NavItem
						label="custom counter hook"
						to="custom-counter-hook"
						sx={{ color: 'black' }}
					/>
					<NavItem
						label="custom name hook"
						to="custom-name-hook"
						sx={{ color: 'black' }}
					/>
					<NavItem
						label="memoization"
						to="memoization"
						sx={{ color: 'black' }}
					/>
					<NavItem label="loops" to="loops" sx={{ color: 'black' }} />
					<NavItem
						label="string Interpolation"
						to="stringInterpolation"
						sx={{ color: 'black' }}
					/>
					<NavItem label="context" to="context" sx={{ color: 'black' }} />
					<NavItem label="form" to="form" sx={{ color: 'black' }} />
					<NavItem label="use ref" to="use-ref" sx={{ color: 'black' }} />
				</Toolbar>
			</AppBar>
			<Outlet />
		</div>
	);
};

export default Sandbox;
