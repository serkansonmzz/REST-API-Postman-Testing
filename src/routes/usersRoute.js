import { Router } from "express";
import short from "short-uuid"; //short.generate();
import users from "../data/users.js";
const router = Router();

router.get("/", (res, req) => {
  res.send("Welcome To Home Page");
});

router.get("/users", (req, res) => {
  if (users.length === 0) {
    return res.status(404).json({ message: "Users not found" });
  }
  res.json(users);
});

export default router;
