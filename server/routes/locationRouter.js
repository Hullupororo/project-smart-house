const express = require('express');
const { Op } = require('sequelize');
const sequelize = require('sequelize');
const { Location, Room } = require('../db/models');

const router = express.Router();

router.get('/locations', async (req, res) => {
  // const loations = await Location.findAll({ order: [['id', 'DESC']] });
  const loations = await Location.findAll({ where: { user_id: req.session.user.id } });

  res.json(loations);
});
router.post('/locations/search', async (req, res) => {
  const { input } = req.body;
  const searchLocations = await Location.findAll({
    where: {
      [Op.or]: [
        { title: sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), 'LIKE', `%${input}%`) },
        { address: sequelize.where(sequelize.fn('LOWER', sequelize.col('address')), 'LIKE', `%${input}%`) },
      ],
    },
  });
  res.json(searchLocations);
});

router.get('/locations/:id', async (req, res) => {
  console.log(req.params.id);
  const rooms = await Room.findAll({ where: { loc_id: req.params.id } });
  res.json(rooms);
});

router.post('/locations/add', async (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;
