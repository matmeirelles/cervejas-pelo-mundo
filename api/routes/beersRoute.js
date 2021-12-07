const router = require('express').Router()
const BeersController = require('../controllers/BeersController')

//Beers
router.get('/beers', BeersController.listAllBeers)

router.get('/beers/:beerId', BeersController.listUniqueBeer)

router.post('/beers', BeersController.createBeer)

router.patch('/beers/:beerId', BeersController.updateBeer)

router.delete('/beers/:beerId', BeersController.deleteBeer)

router.post('/beers/:beerId', BeersController.restoreBeer)

module.exports = router