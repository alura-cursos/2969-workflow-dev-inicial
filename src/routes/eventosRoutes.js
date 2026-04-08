import express from 'express';
import EventosController from '../controllers/eventosControllers.js';

const router = express.Router();

router
  .get('/autores', EventosController.listarEventos)
  

export default router;
