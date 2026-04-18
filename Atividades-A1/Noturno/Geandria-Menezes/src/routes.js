const express = require("express");
const router = express.Router();
const { listarAlunos, adicionarAluno } = require("./alunos");

// GET /alunos — lista todos os alunos
router.get("/alunos", (req, res) => {
  const alunos = listarAlunos();
  res.status(200).json(alunos);
});

// POST /alunos — adiciona um aluno
router.post("/alunos", (req, res) => {
  const { nome, matricula } = req.body;
  const novoAluno = adicionarAluno({ nome, matricula });
  res.status(201).json(novoAluno);
});

module.exports = router;