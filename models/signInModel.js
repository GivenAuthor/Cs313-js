require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function loginUser(name, password) {
    console.log('logging in user');
    console.log(name);
    console.log(password);
    //pool.connect();
    let sql = `SELECT user_name.username, account_password.password_contents 
    FROM user_name 
    INNER JOIN account_password 
    ON user_name.user_id=account_password.password_id;`;
    pool.query(sql, (err, res) => {
        if (err) {
            console.log('select query error: ');
            return console.log(err);
        }
        for (row in res.rows) {
            if (row.username == name && row.password_contents == password)
            res.render('../homepage');
        }
        return false;
    });
}

module.exports = {
    loginUser: loginUser
}