import pool from "../db";

interface User {
  id: number;
  name: string;
  email: string;
  created: Date;
}

class UserModel {
  static async getAllUsers(): Promise<User[]> {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows as User[];
  }
}

export default UserModel;
