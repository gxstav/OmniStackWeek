const connection = require('../database/connection')
const crypto = require('crypto')
module.exports = {
  async list(request, response) {
    const ongs = await connection('ong').select('*')
    return response.json(ongs)
  },
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body
    const id = crypto.randomBytes(8).toString('HEX')
    await connection('ong').insert({ id, name, city, uf, email, whatsapp }).catch((e) => console.error(e))
    return response.json({ id: id })
  }
}