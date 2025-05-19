const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rootpass',
  database: 'my_app_db',
  port: '3307'
});

module.exports = pool;