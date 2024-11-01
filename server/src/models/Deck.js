const {db, DataTypes, Model } = require("../db/config");

// create your User model here
class Deck extends Model{}

let Deck = Sequelize.define("deck", {
    name: Sequelize.STRING,
    xp: Sequelize.INTEGER
}, {
    sequelize: db
})

module.exports = {
    Deck
};