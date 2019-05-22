'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    LocationId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    deskripsi: DataTypes.STRING
  }, {});
  Report.associate = function(models) {
    // associations can be defined here
  };
  return Report;
};