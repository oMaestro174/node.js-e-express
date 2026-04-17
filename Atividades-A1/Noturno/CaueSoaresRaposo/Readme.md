# 📚 API de Alunos

API simples desenvolvida com **Node.js** e **Express** para cadastro e listagem de alunos em memória.
Projeto criado com o objetivo de praticar conceitos básicos de backend como rotas, módulos e manipulação de JSON.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* JavaScript

---

## 📁 Estrutura do projeto

```
api-alunos/
│
├── src/
│   ├── app.js
│   ├── data/
│   │   └── alunos.js
│   └── utils/
│       └── gerarId.js
│
├── package.json
└── README.md
```

---

## ⚙️ Como executar o projeto

### 1. Clonar ou baixar o repositório

```bash
git clone <link-do-repositorio>
```

### 2. Acessar a pasta

```bash
cd api-alunos
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Executar a aplicação

```bash
node src/app.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

## 📌 Rotas disponíveis

### 🔹 GET /alunos

Lista todos os alunos cadastrados.

* Status: **200 OK**

#### Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nome": "Cauê",
    "idade": 18,
    "curso": "Ciência da Computação"
  }
]
```

---

### 🔹 POST /alunos

Adiciona um novo aluno.

* Status: **201 Created**

#### Corpo da requisição (JSON):

```json
{
  "nome": "Carlos",
  "idade": 21,
  "curso": "Administração"
}
```

#### Exemplo de resposta:

```json
{
  "mensagem": "Aluno cadastrado com sucesso.",
  "aluno": {
    "id": 2,
    "nome": "Carlos",
    "idade": 21,
    "curso": "Administração"
  }
}
```

---

## 🧪 Testes realizados

### ✅ Teste 1 - Listagem de alunos

* Método: GET
* Rota: `/alunos`
* Resultado esperado: lista de alunos + status 200

---

### ✅ Teste 2 - Cadastro de aluno

* Método: POST
* Rota: `/alunos`
* Body enviado:

```json
{
  "nome": "Carlos",
  "idade": 21,
  "curso": "Administração"
}
```

* Resultado esperado: aluno criado + status 201

---

## 🧠 Conceitos aplicados

* Criação de API com Express
* Uso de rotas GET e POST
* Uso de `express.json()`
* Modularização de código (função gerarId)
* Manipulação de dados em memória
* Status HTTP (200, 201, 400)

---

## 📌 Observações

* Os dados são armazenados em memória (não persistem após reiniciar o servidor).
* Projeto com foco educacional para aprendizado de backend.

---

## 👨‍💻 Autor

Cauê Soares
