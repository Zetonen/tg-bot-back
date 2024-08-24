import { ctrlWrapper } from "../decorators/index.js";
import { startGame, guessNumber } from "./game/index.js";
export default {
  startGame: ctrlWrapper(startGame),
  guessNumber: ctrlWrapper(guessNumber),
};
