const { Schema, model } = require("mongoose");
const Joi = require("joi");

const mongooseContactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
      unique: true,
    },
    counter: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiPlayerSchema = Joi.object({
  name: Joi.string().required(),
  counter: Joi.string().required(),
}).min(1);

const PlayerModel = model("player", mongooseContactSchema);

module.exports = { PlayerModel, joiPlayerSchema };
