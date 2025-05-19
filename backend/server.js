const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const db = new sqlite3.Database('./backend/db/database.sqlite');

app.use(cors());
app.use(express.json());

// Criação das tabelas (se ainda não existirem)
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS Idoso (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT, data_nascimento TEXT,
    telefone TEXT, bairro TEXT, grau_escolaridade TEXT
  )`);
});

// Rota para inserção de idosos
app.post('/idosos', (req, res) => {
  const { nome, data_nascimento, telefone, bairro, grau_escolaridade } = req.body;
  db.run(`INSERT INTO Idoso (nome, data_nascimento, telefone, bairro, grau_escolaridade)
          VALUES (?, ?, ?, ?, ?)`,
    [nome, data_nascimento, telefone, bairro, grau_escolaridade],
    function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(201).json({ id: this.lastID });
    });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
