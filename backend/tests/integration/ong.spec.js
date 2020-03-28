/* eslint-disable no-undef */
const supertest = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')
describe('Creating ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })
  afterAll(async () => {
    await connection.destroy()
  })
  it('Creates a new ONG using name, email, phone number, city and state.', async () => {
    const response = await supertest(app)
      .post('/ong')
      .send({
        name: "Centro Comunitário de Zoonoses",
        email: "contato@ccz.com",
        whatsapp: "48990000009",
        city: "Florianópolis",
        uf: "SC"
      })
    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(16)
  })
})