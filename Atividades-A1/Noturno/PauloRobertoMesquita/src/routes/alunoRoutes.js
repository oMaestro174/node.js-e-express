const express = require('express');
const router = express.Router();
const alunoModel = require('../models/alunoModel');

router.get('/', (req, res) => {
    const alunos = alunoModel.getAllAlunos();
    res.status(200).json(alunos);
});

router.post('/', (req, res) => {
    // Se o corpo da requisição for um Array com múltiplos alunos de uma vez
    if (Array.isArray(req.body)) {
        const novosAlunos = req.body.map(aluno => alunoModel.addAluno(aluno));
        return res.status(201).json(novosAlunos);
    }

    const novoAluno = alunoModel.addAluno(req.body);
    res.status(201).json(novoAluno);
});

module.exports = router;

//Tentando enviar novamente o pull request