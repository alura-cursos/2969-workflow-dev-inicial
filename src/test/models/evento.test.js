/* eslint-disable linebreak-style */
import {
  describe, expect, it,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento teste',
    descricao: 'Descrição do envento teste',
    data: '2024-12-24',
    autor_id: 1,
  };
  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);
    expect(evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });
});
