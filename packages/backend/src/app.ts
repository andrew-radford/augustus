import express from "express";
import userController from "./controllers/userController";

const app = express();

app.use(express.json());
app.use("/api", userController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
