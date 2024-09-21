// api.test.js

const request = require('supertest');
const app = require('./api');

describe('Test root route', () => {
    it('GET / should return "Welcome to the payment system"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Welcome to the payment system');
    });
});

describe('Cart endpoint', () => {
  
  it('should return status code 200 and payment methods message when :id is a number', async () => {
    const res = await request(app).get('/cart/123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Payment methods for cart 123');
  });
  
  it('should return status code 404 when :id is not a number', async () => {
    const res = await request(app).get('/cart/abc');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error', 'Cart ID must be a number');
  });

  it('should return status code 404 when no cart ID is provided', async () => {
    const res = await request(app).get('/cart/');
    expect(res.statusCode).toEqual(404);
  });
});
