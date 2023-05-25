const jwt = require("jsonwebtoken");
const path = require("path");
const AppError = require("../Utils/AppError");
const GenericValidation = require("../Utils/GenericValidation");
const { createJwtSecretToken } = require("../Utils/SecretToken");
const bcrypt = require("bcrypt");
const UserService = require("../Services/User");
const To = require("../Utils/To");
const Common = require("../Utils/Common");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const UserVerification = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        let error, user;
        [error, user] = await To(UserService.getOne(data.id));

        if (error) {
          throw new AppError(error);
        }

        if (user) {
          return res.json({ status: true, user: user.username });
        } else {
          return res.json({ status: false });
        }
      }
    });
  } catch (error) {
    console.error("Error while user verification ", error);
  }
};

const Login = async (user, params, flags) => {
  try {
    let error, result, existingUser;
    if (!params) params = {};
    if (!flags) flags = {};

    [error, existingUser] = await To(UserService.getOne(user, params, flags));

    if (error) {
      throw new AppError(error.message, error.code, error.data);
    }

    if (GenericValidation.isSuccessResponse(existingUser)) {
      const auth = await bcrypt.compare(password, existingUser.password);
      if (!auth) {
        return Promise.resolve({
          code: 200,
          message: "Incorrect password or email",
        });
      }

      const token = createJwtSecretToken(Common.cleanUser(existingUser));
      return Promise.resolve({
        code: 200,
        message: "Successfully logged in.",
        data: token,
      });
    }
  } catch (error) {
    if (error && error.code && error.message) {
      return Promise.reject(error);
    }
    return Promise.reject({ code: 409, message: "Error while login user " + error.message });
  }
};

const Signup = async (user, params, flags) => {
  try {
    let error, result, existingUser;
    if (!params) params = {};
    if (!flags) flags = {};

    // check if user exist
    [error, existingUser] = await To(
      UserService.getOne(user, params, flags)
    );

    if (error) {
      throw new AppError(error.message, error.code, error.data);
    }

    if (GenericValidation.isSuccessResponse(existingUser)) {
      return Promise.resolve({ code: 200, message: "User already exist" });
    }

    // create user
    let newUser;
    [error, newUser] = await To(UserService.create(user, params, flags));

    if (error) {
      throw new AppError(error.message, error.code, error.data);
    }

    // create jwt token
    const token = createJwtSecretToken(Common.cleanUser(newUser));
    return Promise.resolve({
      code: 200,
      message: "Successfully signed in.",
      data: token,
    });
  } catch (error) {
    if (error && error.code && error.message) {
      return Promise.resolve(error);
    }
    return Promise.reject({ code: 409, message: "Error while signin user " + error.message });
  }
};

module.exports = {
  UserVerification,
  Login,
  Signup,
};
