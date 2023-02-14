const app = require('../../app');
const request = require('supertest');

describe('Post a new bill', ()=>{
    it('returns status 200 if passed', async()=>{
        const data = {
                patientName: 'Venky',
                patientAddress: 'Mumbai',
                hospitalName: 'Sancheti',
                dateOfService: '2020-08-26',
                billAmount: 540,
              }
        const res= await request(app).post('/items').send(data)

        expect(res.statusCode).toEqual(200);
        expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
    })

    it('returns status 400 if failed', async()=>{
        const data = {
                patientName: 'Venky',
                patientAddress: 'Mumbai',
                hospitalNamee: 'Sancheti',
                dateOfService: '2020-08-26',
                billAmount: 540,
              }
        const res= await request(app).post('/items').send(data)

        expect(res.statusCode).toEqual(400);
    })
})


describe('Get all bills', ()=>{
    it('returns status 200 if Get passed', async()=>{
        const res= await request(app).get('/items')
        expect(res.statusCode).toEqual(200);
    })
})