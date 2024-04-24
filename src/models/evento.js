/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import db from '../db/dbconfig.js';

class Evento {
  constructor({
    id,
    nome,
    descricao,
    data,
    autor_id,
    created_at,
    updated_at,
  }) {
    this.id = null || id;
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.autor_id = autor_id;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async pegarEventos() {
    return [{
      id: 1,
      nome: 'lançamento',
      descricao: 'lançamento do livro',
      data: '2024-01-01',
      autor_id: 1,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    }];
  }
}

export default Evento;
