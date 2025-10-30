import express from 'express';
import EventosController from '../controllers/eventosController.js';

const router = express.Router();

router
  .get('/eventos', EventosController.listarEvento);

export default router;
