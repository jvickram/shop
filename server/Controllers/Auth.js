const User = require("../Models/User");
const { createJwtSecretToken } = require("../Utils/SecretToken");
const GenericValidation = require("../Utils/GenericValidation");
const AppError = require("../Utils/AppError");
const AuthHelper = require("../Helpers/Auth");
const To = require("../Utils/To");

const Signup = async (req, res, next) => {
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
    if (!GenericValidation.isNonEmptyString(req.body.name)) {
      throw new AppError("Please enter valid email.", 400, null);
    }
    if (!GenericValidation.isValidPhoneNumber(req.body.phone)) {
      throw new AppError("Please enter valid password.", 400, null);
    }

    [error, result] = await To(
      AuthHelper.Signup(req.body, req.params, req.flags)
    );

    if (error) {
      throw new AppError(error);
    }

    res.cookie("token", result.data, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message, success: false });
    next();
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

    res.cookie("token", result.data, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message, success: false });
    next();
  }
};

module.exports = { Login, Signup };
