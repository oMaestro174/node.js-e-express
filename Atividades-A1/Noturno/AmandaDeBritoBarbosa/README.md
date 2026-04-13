# Atividade 1: Node.js e Express - Nível 1 (Alunos)

Este projeto consiste numa API simples desenvolvida com Node.js e Express para a gestão de registos de alunos e cálculo de médias. A atividade foca-se na organização de código em módulos e no uso dos verbos HTTP (GET e POST).

## 🚀 Requisitos Implementados

- **Módulo Próprio:** Separação da lógica de cálculo e armazenamento de dados no ficheiro `processo.js`.
- **Listagem (GET):** Rota `/alunos` que retorna todos os registos em memória com status `200`.
- **Criação (POST):** Rota `/alunos` para adicionar novos alunos, calculando a média automaticamente e retornando status `201`.
- **Express JSON:** Habilitação do middleware `express.json()` para processar corpos de requisição em formato JSON.

## 📂 Estrutura do Projeto

- `server.js`: Configuração do servidor Express e definição das rotas.
- `processo.js`: Lógica de negócio (cálculo da média) e armazenamento dos dados em memória.

## 🛠️ Como Executar

1. Instale as dependências (caso não tenha):
   ```bash
   npm install express