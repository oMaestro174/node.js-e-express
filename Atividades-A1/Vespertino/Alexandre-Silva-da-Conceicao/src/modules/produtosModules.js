let produtes = [];
// Função para obter todos os produtos
function getAllProdutos() {
    return produtes;
};

// Função para adicionar um novo produto
function addProduto(dataProduto) {
    const novoProduto = {
        id: produtes.length + 1,
        nome: dataProduto.nome,
        preco: dataProduto.preco,
        descricao: dataProduto.descricao || "Sem descrição",
        dtCreated: new Date(),
    };
    produtes.push(novoProduto);
    return novoProduto;
};

// Deleta Produto
function deleteProduto(id) {
    const index = produtes.findIndex((produto) => produto.id === id);
    if (index === -1) return false;
    produtes
    .splice(index, 1);
    return true;
}

// Função para atualizar um produto por ID
function attProduto(id, newData) {
    const produto = produtes.find((produto) => produto.id === id);
    if (!produto) return null;

    produto.nome = newData.nome || produto.nome;
    produto.preco = newData.preco !== undefined ? newData.preco : produto.preco;
    produto.descricao = newData.descricao || produto.descricao;
    produto.updatedAt = new Date();

    return produto;
}

// Exporta as funções para que possam ser usadas em outros arquivos
module.exports = {
    getAllProdutos,
    addProduto,
    deleteProduto,
    attProduto
};
