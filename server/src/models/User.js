const {db, DataTypes, Model } = require("../db/config");

// create your User model here
class User extends Model{}

let User = Sequelize.define("user", {
    userName: Sequelize.STRING
}, {
    sequelize: db
})

module.exports = {
    User
};
