import React from 'react';
import { Navigate } from 'react-router-dom';
import ROUTES from './../../routes/routesModel';
import Container from '@mui/material/Container';
// import Form from '../../forms/components/Form';
// import Input from '../../forms/components/Input';
import useForm from '../../forms/hooks/useForm';
import useUsers from './../hooks/useUsers';
import initialSignupForm from './../helpers/initialForms/initialLoginForm';
import { useUser } from '../providers/UserProvider';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Grid from '@mui/material/Grid';
import signupSchema from '../models/joi-shema/sinupSchema';

import UserForm from '../components/UserForm';
const SignupPage = () => {
	const { handleSingup } = useUsers();
	const { value, ...rest } = useForm(
		initialSignupForm,
		signupSchema,
		handleSingup
	);

	const { user } = useUser();

	if (user) return <Navigate replace to={ROUTES.CARDS} />;

	return (
		<Container
			sx={{
				paddingTop: 8,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<UserForm
				title="register form"
				onSubmit={rest.onSubmit}
				onReset={rest.handleReset}
				onFormChange={rest.validateForm}
				onInputChange={rest.handleChange}
				setData={rest.setData}
				errors={value.errors}
				data={value.data}
			/>
		</Container>
		// <Container
		// 	sx={{
		// 		paddingTop: 8,
		// 		display: 'flex',
		// 		justifyContent: 'center',
		// 		alignItems: 'center',
		// 	}}
		// >
		// 	<Form
		// 		onSubmit={rest.onSubmit}
		// 		onReset={rest.handleReset}
		// 		onChange={rest.validateForm}
		// 		styles={{ maxWidth: '800px' }}
		// 		title="register"
		// 		to={ROUTES.CARDS}
		// 	>
		// 		<Input
		// 			name="first"
		// 			label="first name"
		// 			error={value.errors.first}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 		/>
		// 		<Input
		// 			name="middle"
		// 			label="middle name"
		// 			error={value.errors.middle}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 			required={false}
		// 		/>
		// 		<Input
		// 			name="last"
		// 			label="last name"
		// 			error={value.errors.last}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 		/>
		// 		<Input
		// 			name="phone"
		// 			label="phone"
		// 			type="phone"
		// 			error={value.errors.phone}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 		/>
		// 		<Input
		// 			name="email"
		// 			label="email"
		// 			type="email"
		// 			error={value.errors.email}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 		/>
		// 		<Input
		// 			name="password"
		// 			label="password"
		// 			type="password"
		// 			error={value.errors.password}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 		/>
		// 		<Input
		// 			name="url"
		// 			label="image url"
		// 			error={value.errors.url}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 			required={false}
		// 		/>
		// 		<Input
		// 			name="alt"
		// 			label="image alt"
		// 			error={value.errors.alt}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 			required={false}
		// 		/>
		// 		<Input
		// 			name="state"
		// 			label="state"
		// 			error={value.errors.state}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 			required={false}
		// 		/>
		// 		<Input
		// 			label="country"
		// 			name="country"
		// 			error={value.errors.country}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 		/>
		// 		<Input
		// 			name="city"
		// 			label="city"
		// 			error={value.errors.city}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 		/>
		// 		<Input
		// 			name="street"
		// 			label="street"
		// 			error={value.errors.street}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 		/>
		// 		<Input
		// 			name="houseNumber"
		// 			label="house Number"
		// 			type="number"
		// 			error={value.errors.houseNumber}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 		/>
		// 		<Input
		// 			name="zip"
		// 			label="zip"
		// 			error={value.errors.zip}
		// 			onChange={rest.handleChange}
		// 			data={value.data}
		// 			sm={6}
		// 			required={false}
		// 		/>
		// 		<Grid item>
		// 			<FormControlLabel
		// 				onChange={(e) => {
		// 					rest.setData({ ...value.data, isBusiness: !!e.target.checked });
		// 				}}
		// 				name="isBusiness"
		// 				control={<Checkbox value={value.data.isBusiness} color="primary" />}
		// 				label="Signup as business"
		// 			/>
		// 		</Grid>
		// 	</Form>
		// </Container>
	);
};

export default SignupPage;
