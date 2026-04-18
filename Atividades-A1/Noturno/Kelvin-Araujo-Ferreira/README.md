# API de Alunos - Nível Jedi

## Instalação e execução
```bash
npm install
node app.js
```

## Rotas

- `GET /alunos` — Lista todos os alunos
- `GET /alunos/:id` — Busca aluno por id
- `POST /alunos` — Cria aluno (**protegida**)
- `PUT /alunos/:id` — Atualiza aluno (**protegida**)
- `DELETE /alunos/:id` — Remove aluno (**protegida**)

**Para rotas protegidas, envie header:**  
`x-access-token: seutokenjedi123`

## Testes

Use Postman ou similar, incluindo o token nas rotas protegidas. Exemplo:
```
POST http://localhost:3000/alunos
Header: x-access-token: seutokenjedi123
Body JSON: { "nome": "Han Solo", "curso": "Piloto" }
```