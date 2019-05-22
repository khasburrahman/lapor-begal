'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Reports', ['LocationId'], {
      type: 'foreign key',
      name: 'fk_lokasi',
      references: { //Required field
        table: 'Locations',
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return removeConstraint('Reports', 'fk_lokasi');
  }
};
