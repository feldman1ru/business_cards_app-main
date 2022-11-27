const User = require("./mongodb/User");

const DB = process.env.DB || "MONGODB";

const {pick} = require("lodash");
const { comparePassword } = require("../helpers/bcrypt");

const registerUser = async normalizedUser => {
  if (DB === "MONGODB") {
    try {
      const {email} = normalizedUser;
      const user = await User.findOne({email});
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

// const loginUser = async (normalizedUser) => {
//   const email = normalizedUser.email
//   const password = normalizedUser.password
//   if (DB === "MONGODB") {
//     try {
//       const user = await User.findOne({email:email});
//       if(user.password !== password)
//       return Promise.resolve("Invalid email or password");
//     } catch (error) {
//       error.status = 400;
//       return Promise.reject(error);
//     }
//   }
//   return Promise.resolve("loginUser user not in mongodb");
// };


const loginUser = async ({email, password}) => {
 
  if (DB === "MONGODB") {
    try {

      const user = await User.findOne({email});
      if(!user) throw new Error("Authentication Error: Invalid email or password");
      
      const ValidPassword = comparePassword(password, user.password);
      if(!ValidPassword) throw new Error("Authentication Error: Invalid email or password");
      return Promise.resolve({token: "yuiipp!!"})
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
      const users = await User.find().exclude("password");
      
      return Promise.resolve(users);
    } catch (error) {
      error.status = 404;
      return handleBadRequest("Mongoose",error);;
    }
  }
  return Promise.resolve([{}]);
};

const getUser = async userId => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findById().exclude("password");
      if(!user)
      throw new Error("Could not find this user in the database");
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
      let user = await User.findByIdAndUpdate(id,pipeline, {new: true });

      if(!user) throw new Error("Could not update this user isBusiness status because a user with this ID cannot be found in the database");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("Mongoose",error);;
    }
  }
  return Promise.resolve("Card Updated!");
};

const deleteUser = async userId => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndDelete().exclude("password");
      if(!user)
      return Promise.resolve(`user no. ${userId} deleted!`);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("Mongoose",error);
    }
  }
  return Promise.resolve("card deleted not in mongodb");
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.deleteUser = deleteUser;
