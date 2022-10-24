/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDevice } from '../../app/slices/deviceSlice';
import { getRoom } from '../../app/slices/roomSlice';
import './LocationPage.css';

export default function LocationPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.room);
  // const devices = useSelector((state) => state.device);
  const devices = [{ id: 1, title: 'Lamp' }, { id: 2, title: 'socket' }, { id: 3, title: 'button' }, { id: 4, title: 'griby' }];
  useEffect(() => {
    dispatch(getRoom(id));
  }, []);
  const deviceHandler = (roomId) => {
    const arrOfRooms = document.getElementsByClassName('text');
    for (const room of arrOfRooms) {
      room.style = 'color: white; font-weight: 400';
    }
    dispatch(getDevice(roomId));
    document.getElementsByClassName(`text ${roomId}`)[0].style = 'color: #fddb3a; font-weight: 600';
  };
  return (
    <>
      <div className="sidebar">
        {rooms?.map((room) => (
          <div className="link" onClick={() => deviceHandler(room.id)}>
            <div className={`text ${room.id}`}>{room.title}</div>
          </div>
        ))}
      </div>
      <div className="newCont">

        <div className="addDevice">
          <p>add devices</p>
        </div>
        <div className="deviceField">
          {devices?.map((device) => (
            <div className="fields">{device.title}</div>
          ))}
          {devices.length ? (
            ''
          ) : (
            <>
              <div className="fields" />
              <div className="fields" />
              <div className="fields" />
              <div className="fields" />
            </>
          )}
        </div>
      </div>
    </>

  );
}
