
class ReportController {

  static addReport(req, res) {
    res.render('report/addReport');
  }

  static showList(req, res) {
    res.render('report/home');
  }

  static update(req, res) {
    res.render('report/edit');
  }
}

module.exports = ReportController;