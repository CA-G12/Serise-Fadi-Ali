/* eslint-disable no-undef */
const supertest = require('supertest');
const router = require('../src/routes');

test('(/) Main route returns 200', (done) => {
  supertest(router).get('/').expect(200).expect('Content-Type', 'text/html')
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});

test('(/public/js/app.js) returns the js file (/) page', (done) => {
  supertest(router).get('/public/js/app.js').expect(200).expect('Content-Type', 'text/js')
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});

test('(/public/app.css) returns the css file for (/) page', (done) => {
  supertest(router).get('/public/app.css').expect(200).expect('Content-Type', 'text/css')
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});
