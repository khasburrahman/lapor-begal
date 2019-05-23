
class ReportController {

  static addReport(req, res) {
    res.render('report/addReport');
  }

  static showList(req, res) {
    res.render('report/home');
  }
}

module.exports = ReportController;