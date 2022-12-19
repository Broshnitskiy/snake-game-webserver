const { PlayerModel, joiPlayerSchema } = require("../../models/player");

const addPlayer = async (req, res, next) => {
  try {
    const { error } = joiPlayerSchema.validate(req.body);
    if (error) {
      error.status = 400;
      error.message = "missing required name field";
      throw error;
    }

    const result = await PlayerModel.create({ ...req.body });
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addPlayer;
