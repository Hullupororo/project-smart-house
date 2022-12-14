/* eslint-disable import/no-relative-packages */
import React, { useEffect } from 'react';
import axios from 'axios';
import { MdLightbulbOutline } from 'react-icons/md';
import LampColorPicker from './LampColorPicker';
import LampSlider from './LampSlider';
import './manageLamp.css';

function test() {
  fetch('http://localhost:3001/dev/sub');
}

function handleClick() {
  fetch('http://localhost:3001/dev/funcon');
}

export default function ManageLamp() {
  useEffect(() => {
    test();
  }, []);
  return (
    <div className="DashaProX">
      <div className="lampSettings">
        <div className="logo logoLamp">
          <MdLightbulbOutline />
          <h3 className="header">Lamp</h3>
        </div>

        <h5>Off / On</h5>
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
