import mysql from "mysql2/promise";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "password", // Replace with your MySQL password
  database: "user_service", // Replace with your database name
});

export default pool;
