import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../app/slices/modalSlice';
import './MyModal.css';

export default function MyModal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  return (
    <div id="modal">
      <p className="message">Are you sure you want to delete this location?</p>
      <div className="options">
        <button type="button" className="btn1" onClick={() => dispatch(setModal(null))}>Close</button>
        <button type="button" className="btn1" onClick={() => dispatch(setModal(null))}>Delete</button>
      </div>
    </div>
  );
}
