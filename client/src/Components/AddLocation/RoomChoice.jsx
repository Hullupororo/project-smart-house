import React, { useEffect } from 'react';
import './roomChoice.css';

export default function RoomChoice() {
  return (
    <select multiple data-placeholder="Add tools">
      <option>Sketch</option>
      <option selected>Framer X</option>
      <option>Photoshop</option>
      <option>Principle</option>
      <option>Invision</option>
    </select>
  );
}
