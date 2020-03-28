/* eslint-disable no-undef */
const generateHash = require('../../src/utils/generateHash')
describe('Generate Unique Hash', () => {
  it('It should generate an unique 16-char hash.', () => {
    expect(generateHash()).toHaveLength(16)
  })
})
