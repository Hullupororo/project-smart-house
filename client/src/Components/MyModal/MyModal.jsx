import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteLocation } from '../../app/slices/locSlice';
import { setModal } from '../../app/slices/modalSlice';
import { setState } from '../../app/slices/stateSlice';
import './MyModal.css';

export default function MyModal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const deleteHandler = () => {
    dispatch(deleteLocation(modal));
    dispatch(setState());
    dispatch(setModal(null));
  };
  return (
    <div id="modal">
      <p className="message">Are you sure you want to delete this location?</p>
      <div className="options">
        <button type="button" className="btn1" onClick={() => dispatch(setModal(null))}>Close</button>
        <button type="button" className="btn1" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}
