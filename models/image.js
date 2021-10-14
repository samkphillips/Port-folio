'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Portfolio, { foreignKey: 'portfolioId' })
    }
  }
  Image.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.TEXT,
      settings: DataTypes.JSONB,
      portfolioId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'portfolios',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Image',
      tableName: 'images'
    }
  )
  return Image
}
