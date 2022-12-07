const express = require("express");
const auth = require("../../auth/authServise");
const { handleError } = require("../../utils/handleErrors");
const { genereteUserPassword } = require("../helpers/bcrypt");
const normalizeUser = require("../helpers/normalizeUser");
const {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
  changeUserBusinessStatus,
  deleteUser,
} = require("../models/usersAccessDataService");

const {
  validateRegistration,
  validateLogin,
  validateUserUpdate,
} = require("../validations/userValidationService");
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    let user = req.body;
    const { error } = validateRegistration(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    user = normalizeUser(user);
    user.password = genereteUserPassword(user.password);

    user = await registerUser(user);
    return res.status(201).send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = req.body;
    const { error } = validateLogin(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const token = await loginUser(req.body);
    return res.send(token);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const user = req.user;
    if(!user.isAdmin) return handleError(res, 403,"Authorization Error: You must be an admin user to see all users in the database"
    );

    const users = await getUsers();
    return res.send(users);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id",auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, isAdmin } = req.user;

    if(_id !== id && !isAdmin) 
    return handleError(res,403,"Authorization Error: You must be an admin user to see all users in the database");
    const user = await getUser(id);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.put("/:id",auth, async (req, res) => {
  try {
    const { id } = req.params;
    let user = req.body;
    const { error } = validateUserUpdate(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    user = normalizeUser(user);
    user = await updateUser(id, user);
    console.log(user);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error);
  }
});

router.patch("/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const user = await changeUserBusinessStatus(id);
    return res.send(user);
  } catch (error) {
    console.log(error)
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

module.exports = router;