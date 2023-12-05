const Toy = require("../models/toyModel");
const AppError = require("../util/appError");
const asyncCatcher = require("../util/asyncCatcher");

/**
 * get toys
 * @param {Express.Request} req request
 * @param {Express.Response} res response
 */
exports.getToys = asyncCatcher(async (req, res, next) => {
  let { page } = req.query;
  page *= 1;

  if (!page || page <= 0) return next(new AppError(401, "page is not valid"));

  const toys = await Toy.find().skip((page - 1) * 10).limit(10);
  res.status(200).json({
    status: "success",
    data: toys,
  });
});


/**
 * create toy
 * @param {Express.Request} req request
 * @param {Express.Response} res response
 */
exports.createToy = asyncCatcher(async (req, res) => {
  const { name, info, category, img_url, price } = req.body;
  const { user: user_id } = req;

  const newToy = await Toy.create({ name, info, category, img_url, price, user_id });

  res.status(201).json({
    status: "success",
    data: newToy,
  });

});


/**
 * search toys
 * @param {Express.Request} req request
 * @param {Express.Response} res response
 */
exports.searchToys = asyncCatcher(async (req, res, next) => {
  let { s, page } = req.query;
  page *= 1;

  if (!page || page <= 0) return next(new AppError(401, "page is not valid"));
  if (!s) return next(new AppError(401, "search is not valid"));

  const toys = await Toy.find({ $or: [{ name: s }, { info: s }] }).skip((page - 1) * 10).limit(10);
  res.status(200).json({
    status: "success",
    data: toys,
  });
});

/**
 * get toys by category
 * @param {Express.Request} req request
 * @param {Express.Response} res response
 */
exports.getByCategory = asyncCatcher(async (req, res, next) => {
  const { catname } = req.params;
  let { page } = req.query;
  page *= 1;

  if (!page || page <= 0) return next(new AppError(401, "page is not valid"));

  const toys = await Toy.find({ category: catname }).skip((page - 1) * 10).limit(10);
  res.status(200).json({
    status: "success",
    data: toys,
  });
});


/**
 * edit toy
 * @param {Express.Request} req request
 * @param {Express.Response} res response
 */
exports.editToy = asyncCatcher(async (req, res) => {
  const { editId } = req.params;
  const { name, info, category, img_url, price } = req.body;
  const { user: user_id } = req;

  const newToy = await Toy.findByIdAndUpdate(editId, { name, info, category, img_url, price, user_id }, { new: true });

  res.status(200).json({
    status: "success",
    data: newToy,
  });

});

/**
 * delete toy
 * @param {Express.Request} req request
 * @param {Express.Response} res response
 */
exports.deleteToy = asyncCatcher(async (req, res) => {
  const { delId } = req.params;
  const deleted = await Toy.findByIdAndDelete(delId);

  res.status(200).json({
    status: "success",
    data: deleted
  });
});

/**
 * get toys by price
 * @param {Express.Request} req request
 * @param {Express.Response} res response
 */
exports.getByPrice = asyncCatcher(async (req, res, next) => {
  const { min, max } = req.query;
  let { page } = req.query;
  page *= 1;

  if (!page || page <= 0) return next(new AppError(401, "page is not valid"));
  if (!min || !max) return next(new AppError(401, "prices are not valid"));

  const toys = await Toy.find({ price: { $gte: min, $lte: max } }).skip((page - 1) * 10).limit(10);
  res.status(200).json({
    status: "success",
    data: toys,
  });
});

/**
 * get toy by id
 * @param {Express.Request} req request
 * @param {Express.Response} res response
 */
exports.getById = asyncCatcher(async (req, res) => {
  const { id } = req.params;
  const toy = await Toy.findById(id);
  res.status(200).json({
    status: "success",
    data: toy,
  });
});