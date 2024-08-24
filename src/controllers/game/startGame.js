import Game from "../../models/Game.js";

const startGame = async (req, res) => {
  const { gameId } = req.body;
  const game = await Game.findOne({ gameId });
  const randomNum = Math.floor(Math.random() * 100) + 1;

  if (!game) {
    const newUser = await Game.create({
      gameId,
      guessNumber: randomNum,
    });
  } else {
    await Game.findOneAndUpdate({ gameId }, { guessNumber: randomNum });
  }

  res.json({ message: "Початок гри" });
};
export default startGame;
