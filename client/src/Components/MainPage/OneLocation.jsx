import React from 'react';
import { useSelector } from 'react-redux';

export default function OneLocation({ loc }) {
  return (
    <div className="cardLocation" style={{ width: '40%' }}>

      <div className="card2">
        <div className="box">
          <div className="content">

            <h3 className="locText">{loc.title}</h3>

            <a href={`/locations/${loc.id}`}>Read More</a>
          </div>
        </div>
      </div>
    </div>

  );
}
// {modal
// && <MyModal />}
