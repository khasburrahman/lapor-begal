require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })

class ReportController {

  static addReport(req, res) {
    res.render('report/addReport', { mapBoxAccessToken: process.env.API_MAPBOX_KEY });
  }

  static showList(req, res) {
    res.render('report/home');
  }

  static update(req, res) {
    res.render('report/edit');
  }
}

module.exports = ReportController;