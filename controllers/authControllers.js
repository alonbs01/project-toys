const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const AppError = require("../util/appError");
const asyncCatcher = require("../util/asyncCatcher");

/**
 * signup using email name and password
 */
exports.signUp = asyncCatcher(async (req, res, next) => {
  const { email, name, password } = req.body;
  const newUser = await User.create({
    email,
    name,
    password
  });

  const token = jwt.sign({ id: newUser._id, expiresIn: "90d" }, process.env.SECRET);
  res.status(201).json({
    status: "success",
    data: newUser,
    token
  });
});

/**
 * login by email and password
 */
exports.login = asyncCatcher(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
  if (!user) return next(new AppError(401, "user is not valid"));
  const decoded = await user.checkPassword(password, user.password);
  if (!decoded) return next(new AppError(401, "password is not valid"));

  const token = jwt.sign({ id: user._id, expiresIn: "90d" }, process.env.SECRET);

  res.status(200).json({
    status: "success",
    token
  });
});

/**
 * verify api key and save user id
 */
exports.verifyToken = asyncCatcher(async (req, res, next) => {
  const token = req.headers["x-api-key"];
  const decoded = jwt.verify(token, process.env.SECRET);
  req.user = decoded.id;
  next();
});