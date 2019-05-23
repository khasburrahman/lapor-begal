
class LocationController {

  static addLocation(req, res) {
    res.render('location/addLocation');
  }

  static update(req, res) {
    res.render('location/edit');
  }
}

module.exports = LocationController;