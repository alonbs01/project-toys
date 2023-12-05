const authControllers = require("./../controllers/authControllers");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .post(authControllers.signUp);
router
  .route("/login")
  .post(authControllers.login);

module.exports = router;
