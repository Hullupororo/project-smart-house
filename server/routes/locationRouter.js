const express = require('express');

const { Location, Room } = require('../db/models');

const router = express.Router();

router.get('/locations', async (req, res) => {
  const loations = await Location.findAll({ order: [['id', 'DESC']] });
  res.json(loations);
});

router.get('/locations/:id', async (req, res) => {
  console.log(req.params.id);
  const rooms = await Room.findAll({ where: { loc_id: req.params.id } });
  res.json(rooms);
});

module.exports = router;
