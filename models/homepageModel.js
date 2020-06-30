require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function dbPush(rating, date, note) {
    console.log('push to db')
}

function dbRequest() {
    console.log('requesting info from db');
}

module.exports = {
    dbPush : dbPush,
    dbRequest : dbRequest
}