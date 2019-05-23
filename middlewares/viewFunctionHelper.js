module.exports = (req, res, next) => {
    res.locals.getFirstNChar = require('../helpers/getFirstNChar')
    next()
}