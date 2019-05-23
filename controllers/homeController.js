const Model = require('../models');

class HomeController {

  static show(req, res) {
    Model.Report.findAll({
      include: {
        model: Model.Location
      }
    })
    .then((results) => {
      res.render('home', {
        results
      });
    })
    .catch((err) => {
      req.flash('error', err.message);
      res.redirect('/reports');
    })
  }
}

module.exports = HomeController;