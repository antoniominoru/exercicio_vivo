const request = require("supertest")
const app = require('../app/routes')

describe('Test API in app server',()=>{
    it('Test get /test/A', async () => {
        const response = await request(app).get("/api/A")
        expect(response.text).toEqual('80%')
        expect(response.statusCode).toBe(200)
    })
})

describe('Test API in app server',()=>{
    it('Test get /test/B', async () => {
        const response = await request(app).get("/api/B")
        expect(response.text).toEqual('85%')
        expect(response.statusCode).toBe(200)
    })
})

describe('Test API in app server',()=>{
    it('Test get /test/C', async () => {
        const response = await request(app).get("/api/C")
        expect(response.text).toEqual('90%')
        expect(response.statusCode).toBe(200)
    })
})

describe('Test API in app server',()=>{
    it('Test get /test/aa', async () => {
        const response = await request(app).get("/api/aa")
        expect(response.text).toEqual('Error')
        expect(response.statusCode).toBe(200)
    })
})