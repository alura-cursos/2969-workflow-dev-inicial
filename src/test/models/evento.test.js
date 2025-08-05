import {
  describe, expect, it, jest,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'evento teste',
    descricao: 'descrição do evento',
    data: '2023-01-01',
    autor_id: 1,
  };

  it('Deve instanciar um novo autor', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });
});
