## 🤖 API de Produtos - Nível 2

Este projeto é uma API REST desenvolvida com Node.js e Express para a atividade A1. A aplicação permite o gerenciamento de produtos em memória, cobrindo as operações fundamentais de CRUD.

## 🛠️ Tecnologias Utilizadas
* *Node.js* (Ambiente de execução)
* *Express* (Framework web)
* *ES Modules* (Sintaxe de import/export)

## 📁 Estrutura de Pastas
O projeto segue uma organização básica para separar responsabilidades:
* src/app.js: Ponto de entrada e configuração das rotas.
* package.json: Configurações de dependências e tipo do módulo.

## 🔄 Explicação do Fluxo de Requisição
1. *Cliente:* Envia uma requisição HTTP (GET, POST, PUT ou DELETE) para uma URL específica.
2. *Middleware:* A requisição passa por um middleware global que intercepta os dados, registra o log no console (método e URL) e libera o fluxo através da função next().
3. *Roteamento:* O Express identifica qual rota corresponde ao pedido.
4. *Processamento:* O código dentro da rota manipula o array de produtos (busca, adiciona, edita ou remove).
5. *Resposta:* O servidor retorna um Status Code adequado e os dados em formato JSON.

## 🚀 Como Executar
1. Instale as dependências:
   ```bash
   npm install
   npm init -y
   npm install express

2. Para executar o servidor:
   node --watch node.js-e-express/Atividade-A1/src/app.js

``` http://localhost:3000/Produtos ```

## 📁 Estrutura do projeto

```
    api-projeto/
    ├── src/
    │   ├── app.js/         # Configuração principal do Express junto com o server
    │   └── middlewares     # Funções que rodam "no meio" do caminho
    ├── README.md
    └── package.json
```

    ## Teste 1: Middleware (Log no Terminal)
    *Ação:* Faça qualquer requisição (pode ser dar F5 no navegador).
    *O que mostrar:* Print do seu terminal do VS Code mostrando a mensagem que você configurou no middleware.
    > Exemplo: [LOG]: Requisição GET em /produtos

    ### Teste 2: Listagem (GET)
    *Ação:* Acesse http://localhost:3000/produtos no navegador.
    *O que mostrar:* Print do navegador exibindo o array de objetos JSON.

    ### Teste 3: Atualização (PUT)
    *Ação:* Use o Postman ou Insomnia para enviar um *PUT* para http://localhost:3000/produtos/.
    *Corpo (JSON):*
    ```json
    {
    "nome": "Sapato",
    "preco": 250
    }

