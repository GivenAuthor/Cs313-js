require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function dbRequest() {
  pool.connect();
    console.log('requesting info from db');
    let sql = `SELECT note.note_contents, rating.day_rating, day.day_date
    FROM note
    INNER JOIN day ON note.note_id = day.day_id
    LEFT JOIN rating ON note.note_id = rating.rating_id`;
    pool.query(sql, (err, res) => {
      if (err) {
        console.log('dbRequestError:');
        return console.log(err);
      }
      console.log(res.rows);
      return (res.rows);
    });
}

module.exports = {
    dbRequest : dbRequest
}