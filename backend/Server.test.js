const request = require('supertest');
const app = require('./server');

describe('loading express', () => {
  it('responds to /', (done) => {
    request(app).get('/').expect(200, done);
  });
});
