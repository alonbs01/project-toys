const authControllers = require("./../controllers/authControllers");
const express = require("express");

const router = express.Router();

router
    .route("*")
    .post(authControllers.verifyToken)
    .put(authControllers.verifyToken)
    .delete(authControllers.verifyToken);

module.exports = router;