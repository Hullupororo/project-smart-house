/* eslint-disable max-len */
import React from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

export default function LampColorPicker() {
  const [color, setColor] = useColor('hex', '#121212');

  return <ColorPicker width={250} height={150} color={color} onChange={setColor} hideHSV hideHEX hideRGB light />;
}
