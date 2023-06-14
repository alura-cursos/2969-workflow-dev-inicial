/* eslint-disable no-unused-expressions */
import { after } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app.js';
import db from '../../db/dbconfig.js';

chai.use(chaiHttp);
const { expect } = chai;

after(async () => {
  await db.destroy();
});

describe('GET em /events', () => {
  it('Should return a list of events', (done) => {
    process.env.EVENT_FLAG = true;

    chai.request(app)
      .get('/events')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('name');
        expect(res.body[0]).to.have.property('description');
        done();
      });
  });

  it('Should return error 404', (done) => {
    process.env.EVENT_FLAG = false;
    chai.request(app)
      .get('/events')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});
