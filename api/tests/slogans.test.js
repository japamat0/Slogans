process.env.NODE_ENV = 'production';

const request = require('supertest');
const app = require('../../server/index');

const slogans = require('../data/defaultSlogans.json');

describe('GET /api/slogans', async () => {
  test('We are able to get json of a list of slogans', async () => {
    const res = await request(app).get('/api/slogans');
    expect(res.statusCode).toBe(200);
    expect(res.body.slogans).toEqual(slogans);
  });
});
