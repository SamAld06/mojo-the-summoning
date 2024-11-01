const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const db = require('../db/config')

let deck

beforeAll(async () => {
    await db.sync({ force: true })
    deck = await Deck.create({ 
      name: 'Warrior',
      xp: 153
    })
})

afterAll(async () => await db.close())

describe("Deck", () => {
  it("has the correct name", async () => {
    expect(deck.name).toBe("Warrior")
  })

  it("has the correct xp amount", async () => {
    expect(deck.xp).toBe(153)
  })
})