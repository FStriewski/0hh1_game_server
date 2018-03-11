const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game = sequelize.define('game', {
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
      }
  },{
  tableName: 'game',
  timestamps: false
})


module.exports = Game
