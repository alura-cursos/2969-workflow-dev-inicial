import {
  describe, expect, it, jest,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento teste',
    descricao: "descricao evento teste",
    data: "2023-01-20",
    autor_id:1
  };

  it('Deve instanciar um novo Evento', () => {
    const evento = new Evento(objetoEvento);

    expect(Evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });
});

