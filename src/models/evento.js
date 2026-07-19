/* eslint-disable camelcase */

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
      nome: 'lancemento',
      descricao: 'descricao',
      data: '2026-01-01',
      autor_id: 1,
      created_at: '2026-01-01 06:00:00',
      updated_at: '2026-01-01 06:00:00',
    }];
  }

  static async pegarTodosOsEventos() {
    return this.pegarEventos();
  }

  static async pegarPeloId(id) {
    if (Number(id) !== 1) {
      return null;
    }
    const resultado = await this.pegarEventos();
    return resultado[0];
  }

  static async criar() {
    return [1];
  }

  static async atualizar() {
    // o update retorna a quantidade de rows atualizados e não o objeto do registro atualizado
    return Evento.pegarEventos();
  }

  static async excluir() {
    // o del retorna a quantidade de rows deletados
    return [1];
  }

  async salvar() {
    // verificar se o id existe no banco
    // se não existir é create
    // se existir é update
    if (this.id) {
      const resultado = await Evento.atualizar();
      return resultado;
    }
    const resultado = await Evento.criar();
    return resultado;
  }
}

export default Evento;
