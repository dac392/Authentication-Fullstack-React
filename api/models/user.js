'use strict'
const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    class User extends Model {}
    User.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: {msg: 'A name is required'},
              notEmpty: {msg: 'name field cannot be blanck'}
            }
        },
        username:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'A username is required' },
                notEmpty: { msg: 'username cannot be blank' }
            }
        },
        password: {
            type: Sequelize.STRING, // does not get written into the db
            allowNull: false,
            validate: {
              notNull: {msg: 'A password is required'},
              notEmpty: {msg: 'password field cannot be blanck'},
              len: {args:[8,20], msg: 'your password must be between 8 and 20 characters in length'}
            }
        }
    }, { sequelize });

    return User;
}