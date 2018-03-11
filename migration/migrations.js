module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('square', {
      rowid: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      colid: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      locked: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }  ,  {
        timestamps: false,
        createdAt: false,
        updatedAt: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('square');
  }
};
