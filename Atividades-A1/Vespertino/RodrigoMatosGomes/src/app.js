import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Passei pelo Middleware! Método: ${req.method} | URL: ${req.url}`);
    next(); // Se não chamar o next(), a requisição
});

let produtos = [
    { id: 1, nome: "Sapato", preco: 250 }
];

// Rota GET - Para listar todos os produtos
app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});

// Rota POST - Para adicionar um novo produto
app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// Rota PUT
export const update = (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    
    const index = produtos.findIndex(p => p.id === Number(id));
    
    if (index === -1) {
        return res.status(404).json({ message: "Produto não encontrado" });
    }

    produtos[index] = { ...produtos[index], nome, preco };
    return res.status(200).json(produtos[index]);
};

// DELETE 
export const remove = (req, res) => {
    const { id } = req.params;
    const initialLength = produtos.length;
    
    produtos = produtos.filter(p => p.id !== Number(id));

    if (produtos.length === initialLength) {
        return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(204).send(); // 204 não retorna corpo
};
    app.put('/produtos/:id', update);
    app.delete('/produtos/:id', remove);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});
