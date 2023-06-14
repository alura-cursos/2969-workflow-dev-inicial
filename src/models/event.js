/* eslint-disable camelcase */

class Event {
  constructor({
    id,
    name,
    description,
    date,
    author_id,
    created_at,
    updated_at,
  }) {
    this.id = null || id;
    this.name = name;
    this.description = description;
    this.date = date;
    this.author_id = author_id;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async getAll() {
    return [{
      id: 1,
      name: 'release',
      description: 'description',
      date: '2023-01-01',
      author_id: 1,
      created_at: '2023-01-01 07:00:00',
      updated_at: '2023-01-01 07:00:00',
    }];
  }
}

export default Event;
