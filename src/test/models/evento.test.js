
import {
    describe, expect, it
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
    const objetoEvento = {
        nome: 'Evento Teste',
        descricao: 'Descricao Evento Teste',
        data: '2023-01-01',
        autor_id: 7,
    };

    it('Deve instanciar um novo evento', () => {
        const evento = new Evento(objetoEvento);

        expect(evento).toEqual(
            expect.objectContaining(objetoEvento),
        );
    })
})