# API DE GERÊNCIA DE SALA

## Projeto:


Este projeto foi desenvolvido em Node.js com Express durante um laboratório de Back-end. Ele utiliza um vetor de objetos em memória para simular uma base de dados, permitindo operações de criação, leitura, atualização e exclusão (CRUD)
* Presente Projeto foio desenvolvido apenas para fins Acadêmicos.

---
DATA: 14/04/2026

---

## A API permite:
* Cadastrar novo aluno;
* Alterar dados do aluno como nome, idade, CPF
* Deletar alunos de um possivel banco de dados  utilizando o ID do mesmo
 


---

## TECNOLOGIA USADA PARA FABRICAÇÃO E TESTES

*  Node.js
*  Express
*  Insomnia (Testador de rotas)

---

## EXECUTANDO! 

* Acessar pasta: 
cd Davi-Almeida

* Instalar dependências:
npm install

* Rodar o servidor:
node Server.js

* Rodar servidor comtínuamente (Não indicado para rodar em produção): 
node --watch Server.js

Servidor disponível em:

http://localhost:3000

---

## Endpoints

Base URL: **http://localhost:3000**

### 1. Listar alunos

**GET /alunos**

Retorna todos os alunos cadastrados.

* Status: **200**

### 2. Criar aluno 
**POST /produtos**

Cria um novo aluno.

Body esperado:

```json
{
    "id": "1"
	"nome": "Aluno",
	"idade": "20 anos"
    "cpf": "000.000.000-11"
}
* Status: **201 created**
* Status: **400 bad request**

### 3. Alterar dados do Aluno

**PUT /alunos**

Altera os dados do Aluno
(nome; idade)

// No caso de CPF e ID não pode ser alterado sem uma licensa privilegiada, porém no presente projeto a função ainda não foi desenvolvida.
Body de exemplo:

```json
{
	 "id": "1"
	"nome": "Alex Lima",
	"idade": "50 anos"
    "cpf": "000.000.000-11"
}
```

*  Status: **200 OK**
*  Erro: **404 Not Found** (produto não encontrado)

### 4. Deletar Aluno

**DELETE /produtos/:id**

Remove um produto pelo ID.

* Status: **204 No Content**
* Erro: **404 Not Found** (produto não encontrado)
---

## Estrutura

```text
.
├── node_modules/
├── router
|   ├──routes
├── testes/
│   ├── delete-alunos.png
│   ├── erro-404.png
│   ├── get-alunos.png
│   ├── post-alunos.png
│   └── put-alunos.png
├── Server.js
├── package-lock.json
├── package.json
├── README.md
|
└── src
    ├── alunos.js
```

---

## Evidências de Teste

Na pasta 'testes' estão os prints dos testes manuais dos endpoints.

---

**DESENVOLVEDOR: DAVI ALMEIDA DE OLIVEIRA**


