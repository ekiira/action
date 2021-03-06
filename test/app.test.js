/* eslint-disable no-undef */

const chai = require('chai');

const { expect } = chai;
const request = require('supertest');
const app = require('../app');

it('Main page content', (done) => {
  request(app)
    .get('/')
    .end((err, res) => {
      expect(res.text).to.equal('homepage');
    });
  done();
});

// it('Get memes', async () => {
//   request(app)
//     .get('/view')
//     .end((err, res) => {
//       expect(res.statusType).to.eq(2);
//       expect(res.status).to.eq(200);
//       // expect(res.text).to.have.lengthOf(360)
//     });
// });

// it('Create Memes', async () => {
//   request(app)
//     .post('/add')
//     .send({
//       caption: 'is it working',
//       imageUrl: 'someurl',
//       imageUploag: '',
//     })
//     .end((err, res) => {
//       expect(res.status).to.eq(200);
//     });
// });
