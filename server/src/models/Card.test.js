const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const db = require('../db/config')

let card

beforeAll(async () => {
    await db.sync({ force: true })
    card = await Card.create({ 
      name: "Bjorn",
      mojo: 150,
      stamina: 200,
      imgURL: "https://pixabay.com/illustrations/ai-generated-viking-warrior-8144932/"
    })
})

afterAll(async () => await db.close())

describe("Card", () => {

    it("has the correct name", async () => {
        expect(Card.name).toBe("Bjorn")
    })

    it("has the correct amount of mojo", async () => {
        expect(Card.mojo).toBe(150)
    })

    it("has the correct amount of stamina", async () => {
        expect(Card.stamina).toBe(200)
    })

    it("has the correct image URL", async () => {
        expect(Card.imgURL).toBe("https://pixabay.com/illustrations/ai-generated-viking-warrior-8144932/")
    })

})