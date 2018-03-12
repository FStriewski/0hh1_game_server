const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game = sequelize.define('game', {
    square: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },{
  tableName: 'game',
  timestamps: false
})


module.exports = Game
