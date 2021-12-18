const router = require('express').Router()
const { BrandsController } = require('../controllers')

router.route('/')
  .get(BrandsController.listAllBrands)
  .post(BrandsController.createBrand)

router.route('/:brandId')
  .get(BrandsController.listUniqueBrand)
  .patch(BrandsController.updateBrand)
  .delete(BrandsController.deleteBrand)
  .post(BrandsController.restoreBrand)

router.route('/:brandId/beers')
  .get(BrandsController.listAllBeersFromBrand)

module.exports = router