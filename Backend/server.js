require("dotenv").config(); //dotenv is a Node.js package that loads environment variables from a .env file into process.env
const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");

const mongoose = require("mongoose");
const connectDB = require("./config/dbCon");
const verifyJWT = require("./middleware/verifyJWT");

const PORT = process.env.PORT;

//connect to mongoDB
connectDB();

//app.use() in Express.js is a method to register middleware or mount routes to your Express app.
app.use(cors(corsOptions)); //allows frontend apps to use the backend services
app.use(express.urlencoded({ extended: false })); //parses URL-encoded form data and extended:false indicates that it uses simpler querysting library
app.use(express.json()); //used for parsing the json request bodies
app.use(cookieParser()); //middleware for cookies

app.use("/students-refreshToken", require("./routes/students-refreshToken"));
app.use("/students-auth", require("./routes/students-auth")); //generated the access token and applies to the routes called below this line
app.use(verifyJWT);

//Routes
app.use("/students", require("./routes/studentsAPI"));
app.use("/departments", require("./routes/departmentsAPI"));
app.use("/courses", require("./routes/coursesAPI"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
