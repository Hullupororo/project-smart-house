import axios from 'axios';
import React, { useState } from 'react';
import './roomChoice.css';

export default function AddLocation() {
  const [input, setInput] = useState({ title: '', address: '' });

  const clickHandler = (inputPro) => {
    axios.post('http://localhost:3001/api/newLocation', inputPro)
      .then((res) => console.log(res));
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <h3 className="locHeading">Add new Location</h3>
      <div className="form__group field">
        <input onChange={changeHandler} type="text" className="form__field" placeholder="Title" name="title" />
        <label htmlFor="name" className="form__label">Title</label>
      </div>
      <div className="form__group field">
        <input onChange={changeHandler} type="text" className="form__field" placeholder="Address" name="address" />
        <label htmlFor="name" className="form__label">Address</label>
      </div>
      <div />
      <button type="button" onClick={() => clickHandler(input)}>Save</button>
    </div>
  );
}
