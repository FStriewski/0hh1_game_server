const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game = sequelize.define('game', {
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
  tableName: 'game',
  timestamps: false
})


module.exports = Game