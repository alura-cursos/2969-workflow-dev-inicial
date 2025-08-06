/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import {
  describe, expect, it, jest,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'EVento teste',
    descricao: 'Descrição do evento teste',
    data: '2025-07-01',
    autor_id: 1,
  };

  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });
});