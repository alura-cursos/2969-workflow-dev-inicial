import { describe, expect, it } from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
  const eventoMock = {
    nome: 'Evento teste',
    descricao: 'descricao foda do teste',
    data: '2023-01-01',
    autor_id: 1,
  };

  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(eventoMock);

    expect(evento).toEqual(expect.objectContaining(eventoMock));
  });
});
