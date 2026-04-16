const express = require('express');
const router = express.Router();
const { listarAlunos, adicionarAluno } = require('../modules/listaalunos');

router.get('/', (req, res) => {
  const alunos = listarAlunos();
  res.status(200).json(alunos);
});

router.post('/', (req, res) => {
  const { nome, curso } = req.body;

  if (!nome || !curso) {
    return res.status(400).json({ erro: 'Os campos "nome" e "curso" são obrigatórios.' });
  }

  const novoAluno = adicionarAluno(nome, curso);
  res.status(201).json(novoAluno);
});

module.exports = router;