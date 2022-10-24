/* eslint-disable max-len */
const express = require('express');
const axios = require('axios');
const { Location, Room } = require('../db/models');

const router = express.Router();

router.get('/allLocations', async (req, res) => {
  const allLocations = await Location.findAll();
  res.json(allLocations);
  res.status(200);
});

router.post('/newLocation', async (req, res) => {
  const { title, address, rooms } = req.body;
  const geo = address.replaceAll(' ', '+');
  axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=79f85217-c671-430e-b7b8-c071e002b062&geocode=${geo}`)
    .then(async (resss) => {
      const coord = resss.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      const location = await Location.create({
        title, address, user_id: req.session.user.id, shir: coord[0], dolg: coord[1],
      });
      //  await Location.findOne({ where: { title } });
      // console.log(location);
      await Room.bulkCreate(rooms.map((el) => ({ loc_id: location.id, title: el })));
      // console.log(newRooms);
      res.json(location);
    });
});

router.delete('/locations/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Location.destroy(
    { where: { id } },
  );
  res.json(id);
});

module.exports = router;
