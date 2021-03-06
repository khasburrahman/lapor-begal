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
          req.session.userId = user.id;
          req.session.userName = user.username;
          req.session.save();
          req.flash('message', "berhasil login sebagai " + user.username)
          res.redirect('/')
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

  static logout(req, res) {
    req.session.destroy()
    req.flash("message", 'kamu sudah logout')
    res.redirect('/')
  }

  static getLogin(req, res) {
    res.render('user/login')
  }

  static register(req, res) {
    let { username, password, nama } = req.body

    let obj = {
      username,
      password,
      nama,
      foto: (req.file) ? req.file.secure_url : ''
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