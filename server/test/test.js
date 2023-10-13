const request = require('supertest');
const app = require('../server'); 

describe('Buyer CRUD Operations', () => {
  let testBuyerId;

  it('should create a new buyer', async () => {
    const response = await request(app)
      .post('/api/v1/buyers')
      .send({ name: 'Test Buyer', text: 'Test Task', color: '#FFFFFF' })
      .expect(201);
  
    // timeout increase
    testBuyerId = response.body._id;
  }, 10000); 
  

  it('should get all buyers', async () => {
    await request(app)
      .get('/api/v1/buyers')
      .expect(200);
  });

  it('should get a buyer by name', async () => {
    await request(app)
      .get(`/api/v1/buyers/${encodeURIComponent('Test Buyer')}`)
      .expect(200);
  });

  it('should update a buyer by name', async () => {
    await request(app)
      .put(`/api/v1/buyers/${encodeURIComponent('Test Buyer')}`)
      .send({ text: 'Updated Task', color: '#000000' })
      .expect(200);
  });

  it('should delete a buyer by name', async () => {
    await request(app)
      .delete(`/api/v1/buyers/${encodeURIComponent('Test Buyer')}`)
      .expect(200);
  });

  it('should get a buyer by ID', async () => {
    await request(app).get(`/api/v1/buyers/id/${testBuyerId}`).expect(200);
  });

  it('should update a buyer by ID', async () => {
    await request(app)
    .put(`/api/v1/buyers/id/${testBuyerId}`)
    .send({ name: 'Updated Buyer', text: 'Updated Task', color: '#000000' })
    .expect(200);
  });

  it('should delete a buyer by ID', async () => {
    await request(app)
      .delete(`/api/v1/buyers/delete/${testBuyerId}`)
      .expect(200);
  });
});
