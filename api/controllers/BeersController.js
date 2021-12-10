// const database = require('../models')
const { BeersServices } = require('../services')
const { findUniqueElement } = require('../services/BeersServices')

class BeersController {

  static async listAllBeers(_, res) {
    try {
      const allBeers = await BeersServices.findAllElements()
      console.log(allBeers)
      res.status(200).json(allBeers)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async listUniqueBeer(req, res) {
    try {
      const { beerId } = req.params
      const beer = await BeersServices.findUniqueElement(beerId)

      if (!beer) {
        return res.status(404).json({ message: `cerveja de id ${beerId} não encontrada` })
      }

      return res.status(200).json(beer)

    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async createBeer(req, res) {
    try {
      const newBeerData = req.body
      const newBeer = await BeersServices.createElement(newBeerData)

      return res.status(202).json(newBeer)

    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async updateBeer(req, res) {
    try {
      const { beerId } = req.params
      const dataToUpdate = req.body
      let updatedBeer = await BeersServices.findUniqueElement(beerId)

      if (!updatedBeer) {
        return res.status(404).json({ message: `cerveja de id ${beerId} não encontrada` }).end()
      }

      await BeersServices.updateElement(beerId, dataToUpdate)
      updatedBeer = await BeersServices.findUniqueElement(beerId)

      return res.status(200).json(updatedBeer)

    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async deleteBeer(req, res) {
    try {
      const { beerId } = req.params

      const beerToDelete = await BeersServices.findUniqueElement(beerId)

      if (!beerToDelete) {
        return res.status(404).json({ message: `cerveja de id ${beerId} não encontrada` })
      }

      await BeersServices.removeElement(beerId)

      return res.status(200).json({ message: `cerveja de id ${beerId} removida com sucesso` })

    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async restoreBeer(req, res) {
    try {
      const { beerId } = req.params

      const beerToRestore = await BeersServices.findUniqueElement(beerId, false)
      console.log(beerToRestore)

      if (!beerToRestore) {
        return res.status(404).json(`cerveja de id ${beerId} não encontrada`)
      }
      if (beerToRestore.deletedAt === null) {
        return res.status(409).json(`cerveja de id ${beerId} já existe`)
      }

      await BeersServices.restoreElement(beerId)
      const restoredBeer = await BeersServices.findUniqueElement(beerId)

      return res.status(200).json(restoredBeer)

    } catch (err) {
      res.status(500).json({ message: err })
    }
  }
}

module.exports = BeersController