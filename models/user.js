const createHash = require('../helpers/createHash')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nama: DataTypes.STRING,
    foto: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Report);
  };

  User.addHook('beforeCreate', 'hashPassword', (user) => {
    user.password = createHash(user.password)
  })

  return User;
};