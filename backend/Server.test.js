const request = require('supertest');
const app = require('./app');

describe('loading express', () => {

  it('should return a 200', (done) => {
    request(app).get('/').expect(200, done);
  });
});
