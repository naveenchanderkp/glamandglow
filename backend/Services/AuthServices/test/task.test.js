const request = require('supertest');
const app = require('../Src/app');   // ✅ ONLY app
const mongoose = require('mongoose');

jest.setTimeout(20000); // avoid CI timeout while debugging

describe('GET /auth/user', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/auth/user');
    expect(res.statusCode).toBe(200);
  });

  it('should return tasks array', async () => {
    const res = await request(app).get('/auth/user');
    expect(typeof res.body).toBe('object');
    expect(res.body).toHaveProperty('tasks');
    console.log(res.body.tasks, 'Data seeded');
  });
});

afterAll(async () => {
  await mongoose.connection.close(); // ✅ close DB only
});
