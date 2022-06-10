/**
    MYSQL id integer auto_increment primary key,
    POSTGRES id serial primary key
*/

CREATE TABLE aluno (
	id integer auto_increment primary key, 
    nome varchar(100),
    matricula varchar(20) unique,
    data_nascimento date,
    pontuacao integer
);

CREATE TABLE atividade (
	id integer auto_increment primary key,
    aluno_id integer,
    nome varchar(100),
    disciplina varchar(100),
    nota decimal(10,2),
    observacao varchar(255),
    FOREIGN KEY (aluno_id) REFERENCES aluno(id)
);

INSERT INTO aluno VALUES 
(default, 'Bruno', '2021A001', '1994-02-10', 0),
(default, 'Nataliana', '2020A002', '1999-02-11', 0),
(default, 'Klisman', '2021A003', '2001-07-3', 0),
(default, 'Kalline', '2021A004', '2002-09-10', 0);
