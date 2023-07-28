import Evento from '../models/eventos.js';
import unleash from '../services/unleash.js';

class EventosController {
  static liberarAcessoEventos = () => unleash.isEnabled('eventos');

  static listarEventos = async (_, res) => {
    if (this.liberarAcessoEventos()) {
      try {
        const resultado = await Evento.pegarEventos();
        return res.status(200).json(resultado);
      } catch (err) {
        return res.status(500).json(err.message);
      }
    } else {
      return res.status(404).send();
    }
  };
}

export default EventosController;
