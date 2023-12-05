/**
 * handle error
 * @param {Error} err error
 * @param {Express.Request} req request
 * @param {Express.Response} res response
 * @param {Express.NextFunction} next next
 */
module.exports = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(400).json({
        status: "fail",
        message: err.message
    });
};