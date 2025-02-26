/* eslint-disable linebreak-style */
import {
  // eslint-disable-next-line no-unused-vars
  describe, expect, it,
} from '@jest/globals';
import Evento from '../../models/evento.js';

// eslint-disable-next-line linebreak-style
describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento',
    descricao: 'Evento Teste',
    data: '2023-01-01',
    autor_id: 1,
  };

  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });
});
