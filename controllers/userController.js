const createHash = require('../helpers/createHash')
const { User } = require('../models')

class UserController {

  static register(req, res) {
    res.render('user/register');
  }

  static postLogin(req, res) {
    const { username, password } = req.body
    const hash = createHash(password)
    const context = {}

    User.findOne({where:{username, password: hash}})
      .then(user => {
        if (user) {
          context.msg = "berhasil login sebagai "+user.username
          res.render('user/login', context)
        } else {
          req.flash('error', 'username / password is invalid')
          res.redirect('/users/login')
        }
      })
      .catch(err => {
        req.flash('error', err)
        res.redirect('/users/login')
      })
  }

  static getLogin(req, res) {
    res.render('user/login')
  }
}

module.exports = UserController;