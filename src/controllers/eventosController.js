import Evento from '../models/evento.js';

const liberaAcessoEventos = () => process.env.EVENTO_FLAG === 'true';

class EventosController {
  static async listarEventos(req, res) {
    if (liberaAcessoEventos()) {
      try {
        const eventoRecebido = await Evento.pegarEventos();
        return res.status(200).json(eventoRecebido);
      } catch (err) {
        return res.status(500).json(err.message);
      }
    } else {
      return res.status(404).send();
    }
  }
}

export default EventosController;
