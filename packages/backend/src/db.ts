import mysql from "mysql2/promise";
import { BackendConfig } from "./config";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: BackendConfig.DB_USER,
  password: BackendConfig.DB_PASSWORD,
  database: "user_service", // Replace with your database name
});

export default pool;
