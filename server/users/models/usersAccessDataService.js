const User = require("./mongodb/User");
const lodash = require("lodash");
const { handleBadRequest } = require("../../utils/handleErrors");


const DB = process.env.DB || "MONGODB";

const {pick, omit} = require("lodash");
const { comparePassword } = require("../helpers/bcrypt");
const { generateAuthToken } = require("../../auth/Providers/jwt");

const registerUser = async normalizedUser => {
  if (DB === "MONGODB") {
    try {
      if(normalizedUser.image.url ===""){
        normalizedUser.image.url = 'https://cdn.pixabay.com/photo/2021/09/28/13/14/cat-6664412_960_720.jpg';
      }
      if(normalizedUser.image.alt ===""){
        normalizedUser.image.alt = 'default pic'
      }
      if(normalizedUser.address.state ===""){
        normalizedUser.address.state = 'not defined'
      }

      const {email} = normalizedUser;
      let user = await User.findOne({email});
      if(user)throw new Error("User alredy register");

        user = new User(normalizedUser);
        user = await user.save();
        user = pick(user, ["name", "email", "_id"]);
        return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("Mongoose",error);;
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const loginUser = async ({email, password}) => {
 
  if (DB === "MONGODB") {
    try {

      const user = await User.findOne({email});
      if(!user) throw new Error("Authentication Error: Invalid email or password");
      
      const ValidPassword = comparePassword(password, user.password);
      if(!ValidPassword) throw new Error("Authentication Error: Invalid email or password");
      const token = generateAuthToken(user)
      return Promise.resolve(token);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("Mongoose",error);;
    }
  }
  return Promise.resolve("loginUser user not in mongodb");
};

const getUsers = async () => {
  if (DB === "MONGODB") {
    try {
      let users = await User.find();
      users = users.map(user => {
        user = user.toObject();
        return omit(user, ['password']);
      });
      return Promise.resolve(users);
    } catch (error) {
      error.status = 404;
      return handleBadRequest("Mongoose",error);;
    }
  }
  return Promise.resolve("get users not in mongodb");
};

const getUser = async (userId) => {
  if (DB === "MONGODB") {
    try {
     let user = await User.findById(userId,{password: 0, __v: 0, isAdmin: 0});
     if(!user) throw new Error("Could not find this user in the database");
      return Promise.resolve(user)
    } catch (error) {
      error.status = 404;
      return handleBadRequest("Mongoose",error);;
    }
  }
  return Promise.resolve("get user not in mongodb");
};

const updateUser = async (userId, normalizedUser) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve({ normalizedUser, userId });
    } catch (error) {
      error.status = 400;
      return handleBadRequest("Mongoose",error);;
    }
  }
  return Promise.resolve("card update not in mongodb");
};

const changeUserBusinessStatus = async userId => {
  if (DB === "MONGODB") {
    try {
      const pipeline = [{$set: {isBusiness: {$not: "$isBusiness"}}}];
      let user = await User.findByIdAndUpdate(userId,pipeline, {new: true });
      if(!user) throw new Error("Could not update this user isBusiness status because a user with this ID cannot be found in the database");
      user = user.toObject();
      user = omit(user, ['password', 'isAdmin', '__v']);
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("Mongoose",error);;
    }
  }
  return Promise.resolve("Card Updated!");
};

const deleteUser = async (userId) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndDelete(userId);
      if(user) return Promise.resolve(`user no. ${userId} deleted!`);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("Mongoose",error);
    }
  }
  return Promise.resolve("user deleted not in mongodb");
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.deleteUser = deleteUser;
