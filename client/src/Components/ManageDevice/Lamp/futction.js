// const mqtt = require('mqtt');

// const client = mqtt.connect('mqtt://192.168.2.155:1883');

// export const toggleLamp = () => client.on('connect', () => {
//   client.subscribe('presence', (err) => {
//     if (!err) {
//       client.publish('zigbee2mqtt/Lampa/set', '{"state": "TOGGLE"}');
//     }
//   });
// });

// const color = '{"color":{"hex":"#ffffFF"}}'
// const eff = '{"effect": "blink"}'

// client.on('connect', function () {
//   client.subscribe('presence', function (err) {
//     if (!err) {
//       client.publish('zigbee2mqtt/Lampa/set', eff)
//     }
//   })
// })

// client.on('message', (topic, message) => {
//   // message is Buffer
//   console.log(topic);
//   console.log(message.toString());
//   client.end();
// });
