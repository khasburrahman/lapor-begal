require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })

class ReportController {

  static addReport(req, res) {
    res.render('report/addReport', { mapBoxAccessToken: process.env.API_MAPBOX_KEY });
  }
}

module.exports = ReportController;