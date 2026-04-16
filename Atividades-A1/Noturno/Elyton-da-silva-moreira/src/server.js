const express = require('express')
const app = express()

const alunosRoutes = require('./routes/routes')
const logger = require('./middlewares/logger')

app.use(express.json())
app.use(logger)

app.use(alunosRoutes)


app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})