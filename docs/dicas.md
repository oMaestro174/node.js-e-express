Para adicionar uma **primary key** à tabela `pessoa` que você já criou, você precisa primeiro garantir que exista uma coluna adequada para ser chave primária — normalmente um `id` inteiro com auto‑incremento (`SERIAL` ou `GENERATED`).

A tabela que você criou não tem nenhuma coluna única que possa servir como PK, então o passo correto é **adicionar uma coluna nova** e depois definir a PK.

---

### 🧩 Como adicionar uma coluna `id` e definir como PRIMARY KEY

Use estes comandos:

```sql
ALTER TABLE pessoa
ADD COLUMN id SERIAL PRIMARY KEY;
```

Isso faz duas coisas ao mesmo tempo:

- cria a coluna `id` com auto‑incremento;
- define essa coluna como chave primária.

---

### 🔍 Se você quiser criar a PK em uma coluna já existente
Só funciona se a coluna já for **única** e **NOT NULL**.

Exemplo:

```sql
ALTER TABLE pessoa
ADD CONSTRAINT pessoa_pk PRIMARY KEY (nome);
```

Mas **não é recomendado** usar `nome` como PK, porque nomes podem se repetir.

---

### 📌 Situação atual da sua tabela
Você criou assim:

```sql
create table pessoa (
    nome VARCHAR(50) NOT NULL,
    data_nascimento date NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

