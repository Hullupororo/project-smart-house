import React from 'react';
import DragAndDrop from '../DragAndDrop/DragAndDrop';

export default function AddLocation() {
  return (
    <div>
      <div className="form__group field">
        <input type="text" className="form__field" placeholder="New Location" name="title" />
        <label htmlFor="name" className="form__label">New Location</label>
      </div>
      <DragAndDrop />
    </div>
  );
}
