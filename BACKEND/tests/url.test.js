import { afterAll, beforeAll, describe, it } from '@jest/globals';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app.js';
dotenv.config();


beforeAll(async ()=>{
    await mongoose.connect('mongodb://localhost:27017/test',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    app.use((req, res, next) => {
    req.user = { _id: new mongoose.Types.ObjectId() }
    next()
})
},10000)


afterAll(async()=>{
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
})

describe('POST /api/create', () => {
    it('should create a short url', async () => {
        const res = await request(app)
            .post('/api/create')
            .send({url:'https://www.google.com'})
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty('shortUrl')
    })

    it('should return 400 for invalid url', async () => {
        const res = await request(app)
            .post('/api/create')
            .send({url:'invalid'})
        expect(res.statusCode).toBe(400)
    })
})