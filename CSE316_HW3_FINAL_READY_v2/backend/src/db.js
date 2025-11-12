import mysql from 'mysql2/promise';
const { DB_HOST='db', DB_USER='appuser', DB_PASSWORD='apppass', DB_NAME='shopdb', DB_PORT=3306 } = process.env;
export const pool = mysql.createPool({ host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: DB_NAME, port: Number(DB_PORT), connectionLimit: 10 });
