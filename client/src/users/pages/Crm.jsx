import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import useForm from '../../forms/hooks/useForm';
import initialUserForm from '../helpers/initialForms/initialUserForm';
import userSchema from '../hooks/userSchema';
import normalizeUser from '../helpers/normalization/normalizeUser';
import mapUserToModel from '../helpers/normalization/mapToModelUser';
import ROUTES from '../../routes/routesModel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { useUser } from '../providers/UserProvider';

let users;
const Crm = () => {
	const [users, setUsers] = useState([]);
	const { userId } = useParams();
	const { handleGetUsers } = useUsers();
	const navigate = useNavigate();

	const { user } = useUser();
	console.log(users);

	useEffect(() => {
		handleGetUsers().then((data) => {
			// users = data;
			// setUsers(data);
		});
	}, []);

	console.log(users);
	if (user)
		return (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>email</TableCell>
							<TableCell>First Name</TableCell>
							<TableCell>Second Name </TableCell>
							<TableCell>Telefon</TableCell>
							<TableCell>Business Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{user.map((user) => (
							<TableRow
								key={user._id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{user.email}
								</TableCell>
								<TableCell component="th" scope="row">
									{user.name.first}
								</TableCell>
								<TableCell component="th" scope="row">
									{user.name.last}
								</TableCell>
								<TableCell component="th" scope="row">
									{user.phone}
								</TableCell>
								<TableCell component="th" scope="row">
									<Grid item>
										<FormControlLabel
											onChange={(e) =>
												setUsers(
													users.map((user) =>
														user._id === user._id
															? { ...user, isBusiness: e.target.checked }
															: user
													)
												)
											}
											name="isBusiness"
											control={
												<Checkbox checked={user.isBusiness} color="primary" />
											}
											labelPlacement="start"
											label="change business status"
										/>
									</Grid>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
};

export default Crm;

// import { useEffect, useState } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import useUsers from '../hooks/useUsers';
// import useForm from '../../forms/hooks/useForm';
// import initialUserForm from '../helpers/initialForms/initialUserForm';
// import userSchema from '../hooks/userSchema';
// import normalizeUser from '../helpers/normalization/normalizeUser';
// import mapUserToModel from '../helpers/normalization/mapToModelUser';
// import ROUTES from '../../routes/routesModel';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Checkbox, FormControlLabel, Grid } from '@mui/material';
// import { useUser } from '../../users/providers/UserProvider';

// const Crm = () => {
// 	const [users, setUsers] = useState();
// 	const { userId } = useParams();
// 	const { handleGetUsers, handleUpdateUser, handleUpdateAllUser } = useUsers();
// 	const navigate = useNavigate();
// 	const { user } = useUser();

// 	// const { ...rest } = useForm(() => handleUpdateAllUser());
// 	console.log(user);
// 	// console.log(value);
// 	// console.log(value.data);
// 	// console.log(rest);
// 	console.log(user._id);

// 	useEffect(() => {
// 		// const handleUpdateUser = (userId, user, e) => {
// 		// 	console.log(e.value);
// 		// 	const updatedUsers = users.map((user) => {
// 		// 		if (user._id === userId) {
// 		// 			return { ...user, isBusiness: user.target.checked };
// 		// 		} else {
// 		// 			return user;
// 		// 		}
// 		// 	});
// 		// 	return updatedUsers;
// 		// };
// 	}, []);

// 	handleGetUsers().then((data) => {
// 		console.log(data);
// 		setUsers(data);
// 	});

// 	// const handleUpdateUser2 = (userId, user, event) => {
// 	// 	// console.log(event.target.checked);
// 	// 	// const updatedUsers = users.map((user) => {
// 	// 	// 	if (user._id === userId) {
// 	// 	// 		return { ...user, isBusiness: event.target.checked };
// 	// 	// 	} else {
// 	// 	// 		return user;
// 	// 	// 	}
// 	// 	// });
// 	// 	// console.log(updatedUsers);
// 	// 	let updatedUser = user;
// 	// 	updatedUser.isBusiness = event.target.checked;

// 	// 	handleUpdateAllUser(userId, updatedUser);
// 	// 	console.log(updatedUser.isBusiness);
// 	// 	setUsers(updatedUser);
// 	// };

// 	// if (!users) return <Navigate replace to={ROUTES.CARDS} />;

// 	if (user._id === userId) {
// 		return (
// 			<TableContainer component={Paper}>
// 				<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
// 					<TableHead>
// 						<TableRow>
// 							<TableCell>email</TableCell>
// 							<TableCell>First Name</TableCell>
// 							<TableCell>Second Name </TableCell>
// 							<TableCell>Telefon</TableCell>
// 							<TableCell>Business Status</TableCell>
// 						</TableRow>
// 					</TableHead>
// 					<TableBody>
// 						{users.map((user) => (
// 							<TableRow
// 								key={user._id}
// 								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// 							>
// 								<TableCell component="th" scope="row">
// 									{user.email}
// 								</TableCell>
// 								<TableCell component="th" scope="row">
// 									{user.name.first}
// 								</TableCell>
// 								<TableCell component="th" scope="row">
// 									{user.name.last}
// 								</TableCell>
// 								<TableCell component="th" scope="row">
// 									{user.phone}
// 								</TableCell>
// 								<TableCell component="th" scope="row">
// 									<Grid item>
// 										{/* <FormControlLabel
// 											onChange={(e) =>
// 												setUsers(
// 													users.map((u) =>
// 														u._id === user._id
// 															? { ...u, isBusiness: e.target.checked }
// 															: u
// 													)
// 												)
// 											}
// 											name="isBusiness"
// 											control={
// 												<Checkbox checked={user.isBusiness} color="primary" />
// 											}
// 											labelPlacement="start"
// 											label="change business status"
// 										/> */}
// 										<FormControlLabel
// 											onChange={(e) => handleUpdateUser(user._id, user, e)}
// 											name="isBusiness"
// 											control={
// 												<Checkbox checked={user.isBusiness} color="primary" />
// 											}
// 											labelPlacement="start"
// 											label="change business status"
// 										/>
// 										{/* <FormControlLabel
// 											onChange={(e) =>
// 												setUsers(
// 													users.map((newUser) =>
// 														newUser._id === user._id
// 															? { ...newUser, isBusiness: e.target.checked }
// 															: newUser
// 													)
// 												)
// 											}
// 											name="isBusiness"
// 											control={
// 												<Checkbox checked={user.isBusiness} color="primary" />
// 											}
// 											labelPlacement="start"
// 											label="change business status"
// 										/> */}
// 									</Grid>
// 								</TableCell>
// 							</TableRow>
// 						))}
// 					</TableBody>
// 				</Table>
// 			</TableContainer>
// 		);
// 	}
// 	return;
// };

// export default Crm;
