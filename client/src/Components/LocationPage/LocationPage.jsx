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
  const devices = useSelector((state) => state.device);
  useEffect(() => {
    dispatch(getRoom(id));
  }, []);
  const deviceHandler = (roomId) => {
    dispatch(getDevice(roomId));
  };
  return (
    <>
      <div className="sidebar">
        {rooms?.map((room) => (
          <div className="link">
            <div
              className="text"
              onClick={() => deviceHandler(room.id)}
            >
              {room.title}

            </div>
          </div>
        ))}
      </div>
      <div />
    </>

  );
}
