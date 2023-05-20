/* eslint-disable no-undef */
const mysql = require('mysql2/promise');
require('dotenv').config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env;

const connection = mysql.createPool({
	host: MYSQL_HOST,
	user: MYSQL_USER,
	password: MYSQL_PASSWORD,
	database: MYSQL_DB,
});

module.exports = connection;
