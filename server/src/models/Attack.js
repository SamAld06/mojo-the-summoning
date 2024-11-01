const {db, DataTypes, Model } = require("../db/config");

// create your User model here
class Attack extends Model{}

let Attack = Sequelize.define("attack", {
    title: Sequelize.STRING,
    mojoCost: Sequelize.INTEGER,
    staminaCost: Sequelize.INTEGER

}, {
    sequelize: db
})
module.exports = {
    Attack
};