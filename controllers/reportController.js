require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })
const Model = require('../models');

class ReportController {

  static addReport(req, res) {
    res.render('report/addReport', { mapBoxAccessToken: process.env.API_MAPBOX_KEY });
  }

  static create(req, res) {
    Model.Location.findOne({
      where: {
        koordinat: req.body.koordinat
      }
    })
    .then((result) => {
      if (!result) {
        let objLocation = {
          nama: req.body.nama,
          koordinat: req.body.koordinat
        }
        return Model.Location.create(objLocation)
      } else {
        return result
      }
    })
    .then((result) => {
      let objReport = {
        LocationId: result.id
      }
      Model.Report.create()
    })
    .catch((err) => {
      req.flash('error', err.message);
      res.redirect('/reports/addReport');
    })
  }

  static showList(req, res) {
    res.render('report/home');
  }

  static update(req, res) {
    res.render('report/edit');
  }
}

module.exports = ReportController;