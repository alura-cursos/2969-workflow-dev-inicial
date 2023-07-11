import {
  describe, expect, it, jest,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento teste',
    descricao: 'Descricao do evento teste',
    data: '2023-01-08',
  };

  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });

  /* it.skip('Deve salvar autor no BD', async () => {
        const autor = new Autor(objetoAutor);

        const dados = await autor.salvar();

        const retornado = await Autor.pegarPeloId(dados.id);

        expect(retornado).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoAutor,
                created_at: expect.any(String),
                updated_at: expect.any(String),
            }),
        );
    });

    it('Deve fazer uma chamada simulada ao BD', () => {
        const autor = new Autor(objetoAutor);

        autor.salvar = jest.fn().mockReturnValue({
            id: 10,
            nome: 'Lygia Fagundes Telles',
            nacionalidade: 'brasileira',
            genero: null,
            created_at: '2022-10-01',
            updated_at: '2022-10-01',
        });

        const retorno = autor.salvar();

        expect(retorno).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoAutor,
                created_at: expect.any(String),
                updated_at: expect.any(String),
            }),
        );
    }); */
});
