import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';
import useForm from '../../forms/hooks/useForm';
import { Navigate, useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { Container } from '@mui/material';
import Form from '../../forms/components/Form';
import Input from '../../forms/components/Input';
import { useParams } from 'react-router-dom';
import userSchema from '../hooks/userSchema';
import normalizeUser from '../helpers/normalization/normalizeUser';
import mapUserToModel from '../helpers/normalization/mapToModelUser';
import useUsers from '../hooks/useUsers';
import initialUserForm from '../helpers/initialForms/initialUserForm';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

const EditUserPage = () => {
	const { userId } = useParams();
	const {
		handleGetUser,
		handleUpdateUser,
		value: { user },
	} = useUsers();

	const navigate = useNavigate();

	const { value, ...rest } = useForm(initialUserForm, userSchema, () =>
		handleUpdateUser(userId, {
			...normalizeUser({ ...value.data }),
			user_id: user.user_id,
		})
	);

	const { error, isLoading } = value;
	useEffect(() => {
		handleGetUser(userId).then((data) => {
			if (!userId) return navigate(ROUTES.CARDS);
			const modeledUser = mapUserToModel(data);
			rest.setData(modeledUser);
		});
	}, []);

	return (
		<Container
			sx={{
				paddingTop: 8,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{isLoading && <Spinner />}
			{error && <Error errorMessage={error} />}
			<Form
				onSubmit={rest.onSubmit}
				onReset={rest.handleReset}
				onChange={rest.validateForm}
				styles={{ maxWidth: '800px' }}
				to={ROUTES.CARDS}
				title="Edit user"
			>
				<Input
					name="first"
					label="first"
					error={value.errors.first}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
				/>
				<Input
					name="middle"
					label="middle"
					error={value.errors.middle}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
				/>
				<Input
					name="last"
					label="last"
					error={value.errors.last}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
				/>
				<Input
					name="phone"
					label="phone"
					type="phone"
					error={value.errors.phone}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
				/>
				<Input
					name="email"
					label="email"
					type="email"
					error={value.errors.email}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
					disabled={false}
				/>
				<Input
					name="password"
					label="password"
					type="password"
					error={value.errors.password}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
				/>
				<Input
					name="imageUrl"
					label="image url"
					error={value.errors.imageUrl}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
					required={false}
				/>
				<Input
					name="imageAlt"
					label="image alt"
					error={value.errors.imageAlt}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
					required={false}
				/>
				<Input
					name="state"
					label="state"
					error={value.errors.state}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
					required={false}
				/>
				<Input
					name="country"
					label="country"
					error={value.errors.country}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
				/>
				<Input
					name="city"
					label="city"
					error={value.errors.city}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
				/>
				<Input
					name="street"
					label="street"
					error={value.errors.street}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
				/>
				<Input
					name="houseNumber"
					label="houseNumber"
					type="number"
					error={value.errors.houseNumber}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
				/>
				<Input
					name="zip"
					label="zip"
					type="number"
					error={value.errors.zip}
					onChange={rest.handleChange}
					data={value.data}
					sm={6}
					required={false}
				/>
				<Grid item>
					<FormControlLabel
						onChange={(e) =>
							rest.setData({
								...value.data,
								isBusiness: !!e.target.checked,
							})
						}
						name="isBusiness"
						control={
							<Checkbox checked={!!value.data.isBusiness} color="primary" />
						}
						labelPlacement="start"
						label="change business status"
					/>
				</Grid>
			</Form>
		</Container>
	);
};

export default EditUserPage;
