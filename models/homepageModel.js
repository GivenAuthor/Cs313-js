require('dotenv').config();
const { Pool } = require('pg');
const { json } = require('express');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function callback(data) {
  console.log(data);
  res.JSON;
}

function dbRequest(req, res) {
  pool.connect();
    console.log('requesting info from db');
    let sql = `SELECT note.note_contents, rating.day_rating, day.day_date
    FROM note
    INNER JOIN day ON note.note_id = day.day_id
    LEFT JOIN rating ON note.note_id = rating.rating_id;`;
    pool.query(sql, (err, result) => {
      if (err)
      res.status(400).json({message: `Error: ${err}`});
      else
      res.status(200).json({ data: result.data});
    });
}

module.exports = {
    dbRequest : dbRequest
}