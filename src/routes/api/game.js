import express from "express";
import gamesController from "../../controllers/games-controller.js";
import { isEmptyBody } from "../../middlewares/index.js";
import validateBody from "../../decorators/validateBody.js";
import { guessGameSchema, startGameSchema } from "../../models/Game.js";

const gameRouter = express.Router();
gameRouter.post(
  "/start_game",
  isEmptyBody,
  validateBody(startGameSchema),
  gamesController.startGame
);

gameRouter.post(
  "/guess",
  isEmptyBody,
  validateBody(guessGameSchema),
  gamesController.guessNumber
);

export default gameRouter;
