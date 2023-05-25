const jwt = require("jsonwebtoken");
const path = require("path");
const AppError = require("../Utils/AppError");
const GenericValidation = require("../Utils/GenericValidation");
const { createSecretToken } = require("../Utils/SecretToken");
const bcrypt = require("bcrypt");
const UserService = require("../Services/User");
const To = require("../Utils/To");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const UserVerification = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      console.log("Token ", token);
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

const Login = async (creds, params, flags) => {
  try {
    let error, result, user;
    if (!params) params = {};
    if (!flags) flags = {};

    [error, user] = await To(UserService.getOne(creds, params, flags));

    if (error) {
      throw new AppError(error.message, error.code, error.data);
    }

    if (user && GenericValidation.isSuccessResponse(user)) {
      const auth = await bcrypt.compare(password, user.password);
      if (!auth) {
        return Promise.resolve({
          code: 200,
          message: "Incorrect password or email",
        });
      }

      const token = createSecretToken(user._id);
      result.token = token;
      return Promise.resolve({
        code: 200,
        message: "Successfully logged in.",
        data: result,
      });
    }
  } catch (error) {
    if (error && error.code && error.message) {
      return Promise.reject(error);
    }
    return Promise.reject({ code: 409, message: "Error while login user" });
  }
};

const Signup = async (creds, params, flags) => {
  // try {
  //   let error, result, user;
  //   if (!params) params = {};
  //   if (!flags) flags = {};
  //   [error, user] = await To(UserService.getOne(creds, params, flags));
  //   if (error) {
  //     throw new AppError(error.message, error.code, error.data)
  //   }
  //   if (user && GenericValidation.isSuccessResponse(user)) {
  //     const auth = await bcrypt.compare(password, user.password);
  //     if (!auth) {
  //       return Promise.resolve({code: 200, message: "Incorrect password or email"});
  //     }
  //     const token = createSecretToken(user._id);
  //     result.token = token;
  //     return Promise.resolve({code: 200, message: "Successfully logged in.", data: result});
  //   }
  // } catch (error) {
  //   if (error && error.code && error.message) {
  //     return Promise.resolve(error);
  //   }
  //   return Promise.reject({code: 409, message: "Error while login user"})
  // }
};

module.exports = {
  UserVerification,
  Login,
  Signup,
};
