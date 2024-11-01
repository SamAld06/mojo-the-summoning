const {describe, it, expect, beforeAll, afterAll} = require("@jest/globals")
const {User, Attack, Deck, Card} = require("./index")
const {db} = require("../db/config")

beforeAll(async () => {
    await db.sync({force:true})
})
afterAll(async () => await db.close())

describe("Association:", () => {
    test("User - Deck (one to one)", async () => {
        const myDeck = await Deck.create({name: "Goblin Gang", xp: 20})
        const myUser = await User.create({username: "MojoMaster123"})
        const currentDeck = await myUser.setDeck(myDeck)

        expect(currentDeck instanceof Deck).toBeTruthy
    })

    test("Deck - card (one to many)", async () => {
        let myDeck = await Deck.create({name: "Goblin Gang", xp: 20})
        const card1 = await Card.create({name: "Goblin scout", mojo: 50, stamina: 200, imgURL: ""})
        const card2 = await Card.create({name: "Goblin Wizard", mojo: 250, stamina: 50, imgURL: ""})

        await myDeck.addCard(card1)
        await myDeck.addCard(card2)


        expect(myDeck.getCards().length).toBe(2)
        expect(myDeck.getCards() instanceof Card).toBeTruthy
    })
    test("Attack - Card (many to many)", async () => {
        let currentAttack = await Attack.create({name: "Poison Slash", mojoCost: 15, staminaCost: 25})
        const card1 = await Card.create({name: "Goblin scout", mojo: 50, stamina: 200, imgURL: ""})
        const card2 = await Card.create({name: "Goblin Wizard", mojo: 250, stamina: 50, imgURL: ""})

        await currentAttack.addCard(card1)
        await currentAttack.addCard(card2)

        expect(currentAttack.getCards().length).toBe(2)
        expect(currentAttack.getCards() instanceof Attack).toBeTruthy
    })
    test("Card - Attack (many to many)", async () => {
        let currentCard = await Card.create({name: "Goblin scout", mojo: 50, stamina: 200, imgURL: ""})
        const attack1 = await Attack.create({name: "Coin Gun", mojoCost: 0, staminaCost: 10})
        const attack2 = await Attack.create({name: "Poison Slash", mojoCost: 15, staminaCost: 25})

        await currentCard.addAttack(attack1)
        await currentCard.addAttack(attack2)

        expect(currentCard.getAttacks().length).toBe(2)
        expect(currentCard.getAttacks() instanceof Card).toBeTruthy
    })
})