import {
  describe, expect, it,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('testando modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento test',
    descricao: 'descricao do evento test',
    data: '2026-01-01',
    autor_id: 1,
  };

  it('deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining({
        ...objetoEvento,
        id: undefined,
        created_at: expect.anything(),
        updated_at: expect.anything(),
      }),
    );
  });
});
