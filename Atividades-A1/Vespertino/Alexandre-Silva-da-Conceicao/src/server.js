// src/server.js
const express = require("express");
const app = express();
const port = 3000;
const produtosModules = require("./modules/produtosModules");

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
    res.json({
        mensagem: "API de Produtos funcionando!",
        rotas_disponiveis: {
            listar: "GET /produtos",
            criar: "POST /produtos"
        }
    });
});

//Listar produtos
app.get("/produtos", (req, res) => {
    const produtos = produtosModules.getAllProdutos();
    res.status(200).json(produtos);
});

// Criar um novo produto
app.post("/produtos", (req, res) => {
    const {nome, preco, descricao} = req.body;

    if (!nome || !preco) {
        return res.status(400).json({erro: "Nome e preço são obrigatórios"});
    }

    const novoProduto = produtosModules.addProduto({nome, preco, descricao});
    res.status(201).json(novoProduto);
    
});

// Deletar um produto por ID
app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deletado = produtosModules.deleteProduto(id);

    if (!deletado) {
        return res.status(404).json({erro: "Produto não encontrado"});
    }
    res.status(200).json({mensagem: "Produto deletado com sucesso"});
});

// Atualizar um produto por ID
app.put("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {nome, preco, descricao} = req.body;

    const produtoAtualizado = produtosModules.attProduto(id, {nome, preco, descricao});

    if (!produtoAtualizado) {
        return res.status(404).json({erro: "Produto não encontrado"});
    }
    res.status(200).json(produtoAtualizado);

});

// Informar o servidor para escutar na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
