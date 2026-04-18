const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');
const auth = require('../middlewares/auth');

// Public routes
router.get('/', alunoController.listar);
router.get('/:id', alunoController.buscarPorId);

// Rotas protegidas
router.post('/', auth, alunoController.adicionar);
router.put('/:id', auth, alunoController.atualizar);
router.delete('/:id', auth, alunoController.remover);

module.exports = router;