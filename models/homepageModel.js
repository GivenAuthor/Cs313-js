require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function callback(data) {
  console.log(data);
  res.status(200).JSON;
}

function dbRequest(req, res) {
  pool.connect();
    console.log('requesting info from db');
    let sql = `SELECT note.note_contents, rating.day_rating, day.day_date
    FROM note
    INNER JOIN day ON note.note_id = day.day_id
    LEFT JOIN rating ON note.note_id = rating.rating_id;`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log('dbRequestError:');
        return console.log(err);
      }
      console.log(result.rows);
      callback(result.rows);
    });
}

module.exports = {
    dbRequest : dbRequest
}