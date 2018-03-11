const Sequelize = require('sequelize')
const sequelize = require('../db')

const Test = sequelize.define('test', {
    rowid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    colid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    locked: {
      type: Sequelize.BOOLEAN,
      allowNull: false
      }
  },{
  tableName: 'test',
  timestamps: false
})


module.exports = Test
