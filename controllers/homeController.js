const Model = require('../models');

class HomeController {

  static show(req, res) {
    Model.Report.findAll({
      include: {
        model: Model.Location
      }
    })
    .then((results) => {
      results = results.map(res => {
        return {
          foto: res.foto,
          deskripsi: res.deskripsi,
          lokasi: (res.Location) ? res.Location.nama : '',
        }
      })
      let coords = results.map(res => {
        return res.Location
      })
      res.render('home', {
        results, coords
      });
    })
    .catch((err) => {
      req.flash('error', err.message);
      res.redirect('/reports');
    })
  }
}

module.exports = HomeController;