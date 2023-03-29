'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  // alter table in mysql from sequelize
  User.init({
    username: {
      // type data string
      type: DataTypes.STRING,
      // null = false
      allowNull: false
    },
    email: {
      // type data string
      type: DataTypes.STRING,
      // null = false
      allowNull: false,
      // type data unique
      unique: true
    },
    password: {
      // type data string
      type: DataTypes.STRING,
      // null = false
      allowNull: false
    },
    age: {
      // type data Integer
      type: DataTypes.INTEGER,
      // null = false
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    // off in time stamp in database
    // timestamps: false
  });
  return User;
};