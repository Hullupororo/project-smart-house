import React from 'react';
import { useSelector } from 'react-redux';
// import './oneLocation.css';

export default function OneLocation({ loc, modalHandler }) {
  return (
    <div className="cardLocation" style={{ width: '40%' }}>

      <div className="card2">
        <div className="box">
          <div className="content">

            <h3 className="locText">{loc.title}</h3>
            <h5 className="locTextMini">{loc.address}</h5>

            <a href={`/locations/${loc.id}`}>Read More</a>
          </div>
        </div>
        <button type="button" onClick={() => modalHandler(loc)}>Delete</button>
      </div>
    </div>

  );
}
