import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';
import useForm from '../../forms/hooks/useForm';
import { useUser } from '../../users/providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { Container, Table } from '@mui/material';
import Form from '../../forms/components/Form';
import Input from '../../forms/components/Input';
import { useParams } from 'react-router-dom';
// import mapCardToModel from '../helpers/normalization/mapToModel';
// import normalizeCard from './../helpers/normalization/normalizeCard';
// import initialSignupForm from '../helpers/initialForms/initialSingUpForm';
import userSchema from '../hooks/userSchema';
import normalizeUser from '../helpers/normalization/normalizeUser';
import mapUserToModel from '../helpers/normalization/mapToModelUser';
import useUsers from '../hooks/useUsers';
import initialUserForm from '../helpers/initialForms/initialUserForm';
import UserForm from '../components/UserForm';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

const UserProfile = () => {
	// const { user } = useParams();
	const {
		handleGetUsers,
		handleUpdateUser,
		value: { user },
	} = useUsers();
	const { userId } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		handleGetUsers(user._id).then((data) => {
			if (user._id !== data._id)
				return navigate(`${ROUTES.EDIT_USER}/${user._id}`);
			const modeledUser = mapUserToModel(data);
			rest.setData(modeledUser);
		});
	}, []);

	const { value, ...rest } = useForm(initialUserForm, userSchema, () =>
		handleUpdateUser(userId, {
			...normalizeUser({ ...value.data }),
			user_id: user.user_id,
		})
	);
	if (user)
		return (
			<Table>
				<TableContainer
					sx={{
						paddingTop: 8,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TableHead>
						<TableRow>
							<TableCell>First</TableCell>
							<TableCell>{value.data.first}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>middle</TableCell>
							<TableCell>{value.data.middle}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>last</TableCell>
							<TableCell>{value.data.last}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Phone</TableCell>
							<TableCell>{value.data.phone}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Email</TableCell>
							<TableCell>{value.data.email}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Image URL</TableCell>
							<TableCell>{value.data.imageUrl}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Image Alt</TableCell>
							<TableCell>{value.data.imageAlt}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>State</TableCell>
							<TableCell>{value.data.state}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Country</TableCell>
							<TableCell>{value.data.country}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>City</TableCell>
							<TableCell>{value.data.city}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Street</TableCell>
							<TableCell>{value.data.street}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>House Number</TableCell>
							<TableCell>{value.data.houseNumber}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Zip Code</TableCell>
							<TableCell>{value.data.zip}</TableCell>
						</TableRow>
					</TableHead>
				</TableContainer>
			</Table>
		);
};

export default UserProfile;
