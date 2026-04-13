const express = require('express');
const app = express();
const port = 3000;
const server = "Amanda";

const { alunos, calcularMedia } = require('./processo');

app.use(express.json());

app.get("/alunos", (req, res) => {
    res.status(200).json(alunos);
});

app.post("/alunos", (req, res) => {
    const { nome, n1, n2, n3} = req.body;

    const novaMedia = calcularMedia(n1, n2, n3);

    const novoAluno = {
        id: alunos.length + 1,
        nome: nome,
        media: novaMedia
    };

    alunos.push(novoAluno);

    res.status(201).json(novoAluno);
});

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Alunos!');
});

app.listen(port, () => {
    console.log(`Estou ouvindo na porta ${port} com servidor ${server}`);
});