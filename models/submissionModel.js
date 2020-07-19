require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function dbPush(req, result) {
    console.log(req.body.day);
    console.log(req.body.rating);
    console.log(req.body.note);

    console.log('push to db');
    pool.connect();
    let sql = `INSERT INTO note (note_contents) VALUES ('${req.body.note}');`;
    pool.query(sql, (err, res) => {
        if (err) {
            console.log("Note Query Error:");
            //result.status(400).json({ message: `Error: ${err}`, data: null });
        }
    });
    let sqlDate = `INSERT INTO day (day_date) VALUES ('${req.body.day}');`;
    pool.query(sqlDate, (err, res) => {
        if (err) {
            console.log('Date Query Error:');
            result.status(400).json({ message: `Error: ${err}`, data: null });
        }
    });
    let sqlRate = `INSERT INTO rating (day_rating) VALUES ('${req.body.rating}');`;
    pool.query(sqlRate, (err, res) => {
        if (err) {
            console.log('rate Query Error:');
            result.status(400).json({ message: `Error: ${err}`, data: null });
        }
    });
    result.status(200).json({ message: 'Success'});
}

module.exports = {
    dbPush : dbPush
}