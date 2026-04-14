// Módulo para gerenciar alunos em memória
let alunos = [];
let nextId = 1;

const getAllAlunos = () => {
    return alunos;
};

const addAluno = (alunoData) => {
    const novoAluno = {
        id: nextId++,
        nome: alunoData.nome,
        idade: alunoData.idade,
        curso: alunoData.curso
    };
    alunos.push(novoAluno);
    return novoAluno;
};

module.exports = {
    getAllAlunos,
    addAluno
};

//teste