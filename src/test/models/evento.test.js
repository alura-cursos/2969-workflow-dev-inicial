import { describe, expect, it } from "@jest/globals";
import Evento from "../../models/evento.js";

describe("Testando o modelo Autor", () => {
  const objetoEvento = {
    nome: "Evento de teste",
    descricao: "descricao do evento de teste",
    data: "2023-01-01",
    autor_id: 1,
  };

  it("Deve instanciar um novo evento", () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(expect.objectContaining(objetoEvento));
  });
});
