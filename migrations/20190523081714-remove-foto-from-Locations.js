'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Locations', 'foto');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Locations', 'foto', Sequelize.STRING);
  }
};
