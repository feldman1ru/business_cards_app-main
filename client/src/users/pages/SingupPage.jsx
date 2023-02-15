import React from 'react';
import { Navigate } from 'react-router-dom';
import ROUTES from './../../routes/routesModel';
import Container from '@mui/material/Container';
import useForm from '../../forms/hooks/useForm';
import useUsers from './../hooks/useUsers';
import initialSignupForm from './../helpers/initialForms/initialLoginForm';
import { useUser } from '../providers/UserProvider';
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
	);
};

export default SignupPage;
