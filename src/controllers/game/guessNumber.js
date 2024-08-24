import { HttpError } from "../../helpers/index.js";
import Game from "../../models/Game.js";

const guessNumber = async (req, res) => {
  const { guessNumber, gameId } = req.body;
  const game = await Game.findOne({ gameId });
  if (!game || !game.guessNumber) {
    throw HttpError(401, "User not found or game end");
  }

  if (game.guessNumber === guessNumber) {
    await Game.updateOne({ gameId }, { $unset: { guessNumber: "" } });
    res.json({ message: "Число вгадано" });
  } else if (game.guessNumber > guessNumber) {
    res.json({ message: "Загадане число більше" });
  } else if (game.guessNumber < guessNumber) {
    res.json({ message: "Загадане число меньше" });
  }
};

export default guessNumber;
