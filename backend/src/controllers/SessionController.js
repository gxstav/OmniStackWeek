const connection = require('../database/connection')
module.exports = {
  async login(request, response) {
    const { id } = request.body
    const ong = await connection('ong').where('id', id).select('name').first()
    if (!ong) {
      return response.status(400).json({ error: "No results found with provided ID" })
    }
    return response.json(ong)
  }
}