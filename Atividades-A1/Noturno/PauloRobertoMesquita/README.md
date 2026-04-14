# API de Alunos

API em Node.js com Express para gerenciar registros de alunos em memória.
Atividade desenvolvida para treinar módulos, rotas e envio de JSON.

## Requisitos Atendidos
- Uso de módulo próprio (`src/models/alunoModel.js`) para separar a lógica de gerenciamento da aplicação principal.


## Como Executar

1. Instalar as dependências:
   npm install

2. Inicie o servidor:
   npm start

3. O servidor estará rodando em `http://localhost:3000`.

## Testes Manuais no Postman

Inciar o servidor (via `npm start`).

### 1. Criar um Aluno (POST)
- **Método:** POST
- **URL:** `http://localhost:3000/alunos`
- Na aba **Body**, selecionar **raw** e mudar a formatação de **Text** pra **JSON**.
- **Body (JSON):**

Abaixo segue 5 exemplos para testes no Postman que podem ser enviados em lote via POST:

[
  {
    "nome": "Ana Clara",
    "idade": 21,
    "curso": "Engenharia de Software"
  },
  {
    "nome": "Marcos Vinicius",
    "idade": 24,
    "curso": "Sistemas de Informação"
  },
  {
    "nome": "Fernanda Costa",
    "idade": 19,
    "curso": "Ciência da Computação"
  },
  {
    "nome": "Lucas Almeida",
    "idade": 22,
    "curso": "Jogos Digitais"
  },
  {
    "nome": "Beatriz Santos",
    "idade": 20,
    "curso": "Ciência de Dados"
  }
]

Envio 3