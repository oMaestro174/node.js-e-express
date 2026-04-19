**O `pg.Pool` é a forma moderna e recomendada de lidar com conexões ao PostgreSQL no Node.js.  
Antes dele, usava‑se principalmente o `pg.Client` diretamente.**

---

## O que se usava antes do `pg.Pool`?
A biblioteca `pg` sempre teve duas formas de conectar:

### 1) **`pg.Client` (conexão única e manual)**
Era o jeito “antigo” e mais comum antes do `Pool`.

```js
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

client.connect();

const result = await client.query('SELECT * FROM users');

client.end();
```

**Problemas do `Client`:**
- Você precisa **abrir e fechar** a conexão manualmente.  
- Se abrir uma conexão por requisição Express, o servidor pode ficar **lento** ou até travar.  
- Não há reaproveitamento de conexões.

---

## O que mudou com o `pg.Pool`?
O `Pool` cria um **pool de conexões reutilizáveis**, evitando abrir/fechar conexões o tempo todo.

```js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const result = await pool.query('SELECT * FROM users');
```

**Vantagens do `Pool`:**
- Reaproveita conexões automaticamente.  
- Evita sobrecarga no banco.  
- É seguro para usar dentro do Express (uma conexão por requisição, mas reaproveitada).  
- Menos código e menos chance de erro.

---

## Resumo rápido
| Antes (`pg.Client`) | Agora (`pg.Pool`) |
|---------------------|-------------------|
| Conexão manual | Conexões automáticas |
| Abre/fecha toda hora | Reaproveita conexões |
| Pode travar sob carga | Escala melhor |
| Não recomendado para Express | Recomendado |

---

Um exemplo completo e **bem estruturado** de Express usando **pg.Pool** fica assim:

---

## Estrutura recomendada com Express + PostgreSQL (`pg.Pool`)

### 📁 **1. Crie um arquivo `db.js` para centralizar o Pool**

```js
// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

module.exports = pool;
```

Isso garante que **um único pool** seja criado e reutilizado em toda a aplicação.

---

### 📁 **2. Use o pool no Express (`server.js`)**

```js
// server.js
const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());

// Rota simples
app.get('/', (req, res) => {
  res.send('API rodando!');
});

// Exemplo: buscar usuários
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar usuários');
  }
});

// Exemplo: inserir usuário
app.post('/users', async (req, res) => {
  const { name, email } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao inserir usuário');
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
```

---

## Por que essa estrutura é ideal?

- O **pool é criado uma única vez**.
- Cada rota usa `pool.query()` sem precisar abrir/fechar conexão.
- O Express fica mais rápido e estável.
- Evita vazamento de conexões.
- Funciona bem em produção (Heroku, Railway, Render, VPS, etc).

---

Um projeto Express + PostgreSQL em **MVC** usando `pg.Pool` fica muito mais organizado. A estrutura separa responsabilidades e facilita manutenção, testes e escalabilidade.

---

## Estrutura de pastas recomendada

```
project/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── server.js
│
└── package.json
```

---

## 📌 `config/db.js` — configuração do Pool

```js
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

module.exports = pool;
```

---

## 📌 `models/userModel.js` — camada de acesso ao banco

```js
const pool = require('../config/db');

module.exports = {
  async getAllUsers() {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  },

  async createUser(name, email) {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  }
};
```

---

## 📌 `controllers/userController.js` — lógica das rotas

```js
const User = require('../models/userModel');

module.exports = {
  async list(req, res) {
    try {
      const users = await User.getAllUsers();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar usuários');
    }
  },

  async create(req, res) {
    const { name, email } = req.body;

    try {
      const newUser = await User.createUser(name, email);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao criar usuário');
    }
  }
};
```

---

## 📌 `routes/userRoutes.js` — definição das rotas

```js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.list);
router.post('/', userController.create);

module.exports = router;
```

---

## 📌 `server.js` — inicialização do servidor

```js
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API rodando em MVC!');
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
```

---

## O que esse MVC resolve bem

- **Separação clara** entre banco, lógica e rotas.  
- Facilita testes unitários (testa controller e model separadamente).  
- Evita código duplicado.  
- Escala melhor quando o projeto cresce.  

