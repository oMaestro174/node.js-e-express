# API de Alunos

API REST simples construída com Node.js e Express para gerenciar uma lista de alunos em memória. Nivel 1

## Tecnologias

- Node.js
- Express

## Como executar

### 1. Instale as dependências

npm install

### 2. Inicie o servidor

npm run dev

**Modo produção:**

npm start

O servidor estará disponível em: `http://localhost:3000`


## Rotas disponíveis

### `GET /alunos`
Lista todos os alunos cadastrados.

**Resposta:** `200 OK`

[
  { "id": 1, "nome": "Lucas Henrique Almeida", "curso": "Análise e Desenvolvimento de Sistemas" },
  { "id": 2, "nome": "Mariana Costa Ferreira", "curso": "Engenharia de Software" },
  { "id": 3, "nome": "Pedro Martins Rocha", "curso": "Ciência da Computação" },
  { "id": 4, "nome": "Ana Beatriz Santos", "curso": "Redes de Computadores" },
  { "id": 5, "nome": "Rafael Carvalho Mendes", "curso": "Sistemas de Informação" }
]


### `POST /alunos`
Adiciona um novo aluno.


{
  "nome": "Ana Costa",
  "curso": "Ciência da Computação"
}

**Resposta:** `201 Created`
{
  "id": 6,
  "nome": "Ana Costa",
  "curso": "Ciência da Computação"
}


**Erro — campos ausentes:** `400 Bad Request`

{
  "erro": "Os campos \"nome\" e \"curso\" são obrigatórios."
}


## Testes manuais com Postman ou Insomnia

### Teste 1 — Listar alunos

- **Método:** GET  
- **URL:** `http://localhost:3000/alunos`  
- **Resultado esperado:** status `200` com array de alunos

### Teste 2 — Criar novo aluno

- **Método:** POST  
- **URL:** `http://localhost:3000/alunos`  
- **Headers:** `Content-Type: application/json`  
- **Body:**
{
  "nome": "Lucas Mendes",
  "curso": "Redes de Computadores"
}

- **Resultado esperado:** status `201` com o objeto do aluno criado

## Observações

- Os dados são armazenados em memória. Ao reiniciar o servidor, a lista volta ao estado inicial.
- O campo `id` é gerado automaticamente pela API.