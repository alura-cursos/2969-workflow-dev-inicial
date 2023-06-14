import express from 'express';
import EventsController from '../controllers/eventsController.js';

const router = express.Router();

router
  .get('/events', EventsController.getAll);

export default router;
