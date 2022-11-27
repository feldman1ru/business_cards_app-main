const bcrypt = require("bcryptjs");

const genereteUserPassword = (password) => bcrypt.hashSync(password, 10);

const comparePassword = (password, anotherPassword) => bcrypt.compareSync(password, anotherPassword);


exports.genereteUserPassword = genereteUserPassword;
exports.comparePassword = comparePassword;