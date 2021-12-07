const express = require('express')
const beersRoute = require('./beersRoute')

module.exports = (app) => {
  app.use(express.json())

  app.use('/api', beersRoute)
}