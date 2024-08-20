const request = require('supertest');
const app = require('../app');  // Express uygulamanızın ana dosyasını buraya ekleyin
const settings = require('../jest.setup');

describe('Tour Controller', () => {
    it('GET /api/v1/tours - get all tours', async () => {
        const res = await request(app).get('/api/v1/tours');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('success');
        expect(res.body.data.tours).toBeDefined();
    });

    it('GET /api/v1/tours/:id - get a tour by id', async () => {
        const res = await request(app).get('/api/v1/tours/66a987302737ba71d9ab1154'); // var olan bir ID girin
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('success');
        expect(res.body.data.tour).toBeDefined();
    });

    it('POST /api/v1/tours - create a new tour', async () => {
        const newTour = {
            name: 'Test Tour',
            price: 499
        };
        const res = await request(app).post('/api/v1/tours').send(newTour);
        expect(res.statusCode).toBe(201);
        expect(res.body.status).toBe('success');
        expect(res.body.data.tour).toMatchObject(newTour);
    });

    it('PATCH /api/v1/tours/:id - update a tour', async () => {
        const updateData = {
            price: 599
        };
        const res = await request(app).patch('/api/v1/tours/66a987302737ba71d9ab1154').send(updateData);
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('success');
        expect(res.body.data.tour.price).toBe(599);
    });

    it('DELETE /api/v1/tours/:id - delete a tour', async () => {
        const res = await request(app).delete('/api/v1/tours/66a987302737ba71d9ab1154');
        expect(res.statusCode).toBe(204);
    });
});
