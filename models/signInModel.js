require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString: connectionString,
    ssl: true
});

function loginUser(req, result) {
    console.log('logging in user');
    console.log(req.body.username);
    console.log(req.body.password);
    pool.connect();
    let sql = `SELECT user.username, user_password.password_contents 
    FROM user 
    INNER JOIN user_password 
    ON user.user_id=user_password.user_id;`;
    pool.query(sql, (err, res) => {
        if (err) {
            console.log('select query error: ');
            return console.log(err);
        }
        for (row in res.rows) {
            if (row.username == req.body.name && row.password_contents == req.body.password)
                result.status(200).json({ message: 'Success' });
        }
        const token = jwt.sign({ username }, jwtKey, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
        result.status(400).json({ message: 'No Match' });
    });
}

module.exports = {
    loginUser: loginUser
}