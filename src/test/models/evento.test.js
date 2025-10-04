import {
  describe, expect, it,
} from '@jest/globals';
import Evento from '../../models/evento';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento a',
    descricao: 'aaaaaaaaaaaaaaaaa',
    data: '2025-01-01',
    autor_id: 1,
  };

  it('Deve instanciar um novo efvento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });
});
