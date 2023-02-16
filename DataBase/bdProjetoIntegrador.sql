CREATE DATABASE IF NOT EXISTS db_projeto_integrador;
USE db_projeto_integrador;

CREATE TABLE IF NOT EXISTS categorias (
	id_categorias INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    qualificacao VARCHAR(30) NOT NULL,
    descricao TEXT NOT NULL,
    url_imagem VARCHAR(200) NOT NULL
);