import React from 'react';
import LampColorPicker from './LampColorPicker';
import LampSlider from './LampSlider';
import './manageLamp.css';

export default function ManageLamp() {
  return (
    <div className="DashaProX">
      <div>
        <label className="switch">
          <input type="checkbox" />
          <div>
            <span />
          </div>
        </label>
      </div>
      <div>
        <LampColorPicker />
      </div>
      <div>
        <LampSlider />
      </div>
    </div>
  );
}
