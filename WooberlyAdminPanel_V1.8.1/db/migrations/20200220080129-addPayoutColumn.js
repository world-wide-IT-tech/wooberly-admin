'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return Promise.all([
      queryInterface.addColumn('Booking', 'isPayoutPaid', {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }),
      queryInterface.addColumn('Booking', 'isBanStatus', {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
