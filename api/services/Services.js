const database = require('../models')

class Services {
  constructor(modelName) {
    this.modelName = modelName
  }

  async findAllElements(paranoidValue = true) {
    return database[this.modelName].findAll({ raw: true, paranoid: paranoidValue })
  }

  async findUniqueElement(id, paranoidValue = true) {
    return database[this.modelName].findOne({ where: { id: Number(id) }, raw: true, paranoid: paranoidValue })
  }

  async createElement(newElementData) {
    return database[this.modelName].create(newElementData)
  }

  async updateElement(id, elementUpdateData) {
    return database[this.modelName].update(elementUpdateData, { where: { id: Number(id) } })
  }

  async removeElement(id) {
    return database[this.modelName].destroy({ where: { id: Number(id) } })
  }

  async restoreElement(id) {
    return database[this.modelName].restore({ where: { id: Number(id) } })
  }

}

module.exports = Services