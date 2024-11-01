const {db, DataTypes, Model } = require("../db/config");

// create your User model here
class Card extends Model{}

Card.init({
    name: Sequelize.STRING,
    mojo: Sequelize.INTEGER,
    stamina: Sequelize.INTEGER,
    imgURL: Sequelize.STRING
}, {
    sequelize: db
})

module.exports = {
    Card
};