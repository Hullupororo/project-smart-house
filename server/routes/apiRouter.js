const express = require('express');
const axios = require('axios');
const { Location } = require('../db/models');

const router = express.Router();

router.get('/allLocations', async (req, res) => {
  const allLocations = await Location.findAll();
  res.json(allLocations);
  res.status(200);
});

router.post('/newLocation', async (req, res) => {
  const { title, address } = req.body;
  const geo = address.replaceAll(' ', '+');
  axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=79f85217-c671-430e-b7b8-c071e002b062&geocode=${geo}`)
    .then((resss) => (resss.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')));
});
module.exports = router;
