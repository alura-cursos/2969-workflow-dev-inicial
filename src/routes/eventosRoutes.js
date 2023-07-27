import express from 'express';
import EventosController from '../controllers/eventosController.js';

const router = express.Router();

router
  .get('/eventos', EventosController.listarEventos);
// .get("/eventos/:id", EventosController.listarAutorPorId)
// .get("/eventos/:id/livros", EventosController.listarLivrosPorAutor)
// .post("/eventos", EventosController.cadastrarAutor)
// .put("/eventos/:id", EventosController.atualizarAutor)
// .delete("/eventos/:id", EventosController.excluirAutor)

export default router;
