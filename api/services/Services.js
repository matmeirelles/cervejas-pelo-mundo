const database = require('../models')

class Services {
  constructor(modelName) {
    this.modelName = modelName
  }

  async findAllElements(where = {}, paranoidValue = true) {
    return database[this.modelName].findAll({ where: where, raw: true, paranoid: paranoidValue })
  }

  async findUniqueElement(id, paranoidValue = true) {
    return database[this.modelName].findOne({ where: { id: Number(id) }, raw: true, paranoid: paranoidValue })
  }
  s
  async createElement(newElementData) {
    return database[this.modelName].create(newElementData)
  }

  async updateElement(id, elementUpdateData) {
    return database[this.modelName].update(elementUpdateData, { where: { id: Number(id) } })
  }

  async removeElement(id, transaction) {
    return database[this.modelName].destroy({ where: { id: Number(id) } }, transaction)
  }

  async removeAllElements(where = {}, transaction) {
    return database[this.modelName].destroy({ where: where }, transaction)
  }

  async restoreElement(id, transaction) {
    return database[this.modelName].restore({ where: { id: Number(id) } }, transaction)
  }

  async restoreAllElements(where = {}, transaction) {
    return database[this.modelName].restore({ where: where }, transaction)
  }

}

module.exports = Services