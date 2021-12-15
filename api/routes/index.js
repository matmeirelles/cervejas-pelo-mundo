const express = require('express')
const beersRoute = require('./beersRoute')
const brandsRoute = require('./brandsRoute')

module.exports = (app) => {
  app.use(express.json())

  app
    .use('/api/beers', beersRoute)
    .use('/api/brands', brandsRoute)
}