import React from 'react';
import './device.css';

export default function Outlet() {
  return (
    <div id="yes-drop" className="drag-drop device">
      <p className="message">IM AN OUTLET</p>

      <button>IM A BUTTON</button>
      {/* <div className="options" /> */}
    </div>
  );
}
