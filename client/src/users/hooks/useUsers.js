import { useState, useCallback, useMemo } from 'react';
import useAxios from '../../hooks/useAxios';
import {
	editUser,
	getUsers,
	// getUser,
	login,
	singup,
	getUserFromServer,
	editUsers,
	deleteUser,
	changeBusinessStatus,
} from '../services/usersApiService';
import {
	getUser,
	removeToken,
	setTokenInLocalStorage,
} from '../services/localStoregeService';
import { useUser } from '../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import normalizeUser from '../helpers/normalization/normalizeUser';
import { useSnackbar } from '../../providers/SnackBarProvider';

const useUsers = () => {
	const [users, setUsers] = useState(null);
	const [isLoading, setisLoading] = useState(true);
	const [error, setError] = useState(null);

	const navigate = useNavigate();
	const { user, setUser, setToken } = useUser();
	const snack = useSnackbar();

	useAxios();

	const requestStatus = useCallback(
		(loading, errorMessage, users, user = null) => {
			setisLoading(loading);
			setUsers(users);
			setUser(user);
			setError(errorMessage);
		},
		[setUser]
	);

	const handleLogin = useCallback(async (user) => {
		try {
			const token = await login(user);
			setTokenInLocalStorage(token);
			setToken(token);
			const userFromLocalStorage = getUser();
			requestStatus(false, null, null, userFromLocalStorage);
			navigate(ROUTES.CARDS);
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, []);

	const handleLogout = useCallback(() => {
		removeToken();
		setUser(null);
	}, [setUser]);

	const handleSingup = useCallback(
		async (userFromClient) => {
			try {
				const normalizedUser = normalizeUser(userFromClient);
				await singup(normalizedUser);
				await handleLogin({
					email: userFromClient.email,
					password: userFromClient.password,
				});
			} catch (error) {
				requestStatus(false, error, null);
			}
		},
		[requestStatus, handleLogin]
	);

	const handleGetUser = useCallback(async (userId) => {
		try {
			const user = await getUserFromServer(userId);
			requestStatus(false, null, null, user);
			return user;
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, []);

	const handleGetUsers = useCallback(async () => {
		try {
			setisLoading(true);
			const users = await getUsers();
			requestStatus(false, null, users, user);
			return users;
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, [requestStatus, user]);

	const handleUpdateUser = useCallback(
		async (userId, userFromClient) => {
			try {
				const user = await editUser(userId, userFromClient);
				requestStatus(false, null, null, user);
				snack('success', 'The user has been successfully updated');
				navigate(ROUTES.MY_CARDS);
			} catch (error) {
				requestStatus(false, error, null);
			}
		},
		[snack]
	);
	const handleUpdateAllUser = useCallback(
		async (userId) => {
			try {
				const users = await editUser(userId);
				requestStatus(false, null, null, users);
				snack('success', 'The user has been successfully updated');
			} catch (error) {
				requestStatus(false, error, null);
			}
		},
		[snack]
	);

	const handleDeleteUser = useCallback(
		async (userId) => {
			try {
				setisLoading(true);
				await deleteUser(userId);
				snack('success', 'The business card has been successfully deleted');
			} catch (error) {
				requestStatus(false, error, null);
			}
		},
		[snack]
	);

	const handleChangeBusinessStatus = useCallback(
		async (userId, userFromClient) => {
			try {
				setisLoading(true);
				const user = await changeBusinessStatus(userId, userFromClient);
				requestStatus(false, null, users, user);
				snack('success', 'The business user has been successfully updated');
			} catch (error) {
				requestStatus(false, error, null);
			}
		},
		[requestStatus, snack, users]
	);

	const value = useMemo(
		() => ({ isLoading, error, user, users }),
		[isLoading, error, user, users]
	);

	return {
		value,
		handleLogin,
		handleLogout,
		handleSingup,
		handleGetUser,
		handleUpdateUser,
		handleGetUsers,
		handleUpdateAllUser,
		getUserFromServer,
		handleDeleteUser,
		handleChangeBusinessStatus,
	};
};

export default useUsers;
