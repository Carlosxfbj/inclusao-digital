CREATE TABLE Idoso (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    data_nascimento TEXT,
    telefone TEXT,
    bairro TEXT,
    grau_escolaridade TEXT
);

CREATE TABLE Oficina (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    data TEXT,
    local TEXT,
    descricao TEXT
);

CREATE TABLE Participacao (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_idoso INTEGER,
    id_oficina INTEGER,
    presenca BOOLEAN,
    FOREIGN KEY (id_idoso) REFERENCES Idoso(id),
    FOREIGN KEY (id_oficina) REFERENCES Oficina(id)
);
