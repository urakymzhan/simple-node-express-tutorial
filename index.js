// import modules
const express = require("express");
// const path = require("path");
const studentsRoute = require("./routes/students.js");

// create our app/server
const app = express();

// middleware
const timeLog = (req, res, next) => {
  console.log(`Request hit at: ${Date.now()}`);
  // always call next in your middlewares
  next();
};

const timeLog2 = (req, res, next) => {
  console.log(`Request was done at: ${Date.now()}`);
  // always call next in your middlewares
  next();
};

// this middleware will be applied to all routes
app.use(timeLog);
// app.use(timeLog2);

// index route
// single middleware on single route example
app.get("/", timeLog2, (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

// students routes
app.use("/api/students", studentsRoute);

// port
const PORT = process.env.PORT || 3000; //

// listen
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
