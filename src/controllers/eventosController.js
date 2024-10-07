/* eslint-disable linebreak-style */
import Evento from '../models/evento.js';

class EventoController {
  static listarEvetos = async (req, res) => {
    try {
      const resultado = await Evento.pegarEvento();
      return res.status(200).json(resultado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
}

export default EventoController;
