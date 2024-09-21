const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');  // Import your Express app
const { expect } = chai;

chai.use(chaiHttp);

describe('API Tests', () => {
  describe('GET /', () => {
    it('should return Welcome to the payment system', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return Payment methods for cart :id when id is valid', (done) => {
      chai.request(app)
        .get('/cart/12')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Payment methods for cart 12');
          done();
        });
    });

    it('should return 404 for invalid cart id', (done) => {
      chai.request(app)
        .get('/cart/hello')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.text).to.include('Cannot GET /cart/hello');
          done();
        });
    });
  });
});
