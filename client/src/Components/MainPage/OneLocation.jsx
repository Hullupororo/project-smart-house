import React from 'react';
import { useSelector } from 'react-redux';

export default function OneLocation({ loc }) {
  //   const loc = useSelector((state) => state.loc);
  return (
    <div className="container">
      <div className="card">
        <div className="box">
          <div className="content">

            <h3>{loc.title}</h3>

            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <body>
        <div id="map" style={{ width: '600px', height: '400px' }} />
      </body>

    </div>

  );
}
