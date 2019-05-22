const Model = require('../models');

class UserController {

  static displayForm(req, res) {
    res.render('user/register');
  }

  static register(req, res){
    let {username, password, nama, foto} = req.body

    let obj = {
      username,
      password,
      nama,
      foto
    }
    Model.User.create(obj)
    .then(function(data){
      res.send('berhasil register user')
    })
    .catch(function(err){
      res.send(err.message);
    })
  }
}

module.exports = UserController;