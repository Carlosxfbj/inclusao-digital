# Inclusão Digital para Idosos em Comunidades Vulneráveis

Este projeto tem como objetivo auxiliar na inclusão digital de idosos residentes em comunidades vulneráveis, permitindo o cadastro de participantes e a gestão de oficinas de capacitação tecnológica.

## 📌 Objetivo

Desenvolver um sistema simples com banco de dados em **SQLite** e interface **web responsiva**, utilizando **Node.js**, **HTML/CSS/JS** e **controle de versão com Git**, focado em registrar oficinas e participantes.

---

## 🧱 Estrutura do Projeto

```
inclusao-digital/
├── backend/
│   ├── db/
│   │   └── database.sqlite
│   ├── scripts/
│   │   ├── create_tables.sql
│   │   └── seed_data.sql
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
- HTML5, CSS3, JavaScript
- Git & GitHub (controle de versão)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- VS Code (ou outro editor)
- (Opcional) Extensão Live Server no VS Code
- Terminal ou CMD

### Passo a passo

1. Clone ou baixe o repositório
2. Acesse a pasta do projeto no terminal:

```bash
cd inclusao-digital
```

3. Instale as dependências:

```bash
npm install
```

4. Crie o banco de dados (se desejar usar os scripts SQL manualmente):

```bash
sqlite3 ./backend/db/database.sqlite < ./backend/scripts/create_tables.sql
sqlite3 ./backend/db/database.sqlite < ./backend/scripts/seed_data.sql
```

5. Inicie o servidor:

```bash
node backend/server.js
```

6. Abra o arquivo `frontend/index.html` no navegador  
   (Se tiver o Live Server, clique com o botão direito no arquivo e selecione "Open with Live Server").

---

## ✍️ Funcionalidades

- Cadastro de idosos com nome, nascimento, telefone, bairro e escolaridade.
- Registro de oficinas com data, local e descrição.
- Vinculação de idosos às oficinas via tabela de participação.
- Interface amigável e responsiva.

---

## 📦 Banco de Dados

O banco é gerenciado com **SQLite**, sendo leve e ideal para ambientes acadêmicos ou protótipos.  
Os dados são armazenados em `backend/db/database.sqlite`.

---

## 📌 Licença

Este projeto é de uso educacional e pode ser reutilizado livremente com os devidos créditos.

---

## 👨‍💻 Autor

Desenvolvido por [Seu Nome Aqui]  
Curso de [Seu Curso] – UFMS  
Módulo de Projeto Integrador e Banco de Dados
