const alunos = [
  { id: 1, nome: 'Lucas Henrique Almeida', curso: 'Análise e Desenvolvimento de Sistemas' },
  { id: 2, nome: 'Mariana Costa Ferreira', curso: 'Engenharia de Software' },
  { id: 3, nome: 'Pedro Martins Rocha', curso: 'Ciências da Computação' },
  { id: 4, nome: 'Ana Beatriz Santos', curso: 'Redes de Computadores' },
  { id: 5, nome: 'Rafael Carvalho Mendes', curso: 'Sistemas de Informação' },
];

function listarAlunos() {
  return alunos;
}

function adicionarAluno(nome, curso) {
  const novoAluno = {
    id: alunos.length + 1,
    nome,
    curso,
  };
  alunos.push(novoAluno);
  return novoAluno;
}

module.exports = { listarAlunos, adicionarAluno };