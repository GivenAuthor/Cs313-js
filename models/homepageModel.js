require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function dbPush(rating, date, note) {
    console.log('push to db')
    let sql = `INSERT INTO note (note_contents) VALUES ('${note}');`;
    pool.query(sql, (err, res) => {
        if (err) {
            console.log("Query Error:");
            return console.log(err);
        }
    });
    let sqlDate = `INSERT INTO day (day_date) VALUES ('${date}');`;
    pool.query(sqlDate, (err, res) => {
        if (err) {
            console.log('Query Error:');
            return console.log(err);
        }
    });
    let sqlRate = `INSERT INTO rating (day_rating) VALUES ('${rating}');`;
    pool.query(sqlRate, (err, res) => {
        if (err) {
            console.log('Query Error:');
            return console.log(err);
        }
    });
}

function dbRequest() {
    console.log('requesting info from db');
}

module.exports = {
    dbPush : dbPush,
    dbRequest : dbRequest
}