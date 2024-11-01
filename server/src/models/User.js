const {db, DataTypes, Model } = require("../db/config");

// create your User model here
class User extends Model{}

User.init({
    userName: Sequelize.STRING
}, {
    sequelize: db
})

module.exports = {
    User
};
