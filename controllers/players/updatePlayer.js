const { PlayerModel, joiPlayerSchema } = require("../../models/player");
const { NotFound } = require("http-errors");

const updatePlayer = async (req, res, next) => {
  try {
    const { error } = joiPlayerSchema.validate(req.body);
    if (error) {
      error.status = 400;
      error.message = "missing fields";
      throw error;
    }
    const { id } = req.params;
    const result = await PlayerModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!result) {
      throw new NotFound(`Player with id=${id} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updatePlayer;
