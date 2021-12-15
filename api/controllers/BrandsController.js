const { BrandsServices } = require('../services')

class BrandsController {

  static async listAllBrands(_, res) {
    try {
      const allBrands = await BrandsServices.findAllElements()
      return res.status(200).json(allBrands)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async listUniqueBrand(req, res) {
    try {
      const { brandId } = req.params
      const brand = await BrandsServices.findUniqueElement(brandId)

      if (!brand) {
        return res.status(404).json({ message: `marca de id ${brandId} não existe` })
      }

      return res.status(200).json(brand)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async createBrand(req, res) {
    try {
      const newBrandData = req.body
      const newBrand = await BrandsServices.createElement(newBrandData)

      return res.status(202).json(newBrand)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async updateBrand(req, res) {
    try {
      const { brandId } = req.params
      const dataToUpdate = req.body
      let updatedBrand = await BrandsServices.findUniqueElement(brandId)

      if (!updatedBrand) {
        return res.status(404).json({ message: `marca de id ${brandId} não existe` })
      }

      await BrandsServices.updateElement(brandId, dataToUpdate)
      updatedBrand = await BrandsServices.findUniqueElement(brandId)

      return res.status(200).json(updatedBrand)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async deleteBrand(req, res) {
    try {
      const { brandId } = req.params
      const brandToDelete = await BrandsServices.findUniqueElement(brandId)

      if (!brandToDelete) {
        return res.status(404).json({ message: `marca de id ${brandId} não existe` })
      }

      await BrandsServices.removeElement(brandId)
      return res.status(200).json({ message: `Marca de id ${brandId} foi removida com sucesso` })
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async restoreBrand(req, res) {
    try {
      const { brandId } = req.params
      let brandToRestore = await BrandsServices.findUniqueElement(brandId, false)

      if (!brandToRestore) {
        return res.status(404).json({ message: `marca de id ${brandId} não existe` })
      }

      await BrandsServices.restoreElement(brandId)
      brandToRestore = await BrandsServices.findUniqueElement(brandId)

      return res.status(200).json(brandToRestore)
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}

module.exports = BrandsController