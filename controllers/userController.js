const createHash = require('../helpers/createHash')
const { User } = require('../models')

class UserController {

  static displayForm(req, res) {
    res.render('user/register');
  }

  static postLogin(req, res) {
    const { username, password } = req.body
    const hash = createHash(password)
    const context = {}

    User.findOne({ where: { username, password: hash } })
      .then(user => {
        if (user) {
          req.flash('message', "berhasil login sebagai " + user.username)
          res.render('user/login', context)
        } else {
          req.flash('error', 'username / password is invalid')
          res.redirect('/users/login')
        }
      })
      .catch(err => {
        req.flash('error', err.toString())
        res.redirect('/users/login')
      })
  }

  static getLogin(req, res) {
    res.render('user/login')
  }

  static register(req, res) {
    let { username, password, nama, foto } = req.body

    let obj = {
      username,
      password,
      nama,
      foto
    }
    User.create(obj)
      .then(function (data) {
        req.flash('message', 'berhasil register user ' + data.username)
        res.redirect('/')
      })
      .catch(function (err) {
        req.flash('error', err.toString())
        res.redirect('/users/register')
      })
  }

}

module.exports = UserController;