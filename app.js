const express = require("express");
const errorHandler = require("./util/errorHandler");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const toyRouter = require("./routes/toyRoutes");
const AppError = require("./util/appError");
const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use(authRouter);
app.use("/toys", toyRouter);


app.use(errorHandler);
module.exports = app;