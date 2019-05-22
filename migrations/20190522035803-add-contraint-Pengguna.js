'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Reports', ['UserId'], {
      type: 'foreign key',
      name: 'fk_pengguna',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return removeConstraint('Users', 'fk_pengguna');
  }
};
