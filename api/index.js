const express = require('express')
const config = require('config')

const app = express()

app.get('/', (_, res) => {
  res.status(200).json({ message: "Bem vindo à Cervejas pelo Mundo" })
})

app.listen(config.get('api.port'), () => console.log(`API rodando na porta ${config.get('api.port')}`))