DROP DATABASE IF EXISTS Usuario;
DROP DATABASE IF EXISTS Atividade;
DROP DATABASE IF EXISTS User_Atividade;
DROP DATABASE IF EXISTS OPT120;

CREATE DATABASE OPT120;

USE OPT120;

CREATE TABLE Usuario (
	id INT AUTO_INCREMENT,
    nome VARCHAR(255),
	email VARCHAR(255) UNIQUE,
    senha VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE Atividade (
	id INT AUTO_INCREMENT,
    titulo VARCHAR(255),
	descricao VARCHAR(255),
    data DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE Usuario_Atividade (
	usuarioId INT,
    atividadeId INT,
    entrega DATETIME,
	nota double,
    PRIMARY KEY(usuarioId, atividadeId),
    FOREIGN KEY(usuarioId) REFERENCES Usuario(id),
    FOREIGN KEY(atividadeId) REFERENCES Atividade(id)
);

