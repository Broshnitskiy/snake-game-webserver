const { PlayerModel } = require("../../models/player");

const getPlayers = async (req, res, next) => {
  try {
    const players = await PlayerModel.find();
    res.json({
      status: "success",
      code: 200,
      data: {
        result: players,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPlayers;
