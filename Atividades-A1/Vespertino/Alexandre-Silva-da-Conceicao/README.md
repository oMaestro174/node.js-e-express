# API de Produtos

Uma API REST simples para gerenciamento de produtos, desenvolvida com Node.js e Express. Projeto criado para praticar módulos, rotas HTTP, middlewares e manipulação de dados em memória.

## 📋 Requisitos Atendidos

### Nível 1 - Básico
- ✅ Módulo próprio para separar a lógica de negócios
- ✅ `GET /produtos` - Listar todos os produtos
- ✅ `POST /produtos` - Adicionar novo produto
- ✅ `express.json()` configurado para receber JSON
- ✅ Status codes corretos (200 para listagem, 201 para criação)

### Nível 2 - Intermediário
- ✅ `PUT /produtos/:id` - Atualizar produto existente
- ✅ `DELETE /produtos/:id` - Remover produto
- ✅ Middleware de log com `console.log()` para monitorar requisições
- ✅ Dados mantidos em memória durante a execução

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado (versão 12 ou superior)
- npm (gerenciador de pacotes do Node)

### Passos para execução

1. **Clone ou baixe o projeto**

2. **Instale as dependências**
```bash

npm install