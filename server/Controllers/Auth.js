const User = require("../Models/User");
const { createSecretToken } = require("../Utils/SecretToken");
const GenericValidation = require("../Utils/GenericValidation");
const AppError = require("../Utils/AppError");
const AuthHelper = require("../Helpers/Auth");
const To = require("../Utils/To");

const Signup = async (req, res, next) => {
  try {
    console.log("inside signup");
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

const Login = async (req, res, next) => {
  try {
    let error, result;

    if (!GenericValidation.isNonEmptyObject(req.body)) {
      throw new AppError("Please enter valid data.", 400, null);
    }
    if (!GenericValidation.isValidEmail(req.body.email)) {
      throw new AppError("Please enter valid email.", 400, null);
    }
    if (!GenericValidation.isValidPassword(req.body.password)) {
      throw new AppError("Please enter valid password.", 400, null);
    }

    [error, result] = await To(
      AuthHelper.Login(req.body, req.params, req.flags)
    );

    if (error) {
      throw new AppError(error);
    }

    res.cookie("token", result.token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    // Common.terminateProcess();
    console.error(error);
    res.status(201).json({ message: error.message, success: false });
    next();
  }
};

module.exports = { Login, Signup };
