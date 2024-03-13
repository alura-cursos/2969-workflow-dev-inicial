// import db from "../db/dbconfig.js";
/* eslint-disable rule-name */
class Evento {
  constructor({ id, nome, descricao, data, autor_id, created_at, updated_at }) {
    this.id = id || null;
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.autor_id = autor_id;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async pegarEventos() {
    return [
      {
        id: 1,
        nome: "lançamento",
        descricao: "descricao",
        data: "2024-03-14",
        autor_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
  }
}
export default Evento;
