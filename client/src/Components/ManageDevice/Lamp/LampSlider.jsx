import React, { useState } from 'react';
import './lampSlider.css';

export default function LampSlider() {
  const [light, setLight] = useState({ brightness: 222 });

  const chengHandler = (e) => {
    setLight({ brightness: e.target.value });
  };
  const brightness = () => {
    console.log(JSON.stringify(light));
    fetch('http://localhost:3001/dev/brightness', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(light),
    });
  };
  return (
    <section>
      <div>
        <input type="range" min="0" max="254" step="2" onChange={chengHandler} onMouseUp={() => brightness()} />
      </div>
    </section>

  );
}
