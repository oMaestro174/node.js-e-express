const express = require('express')
const server = express()
const port = 3000

server.use(express.json())

server.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor da API!')
})

server.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`)
})

module.exports = server