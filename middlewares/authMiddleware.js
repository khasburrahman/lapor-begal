module.exports = (req, res, next) =>  {
    let publicPath = [
        '/',
        '/users/register'
    ]

    let sessionExists = req.session.userId && req.session.userName
    let isLoginPath = req.originalUrl === '/users/login'
    let isInPublicPath = publicPath.includes(req.originalUrl)

    res.locals.user = { 
        userName: req.session.userName,
        id: req.session.userId
    }

    if (!isLoginPath && sessionExists){
        next()
    } else if (!isLoginPath && !sessionExists && !isInPublicPath) {
        req.flash('error', 'kamu belum login')
        res.redirect('/users/login')
    } else if (isLoginPath && sessionExists) {
        req.flash('message', 'kamu tidak perlu login lagi') 
        res.redirect('/')
    } else {
        res.locals.user = null
        next()
    }
}