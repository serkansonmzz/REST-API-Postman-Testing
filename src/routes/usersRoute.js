import { Router } from "express";
import short from "short-uuid";
import users from "../data/users.js";
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json("Welcome To Home Page");
});

router.get("/users", (req, res) => {
  if (users.length === 0) {
    return res.status(404).json({ message: "Users not found" });
  }
  res.json(users);
});

router.get("/users/country=:country", (req, res) => {
  const { country } = req.params;

  const filteredUsers = users.filter(
    (user) => user.country.toLowerCase() === country.toLowerCase()
  );
  if (!filteredUsers || filteredUsers.length === 0) {
    return res.status(404).json({ message: `No Person found from ${country}` });
  }
  res.status(200).json(filteredUsers);
});

router.get("/users/highest-salary", (req, res) => {
  let highestSalary = users[0];
  users.forEach((user) => {
    if (highestSalary.salary < user.salary) {
      highestSalary = user;
    }
  });

  res.status(200).json(highestSalary);
});

router.get("/users/lowest-salary", (req, res) => {
  let lowestSalary = users[0];
  users.forEach((user) => {
    if (lowestSalary.salary > user.salary) {
      lowestSalary = user;
    }
  });

  res.status(200).json(lowestSalary);
});

router.post("/users", (req, res) => {
  const user = req.body;
  const userId = short.generate();
  const newUser = { id: userId, ...user };
  users.push(newUser);
  res.status(201).json({ message: `User created successfully` });
});

export default router;
