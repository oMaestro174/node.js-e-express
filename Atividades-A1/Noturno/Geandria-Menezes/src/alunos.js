const alunos = [];

function listarAlunos() {
  return alunos;
}

function adicionarAluno(aluno) {
  alunos.push(aluno);
  return aluno;
}

module.exports = { listarAlunos, adicionarAluno };