import express from "express";
import userRoute from "./routes/usersRoute.js";
const PORT = 8080;

const app = express();

app.use(express.json());
app.use(userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
