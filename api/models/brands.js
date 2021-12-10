'use strict';
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Brands.hasMany(models.Beers, { foreignKey: 'brand' })
    }

  }
  Brands.init({
    name: DataTypes.STRING,
    cnpj: DataTypes.STRING(14),
    region: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Brands',
    paranoid: true
  })
  return Brands
}