require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function registerUser(data, req, res) {
    console.log('registering user');
    console.log(data.username);
    console.log(data.password);
    let t2 = JSON.stringify(data.username);
    console.log(t2);
    res.status(200).json({ message: 'Success'});

    let sql = `SELECT username FROM user_name WHERE USERNAME = '${data.username}';`;
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
    

    let insertPassword = `INSERT INTO account_password (password_contents) VALUES ('${data.password}');`;
    pool.query(insertPassword, (err, res) => {
        if (err) {
            console.log('Password insertion error');
            res.status(400).json({ message: `Error: ${err}`, data: null });
        }
        console.log('Inserted password into db');
    });
    let insert = `INSERT INTO user_name (username) VALUES ('${data.username}');`;
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