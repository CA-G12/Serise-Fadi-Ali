const supertest = require('supertest');
const router = require('../src/routes');

test('(/) Main route returns 200', (done) => {
  supertest(router).get('/').expect(200).expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});
