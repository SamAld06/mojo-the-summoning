const {db, DataTypes, Model } = require("../db/config");

// create your User model here
class Deck extends Model{}

Deck.init({
    name: Sequelize.STRING,
    xp: Sequelize.INTEGER
}, {
    sequelize: db
})

module.exports = {
    Deck
};