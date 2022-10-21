import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setModal } from '../../app/slices/modalSlice';
import MyModal from '../MyModal/MyModal';

export default function MainPage() {
  const arr = [{ id: 1, title: 'home' }, { id: 2, title: 'office' }];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addLoc = () => {
    navigate('/locations/new');
  };
  const modalHandler = (oneLoc) => {
    dispatch(setModal(oneLoc));
  };
  const modal = useSelector((state) => state.modal);
  return (
    <>
      <div>MainPage</div>
      <button type="button" onClick={addLoc}>add location</button>
      {arr.map((loc) => (
        <div>
          <Link to={`/locations/${loc.id}`}>
            {loc.title}
          </Link>
          <button type="button" onClick={() => modalHandler(loc)}>delete</button>
        </div>
      ))}
      {modal
      && <MyModal />}
    </>
  );
}
