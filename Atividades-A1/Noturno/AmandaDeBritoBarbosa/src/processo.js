let alunos = [
    { id: 1, nome: "Amanda", media: 10 }
];

const calcularMedia = (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3;
};

module.exports = { alunos, calcularMedia };