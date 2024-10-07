/* eslint-disable linebreak-style */
import express from 'express';
import eventosController from '../controllers/eventosController.js';

const router = express.Router();

router
  .get('/eventos', eventosController.listarEvetos);

export default router;
