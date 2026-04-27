import {
  describe, expect, it,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento teste',
    descricao: 'Descricao do evento teste',
    data: '2024-02-02',
    autor_id: 2,
  };

  it('Deve instanciar um novo Evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(expect.objectContaining(objetoEvento));
  });
});
