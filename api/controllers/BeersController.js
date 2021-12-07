const database = require('../models')

class BeersController {

  static async listAllBeers(_, res) {

    return await database.Beers.findAll()
      .then((allBeers) => {
        res.status(200).json(allBeers)
      })
  }

  static async listUniqueBeer(req, res) {
    try {
      const { beerId } = req.params
      const beer = await database.Beers.findOne({
        where: {
          id: Number(beerId)
        }
      })

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
      const beerData = req.body
      const newBeer = await database.Beers.create(beerData)

      return res.status(202).json(newBeer)

    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async updateBeer(req, res) {
    try {
      const { beerId } = req.params
      const updatableData = req.body

      let updatedBeer = await database.Beers.findOne({
        where: {
          id: Number(beerId)
        }
      })

      if (!updatedBeer) {
        return res.status(404).json({ message: `cerveja de id ${beerId} não encontrada` })
      }

      await database.Beers.update(updatableData, {
        where: {
          id: Number(beerId)
        }
      })

      updatedBeer = await database.Beers.findOne({
        where: {
          id: Number(beerId)
        }
      })

      return res.status(200).json(updatedBeer)

    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async deleteBeer(req, res) {
    try {
      const { beerId } = req.params

      const beerToDelete = await database.Beers.findOne({
        where: {
          id: Number(beerId)
        }
      })

      if (!beerToDelete) {
        return res.status(404).json({ message: `cerveja de id ${beerId} não encontrada` })
      }

      await database.Beers.destroy({
        where: {
          id: Number(beerId)
        }
      })

      return res.status(200).json({ message: `cerveja de id ${beerId} removida com sucesso` })

    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async restoreBeer(req, res) {
    try {
      const { beerId } = req.params

      await database.Beers.restore({
        where: {
          id: Number(beerId)
        }
      })

      const restoredBeer = await database.Beers.findOne({
        where: {
          id: Number(beerId)
        }
      })

      return res.status(200).json(restoredBeer)

    } catch (err) {
      res.status(500).json({ message: err })
    }
  }
}

module.exports = BeersController