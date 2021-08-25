const Sequelize = require('sequelize')

const username = process.env.DBUSER;
const password = process.env.DBPASS;
const database = process.env.DBDATABASE;
const host = process.env.DBHOST;
const dialect = process.env.DBDIALECT;

const connection = new Sequelize(username, password, database, {
    host,
    dialect
})

module.exports = connection
