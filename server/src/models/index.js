const { User } = require('./User')
const { Attack } = require('./Attack')
const { Card } = require('./Card')
const { Deck }= require('./Deck')
// import the rest of your models above
// set up the associations here
User.hasOne(Deck)
Deck.belongsTo(User)

Deck.hasMany(Card)
Card.belongsTo(Deck)

Card.belongsToMany(Attack, {through:"CardAttack"})
Attack.belongsToMany(Card, {through:"CardAttack"})
// and then export them all below
module.exports = { User, Attack, Card, Deck }
