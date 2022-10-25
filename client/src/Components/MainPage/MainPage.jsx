import React, { useEffect, useState } from 'react';
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
import { getSearchSaga } from '../../app/actions/searchActions';

export default function MainPage() {
  const [search, setSearch] = useState('');
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
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search) {
      console.log(search);
      dispatch(getSearchSaga(search.toLowerCase()));
    } else {
      dispatch(getLoc());
    }
  }, [search]);

  return (
    <Container className="newClassDasha">

      <div className="cards">
        <button className="button-54 button-54ProMaxGenius" type="button" onClick={addLoc}>Add location</button>
        <form className="formSearch">
          <div className="searchInput">
            <input
              type="input"
              className="searchField"
              placeholder="Location"
              name="address"
              id="location"
              onChange={searchHandler}
              value={search}
            />
            <label htmlFor="name" className="labelSearch">search</label>
          </div>
        </form>
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
