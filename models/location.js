'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    nama: DataTypes.STRING,
    koordinat: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.hasMany(models.Report);
  };
  return Location;
};