const User = require('./mongodb/User');
const lodash = require('lodash');
const { handleBadRequest } = require('../../utils/handleErrors');
const DB = process.env.DB || 'MONGODB';
const { pick, omit } = require('lodash');
const { comparePassword } = require('../helpers/bcrypt');
const { generateAuthToken } = require('../../auth/Providers/jwt');
const LoginUserSchema = require('../models/mongodb/login');

const changeUserBusinessStatus = async (userId) => {
	if (DB === 'MONGODB') {
		try {
			const pipeline = [{ $set: { isBusiness: { $not: '$isBusiness' } } }];
			let user = await User.findByIdAndUpdate(userId, pipeline, { new: true });
			if (!user)
				throw new Error(
					'Could not update this user isBusiness status because a user with this ID cannot be found in the database'
				);
			user = user.toObject();
			user = omit(user, ['password', 'isAdmin', '__v']);
			return Promise.resolve(user);
		} catch (error) {
			error.status = 400;
			return handleBadRequest('Mongoose', error);
		}
	}
	return Promise.resolve('Card Updated!');
};

const registerUser = async (normalizedUser) => {
	if (DB === 'MONGODB') {
		try {
			const { email } = normalizedUser;
			let user = await User.findOne({ email });
			if (user) throw new Error('User already registered');

			user = new User(normalizedUser);
			user = await user.save();

			user = lodash.pick(user, ['name', 'email', '_id']);
			return Promise.resolve(user);
		} catch (error) {
			error.status = 400;
			return Promise.reject(error);
		}
	}
	return Promise.resolve('registerUser new user not in mongodb');
};

const loginUser = async ({ email, password }) => {
	if (DB === 'MONGODB') {
		try {
			const nowTime = new Date();
			console.log('*******');
			console.log(nowTime);
			const user = await User.findOne({ email });
			if (!user)
				throw new Error('Authentication Error: Invalid email or password');

			const validPassword = comparePassword(password, user.password);
			let counter = await LoginUserSchema.findOne({ userId: user._id });

			if (counter) {
				if (counter.counter.length === 3) {
					const diff = nowTime - counter.counter[2];
					const day = 3600 * 1000 * 24;

					if (diff < day) throw new Error(`You need to wait 24 hours to login`);
					await LoginUserSchema.findByIdAndDelete(counter._id);
				}
			}

			if (!validPassword) {
				if (!counter) {
					let login = { userId: user._id, counter: [nowTime] };
					login = new LoginUserSchema(login);
					await login.save();
					throw new Error('Invalid email or Password.');
				}

				if (counter.counter.length < 3) {
					counter.counter.push(nowTime);
					await LoginUserSchema.findByIdAndUpdate(counter._id, {
						counter: counter.counter,
					});
					throw new Error('Invalid email or Password.');
				}
			}

			const token = generateAuthToken(user);

			if (counter) {
				await LoginUserSchema.findByIdAndDelete(counter._id);
			}

			return Promise.resolve(token);
		} catch (error) {
			error.status = 400;
			return Promise.reject(error);
		}
	}
	return Promise.resolve('loginUser user not in mongodb');
};

const getUsers = async () => {
	if (DB === 'MONGODB') {
		try {
			const users = await User.find({}, { password: 0, __v: 0 });
			return Promise.resolve(users);
		} catch (error) {
			error.status = 404;
			return Promise.reject(error);
		}
	}
	return Promise.resolve('get users not in mongodb');
};

const getUser = async (userId) => {
	if (DB === 'MONGODB') {
		try {
			let user = await User.findById(userId, {
				password: 0,
				__v: 0,
			});
			if (!user) throw new Error('Could not find this user in the database');
			return Promise.resolve(user);
		} catch (error) {
			error.status = 404;
			return handleBadRequest('Mongoose', error);
		}
	}
	return Promise.resolve('get user not in mongodb');
};

const updateUser = async (userId, normalizedUser) => {
	if (DB === 'MONGODB') {
		try {
			return Promise.resolve({ normalizedUser, userId });
		} catch (error) {
			error.status = 400;
			return Promise.reject(error);
		}
	}
	return Promise.resolve('user update not in mongodb');
};

const deleteUser = async (userId) => {
	if (DB === 'MONGODB') {
		try {
			return Promise.resolve(`user no. ${userId} deleted!`);
		} catch (error) {
			error.status = 400;
			return Promise.reject(error);
		}
	}
	return Promise.resolve('user deleted not in mongodb');
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.deleteUser = deleteUser;
