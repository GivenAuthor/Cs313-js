require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function registerUser(req, result) {
    console.log('registering user');
    console.log(req.username);
    console.log(req.password);

    /*
    let sql = `SELECT username FROM user_name WHERE USERNAME = '${body.username}';`;
    pool.query(sql, (err, res) => {
        if (err) {
            console.log("Query Error");
            res.status(400).json({ message: `Error: ${err}`, data: null });
        }
        for (row in res.rows) {
            if (row.username == name)
            res.status(400).json({ message: `Error: username exists`, data: null });
        }
    });
    */
    pool.connect();
    let insertPassword = `INSERT INTO account_password (password_contents) VALUES ('${req.password}');`;
    pool.query(insertPassword, (err, res) => {
        if (err) {
            console.log('Password insertion error');
            res.status(400).json({ message: `Error: ${err}`, data: null });
        }
        console.log('Inserted password into db');
    });
    let insert = `INSERT INTO user_name (username) VALUES ('${req.username}');`;
    pool.query(insert, (err, res) => {
        if (err) {
            console.log('Username insertion error');
            res.status(400).json({ message: `Error: ${err}`, data: null });
        }
        console.log('Inserted username into db');
    });
    res.status(200).json({ message: 'Success'});
}

module.exports = {
    registerUser: registerUser
}