require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function registerUser(data) {
    console.log('registering user');
    console.log(data);
    //const info = JSON.parse(data);
    console.log(data.username);
    console.log(data.password);
    /*
    let sql = `SELECT username FROM user_name WHERE USERNAME = '${info.username}';`;
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
    let insertPassword = `INSERT INTO account_password (password_contents) VALUES ('${info.password}');`;
    pool.query(insertPassword, (err, res) => {
        if (err) {
            console.log('Password insertion error');
            return console.log(err);
        }
        console.log('Inserted password into db');
    });
    let insert = `INSERT INTO user_name (username) VALUES ('${info.username}');`;
    pool.query(insert, (err, res) => {
        if (err) {
            console.log('Username insertion error');
            return console.log(err);
        }
        console.log('Inserted username into db');
    });
    */
}

module.exports = {
    registerUser: registerUser
}