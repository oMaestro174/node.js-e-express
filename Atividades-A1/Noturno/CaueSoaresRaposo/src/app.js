const express = require("express");
const alunos = require("./data/alunos");
const gerarId = require("./utils/gerarId");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de alunos funcionando!");
});

app.get("/alunos", (req, res) => {
  res.status(200).json(alunos);
});

app.post("/alunos", (req, res) => {
  const { nome, idade, curso } = req.body;

  if (!nome || !idade || !curso) {
    return res.status(400).json({
      mensagem: "Nome, idade e curso são obrigatórios."
    });
  }

  const novoAluno = {
    id: gerarId(alunos),
    nome,
    idade,
    curso
  };

  alunos.push(novoAluno);

  res.status(201).json({
    mensagem: "Aluno cadastrado com sucesso.",
    aluno: novoAluno
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});