/**
 * catch async function error
 * @param {Function} fn callback function
 * @returns {Function} function after error catched
 */
const asyncCatcher = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  }
};

module.exports = asyncCatcher;