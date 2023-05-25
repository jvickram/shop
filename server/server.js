const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const ConnectToDB = require("./Utils/DBConnect");
const authRoute = require("./Routes/Auth");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const { MONGO_URL, PORT } = process.env;

// Initialize App
const app = express();

// cors middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Coockie parser middleware
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser());

// Parse json to server
app.use(express.json());

// Routes
app.use("/", authRoute);

// Start server
app.listen(PORT, async () => {
  try {
    console.log(`Server is listening on port ${PORT}`);
    // Connect to db
    let status = await ConnectToDB(MONGO_URL);
    console.log(status);
  } catch (error) {
    console.error(error);
  }
});
