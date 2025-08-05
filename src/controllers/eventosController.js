import Evento from '../models/evento.js';

class EentosController {
  static listarEvento = async (req, res) => {
    try {
      const resultado = await Evento.pegarEventos();
      res.status(200).json(resultado);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar eventos', error: error.message });
    }
  };
}
