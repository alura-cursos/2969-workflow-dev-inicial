import express from 'express';
import EventosController from '../controllers/autoresController.js';

const router = express.Router();

router
  .get('/eventos', EventosController.listarEventos);

export default router;
