DROP TABLE IF EXISTS livros;
DROP TABLE IF EXISTS editoras;
DROP TABLE IF EXISTS autores;

CREATE TABLE autores(
  id            INTEGER NOT NULL PRIMARY KEY,
  nome          TEXT    NOT NULL,
  nacionalidade TEXT    NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO autores (id, nome, nacionalidade) 
VALUES  (1, 'JRR Tolkien', 'sul-africano'),
        (2, 'Ursula LeGuin', 'estadunidense'),
        (3, 'Machado de Assis', 'brasileira'),
        (4, 'Júlio Cortázar', 'argentino');

CREATE TABLE editoras(
  id      INTEGER NOT NULL PRIMARY KEY,
  nome    TEXT    NOT NULL,
  cidade  TEXT    NOT NULL,
  email   TEXT    NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO editoras (id, nome, cidade, email) 
VALUES  (1, 'Europa-América', 'Lisboa', 'e@e.com'),
        (2, 'Morro Branco', 'São Paulo', 'm@m.com'),
        (3, 'Aleph', 'São Paulo', 'al@al.com'),
        (4, 'Ateliê', 'São Paulo', 'a@a.com');

CREATE TABLE livros(
  id          INTEGER NOT NULL PRIMARY KEY,
  titulo      TEXT    NOT NULL,
  paginas     INTEGER NOT NULL,
  editora_id  INTEGER NOT NULL,
  autor_id    INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (editora_id) REFERENCES editoras (id),
  FOREIGN KEY (autor_id) REFERENCES autores (id)
);

INSERT INTO livros (id, titulo, paginas, autor_id, editora_id)
VALUES 
   (1, 'O Hobbit', 230, 1, 1),
   (2, 'O Silmarillion', 400, 1, 1),
   (3, 'O Silmarillion', 400, 1, 1),
   (4, 'O Feiticeiro de Terramar', 450, 2, 2),
   (5, 'Os Despossuídos', 300, 2, 3),
   (6, 'Memórias Póstumas de Brás Cubas', 150, 3, 4);