require('dotenv').config({
  silent: process.env.NODE_ENV === 'production'
})
const Model = require('../models');

class ReportController {

  static addReport(req, res) {
    res.render('report/addReport', {
      mapBoxAccessToken: process.env.API_MAPBOX_KEY
    });
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
          LocationId: result.id,
          UserId: req.session.userId,
          deskripsi: req.body.deskripsi,
          foto: (req.file) ? req.file.secure_url : ''
        }
        Model.Report.create(objReport);
        req.flash('message', "berhasil menambahkan laporan")
        res.redirect('/reports');
      })
      .catch((err) => {
        req.flash('error', err.message);
        res.redirect('/reports/addReport');
      })
  }

  static showList(req, res) {

    Model.Report.findAll({
        where: {
          UserId: req.session.userId
        },
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
            id: res.id
          }
        })
        let coords = _results.map(res => {
          return res.Location.koordinat
        })
        res.render('report/home', {
          results, coords
        });
      })
      .catch((err) => {
        req.flash('error', err.message);
        res.render('report/home');
      })
  }

  static formUpdate(req, res) {
    Model.Report.findByPk(req.params.id, {
        include: Model.Location
      })
      .then((report) => {
        res.render('report/edit', {
          report
        });
      })
      .catch((err) => {
        req.flash('error', err.message);
        res.redirect('/reports');
      })
  }

  static update(req, res) {
    Model.Location.findOne({
        where: {
          koordinat: req.body.koordinat
        }
      })
      .then((result) => {
        let objReport = {
          UserId: req.session.userId,
          LocationId: result.id,
          deskripsi: req.body.deskripsi
        }
        return Model.Report.update(objReport, {
          where: {
            id: req.params.id
          }
        })
      })
      .then((data) => {
        res.redirect('/reports');
      })
      .catch((err) => {
        req.flash('error', err.message);
        res.redirect('/reports');
      })
  }

  static delete(req, res) {
    Model.Report.destroy({
        where: {
          id: req.params.id
        }
      })
      .then((data) => {
        res.redirect('/reports');
      })
      .catch((err) => {
        req.flash('error', err.message);
        res.redirect('/reports');
      })
  }
}

module.exports = ReportController;