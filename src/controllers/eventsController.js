import Event from '../models/event.js';

class EventsController {
  static freeAccessToEvents = () => process.env.EVENT_FLAG === 'true';

  static getAll = async (req, res) => {
    if (this.freeAccessToEvents()) {
      try {
        const result = await Event.getAll();
        return res.status(200).json(result);
      } catch (err) {
        return res.status(500).json(err.message);
      }
    } else {
      return res.status(404).send();
    }
  };
}

export default EventsController;
