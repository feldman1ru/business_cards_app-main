import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8181';

export const login = async (user) => {
	try {
		const { data } = await axios.post(`${apiUrl}/users/login`, user);
		return data;
	} catch (error) {
		return Promise.reject(error.message);
	}
};

export const singup = async (normalizedUser) => {
	try {
		const { data } = await axios.post(`${apiUrl}/users`, normalizedUser);
		return data;
	} catch (error) {
		return Promise.reject(error.message);
	}
};

export const getUser = async (userId) => {
	try {
		const { data } = await axios.get(`${apiUrl}/users/${userId}`);
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
		return Promise.reject(error.message);
	}
};

export const getUsers = async (userId) => {
	try {
		const { data } = await axios.get(`${apiUrl}/users/${userId}`);
		return data;
	} catch (error) {
		console.log(error);
		return Promise.reject(error.message);
	}
};

export const editUser = async (userId, normalaizeUser) => {
	try {
		const { data } = await axios.put(
			`${apiUrl}/users/${userId}`,
			normalaizeUser
		);
		return data;
	} catch (error) {
		console.log(error);
		return Promise.reject(error.message);
	}
};
