CREATE TABLE autores(
  id            INTEGER NOT NULL PRIMARY KEY,
  nome          TEXT    NOT NULL,
  nacionalidade TEXT    NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO autores (nome, nacionalidade) 
VALUES  ('JRR Tolkien', 'sul-africano'),
        ('Ursula LeGuin', 'estadunidense'),
        ('Machado de Assis', 'brasileira'),
        ('Julio Cortazar', 'argentino');

CREATE TABLE editoras(
  id      INTEGER NOT NULL PRIMARY KEY,
  nome    TEXT    NOT NULL,
  cidade  TEXT    NOT NULL,
  email   TEXT    NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO editoras (nome, cidade, email) 
VALUES  ('Europa-America', 'Lisboa', 'e@e.com'),
        ('Morro Branco', 'Sao Paulo', 'm@m.com'),
        ('Aleph', 'Sao Paulo', 'al@al.com'),
        ('Atelie', 'Sao Paulo', 'a@a.com');

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

INSERT INTO livros (titulo, paginas, autor_id, editora_id)
VALUES 
   ('O Hobbit', 230, 1, 1),
   ('O Silmarillion', 400, 1, 1),
   ('O Silmarillion', 400, 1, 1),
   ('O Feiticeiro de Terramar', 450, 2, 2),
   ('Os Despossuidos', 300, 2, 3),
   ('Memorias Postumas de Bras Cubas', 150, 3, 4);
  
.exit