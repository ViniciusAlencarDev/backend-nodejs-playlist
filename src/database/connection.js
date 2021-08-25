const Sequelize = require('sequelize')

const username = process.env.DBUSER;
const username = process.env.DBPASS;
const username = process.env.DBDATABASE;
const username = process.env.DBHOST;
const username = process.env.DBDIALECT;

const connection = new Sequelize(username, password, database, {
    host: host,
    dialect: 'mysql'
})

module.exports = connection
