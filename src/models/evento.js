//import db from '../db/dbconfig.js'

class Evento {
    
    constructor({
        id,
        nome,
        descricao,
        data,
        autorId,
        createdAt,
        updatedAt
    }) {
        this.id = id || null;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.autorId = autorId;
        this.createdAt = createdAt || new Date().toISOString();
        this.updatedAt = updatedAt || new Date().toISOString();
    }

    static async pegarEventos() {
        return [{
            id: 1,
            nome: "Lançamento",
            descricao: "dESCR",
            data: "2026-01-01",
            autor_id: 1,
            created_at: "2026-01-01 07:00:00",
            updated_at: "2026-01-01 07:00:00"
        }];
    }
}

export default Evento;