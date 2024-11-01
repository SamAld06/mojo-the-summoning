const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('.')
const db = require('../db/config')

let attack

beforeAll(async () => {
    await db.sync({ force: true })
    attack = await Attack.create({ 
      title: 'Sword Swipe',
      mojoCost: 25,
      staminaCost: 10
    })
})

afterAll(async () => await db.close())

describe("Attack", () => {
    it("has the correct title", async () => {
        expect(attack.title).toBe("Sword Swipe")
    })

    it("has the correct Mojo Cost", async () => {
        expect(attack.mojoCost).toBe(25)
    })

    it("has the correct Stamina Cost", async () => {
        expect(attack.staminaCost).toBe(10)
    })
})