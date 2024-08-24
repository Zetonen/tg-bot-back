import mongoose from "mongoose";
import app from "./app.js";
import LaunchVBot from "./src/bot/bot.js";

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3001, () => {
      const Bot = LaunchVBot();
      console.log("Example app listening on port 3001");
    });
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
