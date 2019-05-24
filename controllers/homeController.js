const Model = require('../models');

class HomeController {

  static show(req, res) {
    Model.Report.findAll({
      include: {
        model: Model.Location
      }
    })
    .then((_results) => {
      let results = _results.map(res => {
        return {
          foto: res.foto,
          deskripsi: res.deskripsi,
          lokasi: (res.Location) ? res.Location.nama : '',
        }
      })
      let coords = _results.map(res => {
        return res.Location.koordinat
      })
      
      res.render('home', {
        results, coords
      });
    })
    .catch((err) => {
      req.flash('error', err.message);
      res.render('home', {results: [], coords:null});
    })
  }
}

module.exports = HomeController;