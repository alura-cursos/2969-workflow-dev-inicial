
//import db from '../db/dbconfig.js';

class Evento {
    constructor({
        id,
        nome,
        descricao,
        data,
        autor_id,
        create_at,
        update_at
    }){
        this.id = null || id
        this.nome = nome
        this.descricao = descricao
        this.data = data
        this.autor_id = autor_id
        this.created_at = created_at || new Date().toISOString();
        this.updated_at = updated_at || new Date().toISOString();
    }
    static async pegarEventos(){
        return [{
             id: 1,
            nome: 'Kaio',
            descricao: "descricao",
            data: "2022-03-20",
            autor_id: 1,
            create_at: "2026-02-20 07:00",
            update_at:"2026-02-20 07:00"
        }]
    }
}

export default Evento