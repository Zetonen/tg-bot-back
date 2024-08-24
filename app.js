import express from "express";
import cors from "cors";
import gameRouter from "./src/routes/api/game.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  next();
});
app.use('/',gameRouter)

app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
