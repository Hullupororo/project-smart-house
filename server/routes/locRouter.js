const express = require('express');
const { Location } = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  const locs = await Location.findAll({ where: { user_id: req.session.user.id } });
  res.json(locs);
});

router.get('/one/:id', async (req, res) => {
  const oneLoc = await Location.findAll({ where: { id: req.params.id } });
  res.json(oneLoc);
});

module.exports = router;
