import {
  describe, expect, it,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento teste',
    descricao: 'Descrição do evento teste',
    data: '2023-01-01',
    autor_id: '1',
  };

  it('Deve instanciar um novo evento', () => {
    const autor = new Evento(objetoEvento);

    expect(autor).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });
});
