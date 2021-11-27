const { User, UserSchema } = require('./user.model');

function setupmModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupmModels;
