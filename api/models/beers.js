'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Beers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Beers.belongsTo(models.Brands, {
        foreignKey: 'brand'
      })
    }
  }
  Beers.init({
    name: DataTypes.STRING,
    brand: DataTypes.INTEGER,
    ibu: DataTypes.INTEGER,
    alcohol: DataTypes.FLOAT,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beers',
    paranoid: true
  })
  return Beers
}