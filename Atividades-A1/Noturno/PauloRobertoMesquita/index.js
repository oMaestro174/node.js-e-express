const express = require('express');
const alunoRoutes = require('./src/routes/alunoRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Rotas
app.use('/alunos', alunoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
