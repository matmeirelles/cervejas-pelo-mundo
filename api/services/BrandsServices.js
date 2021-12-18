const BeersServices = require('./BeersServices')
const Services = require('./Services')
const database = require('../models')

class BrandsServices extends Services {

  constructor() {
    super('Brands')
    this.beers = BeersServices
  }

  async findAllBeers(brandId) {
    return await this.beers.findAllElements({ brand: Number(brandId) })
  }

  async removeBrand(brandId) {
    return await database.sequelize.transaction(async (transaction) => {
      await this.beers.removeAllElements({ brand: Number(brandId) }, { transaction: transaction })
      await super.removeElement(Number(brandId), { transaction: transaction })
    })
  }

  async restoreBrand(brandId) {
    return await database.sequelize.transaction(async (transaction) => {
      await super.restoreElement(Number(brandId), { transaction: transaction })
      await this.beers.restoreAllElements({ brand: Number(brandId) }, { transaction: transaction })
    })
  }

}

module.exports = new BrandsServices()