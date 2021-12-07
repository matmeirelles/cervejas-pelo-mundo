const express = require('express')
const router = require('./routes')
const port = 3000

const app = express()

router(app)

app.listen(port, () => console.log(`API rodando na porta ${port}`))