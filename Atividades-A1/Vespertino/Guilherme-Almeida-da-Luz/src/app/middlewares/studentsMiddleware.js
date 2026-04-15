const app = require('../server.js')

app.use('/students', (req, res, next) => {
    console.log('Passou pelo Middleware da rota "/students"...')
    next()
})