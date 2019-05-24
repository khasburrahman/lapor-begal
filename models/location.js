'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    nama: DataTypes.STRING,
    koordinat: DataTypes.STRING
  }, {});

  Location.prototype.splitKoordinat = function () {
    return this.koordinat.split(',');
  };

  Location.associate = function(models) {
    // associations can be defined here
    Location.hasMany(models.Report);
  };
  return Location;
};