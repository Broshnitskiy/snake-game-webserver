const { PlayerModel } = require("../../models/player");

const getPlayers = async (req, res, next) => {
  try {
    const players = await PlayerModel.find();
    const sortPlayerInDescendingOrder = players.sort(
      (a, b) => b.counter - a.counter
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        result: sortPlayerInDescendingOrder,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPlayers;
