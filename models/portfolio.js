'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Portfolio.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Portfolio.hasMany(models.Image, {
        foreignKey: 'portfolioId'
      })
    }
  }
  Portfolio.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      settings: DataTypes.JSONB,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Portfolio',
      tableName: 'portfolios'
    }
  )
  return Portfolio
}
