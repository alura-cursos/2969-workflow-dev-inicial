/* eslint-disable camelcase */
// import db from '../db/dbconfig.js';

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
      nome: 'Lancamento',
      descricao: 'descricao',
      data: '2024-02-02',
      autor_id: 2,
      created_at: '2026-01-01 07:00:00',
      updated_at: '2026-01-01 07:00:00',
    }];
  }
}

export default Evento;
