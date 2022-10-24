import React from 'react';
import LampColorPicker from './LampColorPicker';
import LampSlider from './LampSlider';
import './manageLamp.css';

export default function ManageLamp() {
  return (
    <>
      {/* <h3>Lamp</h3> */}
      <div className="DashaProX">

        <div className="DashaProXMax">
          <h4>On/Off</h4>
          <label className="switch">
            <input type="checkbox" />
            <div>
              <span />
            </div>
          </label>

          <h4>Brightness</h4>

          <LampSlider />

        </div>
        <div>
          <h4>Choose color</h4>

          <LampColorPicker />
        </div>
      </div>
    </>
  );
}
