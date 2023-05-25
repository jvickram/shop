const Mongoose = require("mongoose");

const retry = (maxRetries, cb) => {
  return cb().catch((err) => {
    if (maxRetries <= 0) {
      throw err;
    }
    console.log(`${maxRetries - 1} attempts remaining... for ${cb.name}`);
    return retry(maxRetries - 1, cb);
  });
};

const ConnectToDB = (URL) => {
  return new Promise((resolve, reject) => {
    try {
      Mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => {
          return resolve("MongoDB is connected successfully");
        })
        .catch((err) => {
          console.error(err);
          retry(3, ConnectToDB);
        });
    } catch (error) {
      return reject(err);
    }
  });
};

module.exports = ConnectToDB;
