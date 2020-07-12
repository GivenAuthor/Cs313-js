require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function dbRequest(req, res) {
  pool.connect();
    console.log('requesting info from db');
    let sql = `SELECT note.note_contents, rating.day_rating, day.day_date
    FROM note
    INNER JOIN day ON note.note_id = day.day_id
    LEFT JOIN rating ON note.note_id = rating.rating_id`;
    pool.query(sql, (err, result) => {
      if (err)
        res.status(400).json({ message: `Error: ${err}`, data: null });
      else {
        let data = [];
        result.rows.forEach(row => {
          data.push(row);
        });

        res.status(200).json({ message: 'Success', data: data });
      }

    });
}

module.exports = {
    dbRequest : dbRequest
}
