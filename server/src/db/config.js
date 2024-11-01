// add your database connection here
const sequelize = require("sequelize")
const {Sequelize} = require("sequelize")
const db = new Sequelize({
    dialect: "sqlite"
})

module.exports = {
    db,
    sequelize,
    Sequelize
}
