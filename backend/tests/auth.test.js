// tests/auth.test.js
const request = require('supertest');
const app = require('../app'); // Express app (not the server file)
const mongoose = require('mongoose');
// const User = require('../models/User');

beforeAll(async () => {
  // Connect to test database
  await mongoose.connect('mongodb://localhost:27017/testdb', {
   
  });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe('Auth API', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        password: 'Test123!',
        role: 'user',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should login the user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'Test123!',
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
