const alunos = require('../data/alunos')

function createAluno(req, res) {
  const { nome, email, idade, curso, periodo, situacao } = req.body

  if (!nome || !email || !idade || !curso || !periodo) {
    return res.status(400).json({ erro: "Preencha todos os campos obrigatórios." })
  }

  const novoAluno = {
    id: alunos.length + 1,
    nome,
    email,
    idade,
    curso,
    periodo,
    situacao: situacao || "ativo"
  }

  alunos.push(novoAluno)

  res.status(201).json(novoAluno)
}

function listAlunos(req, res) {
  res.json(alunos)
}

function findAluno(req, res) {
  const id = Number(req.params.id)

  console.log("ID Aluno recebido:", id)

  if (isNaN(id)) {
    return res.status(400).json({ erro: "ID inválido. Informe um número inteiro." })
  }

  const aluno = alunos.find(a => a.id === id)

  if (!aluno) {
    return res.status(404).json({ erro: "Aluno não encontrado" })
  }

  res.json(aluno)
}

module.exports = {
  createAluno,
  listAlunos,
  findAluno,
};