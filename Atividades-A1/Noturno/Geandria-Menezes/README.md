# API de Alunos

API simples desenvolvida com Node.js e Express para gerenciar alunos.

## Tecnologias
- Node.js
- Express

## Como executar

1. Instale as dependências:

npm install

2. Inicie o servidor:

npm start

3. O servidor vai rodar em: `http://localhost:3000`

## Rotas

| Método | Rota      | Descrição          | Status |
|--------|-----------|--------------------|--------|
| GET    | /alunos   | Lista todos alunos | 200    |
| POST   | /alunos   | Adiciona um aluno  | 201    |

## Exemplo de uso — POST /alunos

**Body (JSON):**
```json
{
  "nome": "Geandria Menezes",
  "matricula": "2024001"
}
```