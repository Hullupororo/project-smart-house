/* eslint-disable max-len */
import React, { useEffect } from 'react';
import axios from 'axios';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

export default function LampColorPicker() {
  const [color, setColor] = useColor('hex', '#121212');
  const changeHandler = () => {
    fetch('http://localhost:3001/dev/color', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(color),
    });
  };

  return (
    <div className="colorPicker">
      <ColorPicker width={200} height={150} color={color} onChange={setColor} hideHSV hideHEX hideRGB light />
      <button className="colorButton" type="button" onClick={() => changeHandler()}>Change Color</button>
    </div>
  );
}
