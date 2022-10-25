import React from 'react';
import './device.css';

export default function DeviceItem() {
  return (
    <div id="yes-drop" className="drag-drop device">
      <p className="message">Are you sure you want to delete this location?</p>
      <div className="options" />
    </div>
  );
}
