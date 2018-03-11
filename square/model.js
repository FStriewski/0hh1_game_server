const Sequelize = require('sequelize')
const sequelize = require('../db')

const Square = sequelize.define('square', {
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
  tableName: 'square',
  timestamps: false
})


module.exports = Square
