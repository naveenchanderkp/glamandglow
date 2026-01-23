const request = require('supertest')
// import app from "../Services/AuthServices/Src/app.js";
// import server from "../Services/AuthServices/Src/server.js";
const app = require('../Services/AuthServices/Src/app');
const server = require('../Services/AuthServices/Src/server');
const mongoose = require('mongoose');

describe('GET auth/user',()=>{
    it('it should return 200 ok',async()=>{
       const res = await request(app).get('/auth/user')
       expect (res.statusCode).toBe(200)
    })
    it('it should return tasks array',async()=>{
      const res = await request(app).get('/auth/user')
      expect (typeof res.body).toBe('object')
      expect(res.body).toHaveProperty('tasks')
      console.log(res.body.tasks,"Data seeded")
}) 
})

afterAll(async () => {
  const mongoose = require('mongoose');

  await mongoose.connection.close();
});
