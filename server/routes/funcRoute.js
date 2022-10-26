const express = require('express');
const mqtt = require('mqtt');

// const client = mqtt.connect('mqtt://192.168.2.155:1883');

const router = express.Router();


router.get('/funconbot', (req, res) => {
  const client = mqtt.connect('mqtt://192.168.2.155:1883');
  client.on('connect', () => {
    client.subscribe('presence', (err) => {
      if (!err) {
        client.publish('zigbee2mqtt/Lampa/set', '{"state": "ON"}');
      }
    });
  });
  res.sendStatus(200);
});

router.get('/funcoffbot', (req, res) => {
  const client = mqtt.connect('mqtt://192.168.2.155:1883');
  client.on('connect', () => {
    client.subscribe('presence', (err) => {
      if (!err) {
        client.publish('zigbee2mqtt/Lampa/set', '{"state": "OFF"}');
      }
    });
  });
  res.sendStatus(200);

router.get('/sub', (req, res) => {
  const client = mqtt.connect('mqtt://192.168.2.155:1883');
  client.on('connect', () => {
    client.subscribe('zigbee2mqtt/Doordatchik', (err) => {
      if (!err) {
        console.log('Подписка прошла');
      }
    });
  });
  client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, JSON.parse(payload.toString()).contact);
  });

});

router.get('/funcon', (req, res) => {
  const client = mqtt.connect('mqtt://192.168.2.155:1883');
  client.on('connect', () => {
    client.subscribe('presence', (err) => {
      if (!err) {
        client.publish('zigbee2mqtt/Lampa/set', '{"state": "TOGGLE"}');
      }
    });
  });
  res.sendStatus(200);
});
router.post('/color', (req, res) => {
  const client = mqtt.connect('mqtt://192.168.2.155:1883');
  const { hex } = req.body;
  console.log(hex);
  client.on('connect', () => {
    client.subscribe('presence', (err) => {
      if (!err) {
        client.publish('zigbee2mqtt/Lampa/set', `{"color":{"hex":"${hex}"}}`);
      }
    });
  });
  res.sendStatus(200);
});
router.post('/brightness', (req, res) => {
  const client = mqtt.connect('mqtt://192.168.2.155:1883');
  const { brightness } = req.body;
  client.on('connect', () => {
    client.subscribe('presence', (err) => {
      if (!err) {
        client.publish('zigbee2mqtt/Lampa/set', `{"brightness": "${brightness}"}`);
      }
    });
  });
  res.sendStatus(200);
});
router.get('/outleton', (req, res) => {
  const client = mqtt.connect('mqtt://192.168.2.155:1883');
  client.on('connect', () => {
    client.subscribe('presence', (err) => {
      if (!err) {
        client.publish('zigbee2mqtt/Outlet/set', '{"state": "TOGGLE"}');
      }
    });
  });
  res.sendStatus(200);
});
router.get('/outletonbot', (req, res) => {
  const client = mqtt.connect('mqtt://192.168.2.155:1883');
  client.on('connect', () => {
    client.subscribe('presence', (err) => {
      if (!err) {
        client.publish('zigbee2mqtt/Outlet/set', '{"state": "ON"}');
      }
    });
  });
  res.sendStatus(200);
});
router.get('/outletoffbot', (req, res) => {
  const client = mqtt.connect('mqtt://192.168.2.155:1883');
  client.on('connect', () => {
    client.subscribe('presence', (err) => {
      if (!err) {
        client.publish('zigbee2mqtt/Outlet/set', '{"state": "OFF"}');
      }
    });
  });
  res.sendStatus(200);
});

module.exports = router;
