require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function dbPush(data) {
    const info = JSON.parse(data);
    console.log(info.day);
    console.log(info.rating);
    console.log(info.note);


    console.log('push to db');
    pool.connect();
    let sql = `INSERT INTO note (note_contents) VALUES ('${info.note}');`;
    pool.query(sql, (err, res) => {
        if (err) {
            console.log("Query Error:");
            return console.log(err);
        }
    });
    let sqlDate = `INSERT INTO day (day_date) VALUES ('${info.day}');`;
    pool.query(sqlDate, (err, res) => {
        if (err) {
            console.log('Query Error:');
            return console.log(err);
        }
    });
    let sqlRate = `INSERT INTO rating (day_rating) VALUES ('${info.rating}');`;
    pool.query(sqlRate, (err, res) => {
        if (err) {
            console.log('Query Error:');
            return console.log(err);
        }
    });
}

module.exports = {
    dbPush : dbPush
}