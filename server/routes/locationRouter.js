const express = require('express');

const { Location } = require('../db/models');

const router = express.Router();

router.get('/locations', async (req, res) => {
  const loations = await Location.findAll();
  res.json(loations);
});

module.exports = router;
