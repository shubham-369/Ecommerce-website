const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'node_complete',
    password : 'r333@666m999'
});

module.exports = pool.promise();