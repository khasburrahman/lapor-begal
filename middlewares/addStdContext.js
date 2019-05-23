module.exports = (req, res, next) => {
    res.locals.err = null
    res.locals.msg = null
    next()
}