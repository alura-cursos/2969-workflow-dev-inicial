import Event from '../models/event.js';

class EventsController {
  static getAll = async (req, res) => {
    try {
      const result = await Event.getAll();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default EventsController;
