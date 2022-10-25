/* eslint-disable import/no-relative-packages */
import React from 'react';
import axios from 'axios';
// import { Connector, useMqttState } from 'mqtt-react-hooks';

import LampColorPicker from './LampColorPicker';
import LampSlider from './LampSlider';
import './manageLamp.css';
// const client = connect('mqtt://192.168.2.155:1883');

// const { client } = useMqttState();

function handleClick() {
  fetch('http://localhost:3001/dev/funcon');
}

// export const toggleLamp = () => client.on('connect', () => {
//   client.subscribe('presence', (err) => {
//     if (!err) {
//       client.publish('zigbee2mqtt/Lampa/set', '{"state": "TOGGLE"}');
//     }
//   });
// });

export default function ManageLamp() {
  return (
    <div className="DashaProX">
      <div className="lampSettings">

        <h5>On / Off</h5>
        <label className="switch">
          <input type="checkbox" onClick={() => handleClick()} />
          <div>
            <span />
          </div>
        </label>
        <h5>Brightness</h5>
        <LampSlider />
      </div>
      <div>
        <h5>Change Color</h5>
        <LampColorPicker />
      </div>
    </div>
  );
}
