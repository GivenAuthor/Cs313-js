require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function registerUser(data) {
    const info = JSON.parse(data);
    console.log(info.username);
    console.log(info.password);
    console.log('registering user');
    let sql = `SELECT username FROM user_name WHERE USERNAME = '${name}';`;
    pool.query(sql, (err, res) => {
        if (err) {
            console.log("Query Error");
            return console.log(err);
        }
        for (row in res.rows) {
            if (row.username == name)
            return false;
        }
    });
    let insertPassword = `INSERT INTO account_password (password_contents) VALUES ('${password}');`;
    pool.query(insertPassword, (err, res) => {
        if (err) {
            console.log('Password insertion error');
            return console.log(err);
        }
        console.log('Inserted password into db');
    });
    let insert = `INSERT INTO user_name (username) VALUES ('${name}');`;
    pool.query(insert, (err, res) => {
        if (err) {
            console.log('Username insertion error');
            return console.log(err);
        }
        console.log('Inserted username into db');
    });
}

module.exports = {
    registerUser: registerUser
}