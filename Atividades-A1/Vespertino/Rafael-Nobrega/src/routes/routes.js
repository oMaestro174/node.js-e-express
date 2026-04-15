const express = require("express")
const router = express.Router()
const produtos = require("../data/produtos")

router.get('/', (req, res, next) => {
  console.log("Passando pelo o Middleware!")
  res.send('API de Produtos')
  next()
})

router.get('/produtos', (req,res) => {
    res.json(produtos)
})

router.get('/produtos/:id', (req,res) => {

})

router.post("/produtos", (req, res) => {
  const novoProduto = {
    id: produtos.length + 1,
    nome: req.body.nome,
    preco: req.body.preco,
    ativo: true,
  };
  produtos.push(novoProduto)
  res.status(201).json(novoProduto);
  console.log("Produto Criado!")
})

router.put("/produtos/:id", (req,res) => {
  const idProduto = parseInt(req.params.id);
  const produto = produtos.find((t) => t.id === idProduto);

  if(!produto) {
    return res.status(404).json({ erro: "Produto não encontrado"});
  }

  produto.nome = req.body.nome || produto.nome
  produto.preco = req.body.preco || produto.preco
  produto.ativo =
    req.body.ativo === undefined ? produto.ativo : req.body.ativo;

  res.json(produto)
  console.log("Produto atualizado")
})

router.delete("/produtos/:id", (req,res) => {
  const idProduto = parseInt(req.params.id);
  const index = produtos.findIndex((t) => t.id === idProduto);

  if(index === -1){
    return res.status(404).json({ erro : "Produto não encontrado"})
  }

  produtos.splice(index, 1)
  res.status(204).send()
  console.log("Produto deletado")
})


module.exports = router;

