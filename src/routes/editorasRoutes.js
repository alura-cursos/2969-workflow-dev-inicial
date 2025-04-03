import express from 'express';
import EditorasController from '../controllers/editorasController.js';
import knex from 'knex';

const router = express.Router();

router
  .get('/editoras', EditorasController.listarEditoras)
  .get('/editoras/:id/livros', EditorasController.listarLivrosPorEditora)
  .get('/editoras/:id', EditorasController.listarEditoraPorId)
  .post('/editoras', EditorasController.cadastrarEditora)
  .put('/editoras/:id', EditorasController.atualizarEditora)
  .delete('/editoras/:id', EditorasController.excluirEditora);

export default router;
