import Evento from '../models/evento.js';

class EventosController {
  static async listarEventos(req, res) {
    try {
      const eventoRecebido = await Evento.pegarEventos();
      return res.status(200).json(eventoRecebido);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

export default EventosController;
