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
    .then(async (resss) => {
      const coord = resss.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      const location = await Location.create({
        title, address, user_id: req.session.user.id, shir: coord[0], dolg: coord[1],
      });
      res.json(location);
    });
});
module.exports = router;
