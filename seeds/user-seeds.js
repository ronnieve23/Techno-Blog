const sequelize = require('../config/connection');
const { User, Post } = require('../models');
const userdata = [
    {
        username: 'zmiller',
        email: 'zmiller@mail.com',
        password: 'password123'
    },
    {
        username: 'jkamman',
        email: 'jkamman@mail.com',
        password: 'password123'
    },



];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;