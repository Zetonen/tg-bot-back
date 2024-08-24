import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleSaveError, preUpdate } from "./hooks.js";

const gameSchema = new Schema(
  {
    gameId: {
      type: Number,
      required: true,
    },
    guessNumber: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

gameSchema.post("save", handleSaveError);

gameSchema.pre("findOneAndUpdate", preUpdate);

gameSchema.post("findOneAndUpdate", handleSaveError);

export const startGameSchema = Joi.object({
  gameId: Joi.number().required(),
});

export const guessGameSchema = Joi.object({
  gameId: Joi.number().required(),
  guessNumber: Joi.number().required(),
});

const Game = model("game", gameSchema);

export default Game;
