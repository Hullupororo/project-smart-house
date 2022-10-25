import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './DropLocation.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addLocation } from '../../app/slices/locSlice';

export default function DropLocation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [check, setCheck] = useState([]);
  const [input, setInput] = useState({
    title: '',
    address: '',
    rooms: [],
  });
  const rooms = ['living room', 'kitchen', 'dining room', 'bedroom', 'bathroom', 'office room'];
  const clickHandler = (e, inputPro) => {
    e.preventDefault();
    dispatch(addLocation(inputPro));
    navigate('/');
  };
  useEffect(() => { setInput((prev) => ({ ...prev, rooms: check })); }, [check]);

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const changeHandler = (e) => {
    setCheck((prev) => ([...prev, e.target.value]));
  };
  return (
    <div>
      <div className="addLoc">
        Add location
      </div>
      <form className="formLoc" onSubmit={(e) => clickHandler(e, input)}>
        <div className="inputField">
          <input type="input" className="inputLoc" placeholder="Title" name="title" id="title" value={input.title} onChange={inputHandler} />
          <label htmlFor="name" className="labelLoc">Title</label>
        </div>
        <div className="inputField">
          <input type="input" className="inputLoc" placeholder="Location" name="address" id="location" value={input.location} onChange={inputHandler} />
          <label htmlFor="name" className="labelLoc">Address</label>
        </div>

        <nav className="drop">

          <label className="touchdrop" htmlFor="touch"><span className="select">choose rooms</span></label>
          <input type="checkbox" id="touch" />

          <div className="slide">
            {rooms?.map((room) => (
              <div className="drops">
                <div className="grid">

                  <label className="checkbox path">
                    <input type="checkbox" name="rooms" value={room} onClick={changeHandler} />
                    <svg viewBox="0 0 21 21">
                      <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" />
                    </svg>
                  </label>

                </div>
                <div className="roomName">

                  {room}
                </div>
              </div>
            ))}
          </div>

        </nav>
        <button
          type="submit"
          className="locButton"
        >
          add
        </button>
      </form>
    </div>
  );
}
