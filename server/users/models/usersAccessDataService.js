const User = require("./mongodb/User");

const DB = process.env.DB || "MONGODB";

const registerUser = async normalizedUser => {
  if (DB === "MONGODB") {
    try {
      const email = normalizedUser.email
      const user = await User.findOne({email:email});
      if(!user){
        user = new User(normalizedUser);
        newUser = await user.save();
        user = newUser;
        user = _.pick(normalizedUser, ["name", "email", "_id"]);
        return Promise.resolve(user);
      }else{
        throw new Error("User alredy register")
      }

    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const loginUser = async (normalizedUser) => {
  const email = normalizedUser.email
  const password = normalizedUser.password
  if (DB === "MONGODB") {
    try {
      const user = await User.findOne({email:email});
      if(user.password !== password)
      return Promise.resolve("Invalid email or password");
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
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
      return Promise.reject(error);
    }
  }
  return Promise.resolve([{}]);
};

const getUser = async userId => {
  if (DB === "MONGODB") {
    try {

      const user = await User.findById().exclude("password");
      //   throw new Error("Opss... i did it again!");
      if(!user)
      throw new Error("Could not find this user in the database");
      return Promise.resolve(user)
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
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
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card update not in mongodb");
};

const changeUserBusinessStatus = async userId => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no. ${userId} change his business status!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card liked not in mongodb");
};

const deleteUser = async userId => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndDelete().exclude("password");
      if(!user)
      return Promise.resolve(`user no. ${userId} deleted!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
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
