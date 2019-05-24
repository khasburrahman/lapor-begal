const Model = require('../models')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    LocationId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    deskripsi: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {});

  Report.getReportbyUserId = function (id, Model) {
    return Report.findAll({
        where: {
          UserId: id
        },
        include: {
          model: Model
        }
      })
  }

  Report.associate = function (models) {
    // associations can be defined here
    Report.belongsTo(models.Location);
    Report.belongsTo(models.User);
  };
  return Report;
};