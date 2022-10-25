/* eslint-disable max-len */
// import axios from 'axios';
// import React, { useState } from 'react';
// import './roomChoice.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addLocation } from '../../app/slices/locSlice';
// import DropLocation from '../DropLocation/DropLocation';

// export default function AddLocation() {
//   const navigate = useNavigate();
//   const [input, setInput] = useState({ title: '', address: '' });
//   const dispatch = useDispatch();

//   const clickHandler = (inputPro) => {
//     dispatch(addLocation(inputPro));
//     navigate('/locations');
//   };
//   const changeHandler = (e) => {
//     setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };
//   return (
//     <div>
//       <h3 className="locHeading">Add new Location</h3>
//       <div className="form__group field">
//         <input onChange={changeHandler} type="text" className="form__field" placeholder="Title" name="title" />
//         <label htmlFor="name" className="form__label">Title</label>
//       </div>
//       <div className="form__group field">
//         <input onChange={changeHandler} type="text" className="form__field" placeholder="Address" name="address" />
//         <label htmlFor="name" className="form__label">Address</label>
//       </div>
//       <div />
//       <DropLocation />
//       <button type="button" onClick={() => clickHandler(input)}>Save</button>
//     </div>
//   );
// }
