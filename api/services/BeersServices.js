const Services = require('./Services')

class BeersServices extends Services {

  constructor() {
    super('Beers')
  }

}

module.exports = new BeersServices()