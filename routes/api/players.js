const express = require("express");

const { players: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrl.getPlayers);

router.post("/", ctrl.addPlayer);

router.put("/:id", ctrl.updatePlayer);

module.exports = router;
