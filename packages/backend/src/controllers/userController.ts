import { Router, Request, Response } from "express";
import UserModel from "../models/User";

const router = Router();

router.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

export default router;
