const Services = require('./Services')

class BrandsServices extends Services {

  constructor() {
    super('Brands')
  }

}

module.exports = new BrandsServices()