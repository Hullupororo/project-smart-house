import React from 'react';
import './outlet.css';
import { RiOutlet2Fill } from 'react-icons/ri';

export default function ManageOutlet() {
  function handleClick() {
    fetch('http://localhost:3001/dev/outleton');
  }
  return (
    <div className="DashaProMax">
      <div className="outletSettings">
        <div className="logo">
          <RiOutlet2Fill />
          <h3 className="header">Stock</h3>
        </div>
        <div>
          <h5 className="forMargin">On / Off</h5>
          <label className="switch">
            <input type="checkbox" onClick={() => handleClick()} />
            <div>
              <span />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
