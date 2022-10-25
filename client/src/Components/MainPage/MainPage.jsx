import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { setModal } from '../../app/slices/modalSlice';
import MyModal from '../MyModal/MyModal';
import { getLoc } from '../../app/slices/locSlice';
import OneLocation from './OneLocation';
import MyMap from '../Map/MyMap';
import './oneLocation.css';

export default function MainPage() {
  const location = useSelector((state) => state.loc);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLoc());
  }, []);

  const addLoc = () => {
    navigate('/locations/new');
  };
  const modalHandler = (oneLoc) => {
    dispatch(setModal(oneLoc));
  };

  return (
    <Container className="newClassDasha">

      <div className="cards">
        <div className="KirillTheBest">

          <button className="button-54 button-54ProMaxGenius" type="button" onClick={addLoc}>Add location</button>
        </div>
        {location.map((loc) => (
          <OneLocation key={loc.id} loc={loc} modalHandler={modalHandler} />
        ))}

      </div>
      <MyMap />
      {modal
 && <MyModal />}
    </Container>

  );
}
