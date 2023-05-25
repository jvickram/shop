// DB calls
const Constants = require("../Utils/Constants");
const Common = require("../Utils/Common");

const getAll = async (creds, params, flags) => {
    try {
        let result;
        result = await User.find({}).exec();

        if (!result) {
            return Promise.resolve({code: 404, message: "No user available", data: null});
        }

        return Promise.resolve(result);
    } catch (error) {
        if (error.code == Constants.MONGO.ERROR.CODE.CURSOR_NOT_FOUND || (error != null && JSON.stringify(error).includes('Cursor not found'))) {
            Common.terminateProcess()
        } else {
            return Promise.reject({code: 409, message: 'Error while fetching users: ' + error})
        }
    }
}

const getOne = async (creds, params, flags) => {
    try {
        let result;
        if (creds._id) {
            result = await User.findById({ _id: creds._id }).exec();
        }

        if (creds.email) {
            result = await User.findOne({ email: creds.email }).exec();
        }

        return Promise.resolve(result);
    } catch (error) {
        if (error.code == Constants.MONGO.ERROR.CODE.CURSOR_NOT_FOUND || (error != null && JSON.stringify(error).includes('Cursor not found'))) {
            Common.terminateProcess()
        } else {
            return Promise.reject({code: 409, message: 'Error while fetching one user: ' + error})
        }
    }
}

const updateOne = async (creds, params, flags) => {
    // try {
    //     let result;
    //     if (creds._id) {
    //         result = await User.findOne({ _id: creds._id }).exec();
    //     }

    //     if (creds.email) {
    //         result = await User.findOne({ email: creds.email }).exec();
    //     }

    //     if (!result) {
    //         return Promise.resolve({code: 404, message: "User not found!", data: null});
    //     }

    //     return Promise.resolve(result);
    // } catch (error) {
    //     if (error.code == Constants.MONGO.ERROR.CODE.CURSOR_NOT_FOUND || (error != null && JSON.stringify(error).includes('Cursor not found'))) {
    //         Common.terminateProcess()
    //     } else {
    //         return Promise.reject({code: 409, message: 'Error while fetching one user: ' + error})
    //     }
    // }
}

const deleteOne = async (creds, params, flags) => {
    // try {
    //     let result;
    //     if (creds._id) {
    //         result = await User.findOne({ _id: creds._id }).exec();
    //     }

    //     if (creds.email) {
    //         result = await User.findOne({ email: creds.email }).exec();
    //     }

    //     if (!result) {
    //         return Promise.resolve({code: 404, message: "User not found!", data: null});
    //     }

    //     return Promise.resolve(result);
    // } catch (error) {
    //     if (error.code == Constants.MONGO.ERROR.CODE.CURSOR_NOT_FOUND || (error != null && JSON.stringify(error).includes('Cursor not found'))) {
    //         Common.terminateProcess()
    //     } else {
    //         return Promise.reject({code: 409, message: 'Error while fetching one user: ' + error})
    //     }
    // }
}

const search = async (creds, params, flags) => {
    // try {
    //     let result;
    //     if (creds._id) {
    //         result = await User.findOne({ _id: creds._id }).exec();
    //     }

    //     if (creds.email) {
    //         result = await User.findOne({ email: creds.email }).exec();
    //     }

    //     if (!result) {
    //         return Promise.resolve({code: 404, message: "User not found!", data: null});
    //     }

    //     return Promise.resolve(result);
    // } catch (error) {
    //     if (error.code == Constants.MONGO.ERROR.CODE.CURSOR_NOT_FOUND || (error != null && JSON.stringify(error).includes('Cursor not found'))) {
    //         Common.terminateProcess()
    //     } else {
    //         return Promise.reject({code: 409, message: 'Error while fetching one user: ' + error})
    //     }
    // }
}

module.exports = {
    getAll,
    getOne,
    updateOne,
    deleteOne,
    search
}