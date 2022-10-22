const express = require('express');
const { Device } = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const devices = await Device.findAll({ where: { room_id: req.params.id } });
  res.json(devices);
});

module.exports = router;
