let alunos = require('../data/alunos');

exports.listar = (req, res) => {
  res.status(200).json(alunos);
};

exports.buscarPorId = (req, res) => {
  const aluno = alunos.find(a => a.id === Number(req.params.id));
  if (aluno) res.status(200).json(aluno);
  else res.status(404).json({ error: 'Aluno não encontrado' });
};

exports.adicionar = (req, res) => {
  const novo = req.body;
  novo.id = Date.now();
  alunos.push(novo);
  res.status(201).json(novo);
};

exports.atualizar = (req, res) => {
  const id = Number(req.params.id);
  const idx = alunos.findIndex(a => a.id === id);
  if (idx >= 0) {
    alunos[idx] = { ...alunos[idx], ...req.body };
    res.status(200).json(alunos[idx]);
  } else {
    res.status(404).json({ error: 'Aluno não encontrado' });
  }
};

exports.remover = (req, res) => {
  const id = Number(req.params.id);
  const idx = alunos.findIndex(a => a.id === id);
  if (idx >= 0) {
    alunos.splice(idx, 1);
    res.status(200).json({ message: 'Removido' });
  } else {
    res.status(404).json({ error: 'Aluno não encontrado' });
  }
};