
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('square', [
      (0,0,0,false),(0,1,0,false),(0,2,0,false),(0,3,0,false),(0,4,0,false),(0,5,0,false),
      (1,0,0,false),(1,1,0,false),(1,2,0,false),(1,3,0,false),(1,4,0,false),(1,5,0,false),
      (2,0,0,false),(2,1,0,false),(2,2,0,false),(2,3,0,false),(2,4,0,false),(2,5,0,false),
      (3,0,0,false),(3,1,0,false),(3,2,0,false),(3,3,0,false),(3,4,0,false),(3,5,0,false),
      (4,0,0,false),(4,1,0,false),(4,2,0,false),(4,3,0,false),(4,4,0,false),(4,5,0,false),
      (5,0,0,false),(5,1,0,false),(5,2,0,false),(5,3,0,false),(5,4,0,false),(5,5,0,false)

    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('square', null, {});
  }
};
