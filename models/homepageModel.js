require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function dbRequest() {
    console.log('requesting info from db');
}

module.exports = {
    dbRequest : dbRequest
}