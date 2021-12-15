const router = require('express').Router()
const { BeersController } = require('../controllers')

//Beers
router.route('/')
  .get(BeersController.listAllBeers)
  .post(BeersController.createBeer)

router.route('/:beerId')
  .get(BeersController.listUniqueBeer)
  .patch(BeersController.updateBeer)
  .delete(BeersController.deleteBeer)
  .post(BeersController.restoreBeer)

module.exports = router