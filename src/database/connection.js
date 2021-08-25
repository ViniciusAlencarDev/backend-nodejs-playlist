const Sequelize = require('sequelize')

const username = process.env.DBUSER;
const password = process.env.DBPASS;
const database = process.env.DBDATABASE;
const host = process.env.DBHOST;
const dialect = process.env.DBDIALECT;

const connection = new Sequelize(database, username, password, {
    host,
    dialect
})

module.exports = connection
