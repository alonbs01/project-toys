const express = require("express");
const toyControllers = require("../controllers/toyControllers");
const router = express.Router();

router.route("/")
    .get(toyControllers.getToys)
    .post(toyControllers.createToy);


router.route("/search")
    .get(toyControllers.searchToys);

router.route("/category/:catname")
    .get(toyControllers.getByCategory);

router.route("/:editId")
    .put(toyControllers.editToy);

router.route("/:delId")
    .delete(toyControllers.deleteToy);

router.route("/prices")
    .get(toyControllers.getByPrice);

router.route("/single/:id")
    .get(toyControllers.getById);

module.exports = router;