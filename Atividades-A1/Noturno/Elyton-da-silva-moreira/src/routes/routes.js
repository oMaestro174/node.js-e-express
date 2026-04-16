const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.post('/alunos', controller.createAluno)
router.get('/alunos', controller.listAlunos)
router.get('/alunos/:id', controller.findAluno)

module.exports = router