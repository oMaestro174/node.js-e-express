const express = require('express');
const alunosRoutes = require('./routes/alunos');
 
const app = express();
const PORT = 3000;
 
app.use(express.json());
 
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
 
app.use('/alunos', alunosRoutes);
 
app.get('/', (req, res) => {
  res.status(200).json({ mensagem: 'API de Alunos no ar!' });
});
 
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});