import {
  describe, expect, it,
} from '@jest/globals';
import Event from '../../models/event.js';

describe('Testing Event model', () => {
  const eventObjetc = {
    name: 'Event Test',
    description: 'event test description',
    date: '2023-01-01',
    author_id: 1,
  };

  it('Should create a new Event', () => {
    const event = new Event(eventObjetc);

    expect(event).toEqual(
      expect.objectContaining(eventObjetc),
    );
  });
});
