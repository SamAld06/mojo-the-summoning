const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const db = require('../db/config')

let deck

beforeAll(async () => {
    await db.sync({ force: true })
    deck = await Deck.create({ name: '' })
  })