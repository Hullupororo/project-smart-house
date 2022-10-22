const express = require('express');
const { Room, Device } = require('../db/models');

const router = express.Router();

router.get('/all/:id', async (req, res) => {
  const devices = await Room.findAll({ where: { loc_id: req.params.id } }, { include: { Device } });
  res.json(devices);
});

router.get('/one/:id', async (req, res) => {
  const device = await Device.findOne({ where: { id: req.params.id } });
  res.json(device);
});

router.post('/one/:id', async (req, res) => {
  const { title, type } = req.body;
  const device = await Device.update({ title, type }, { where: { id: req.params.id } });
  await device.save();
  res.json(device);
});

module.exports = router;
