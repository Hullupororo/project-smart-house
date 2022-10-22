import React from 'react';
import GuestPage from '../../../Components/GuestPage/GuestPage';

export default function AltTestDevice({ check, id, classname }) {
    console.log(id, classname);
  return (
    <div check={check} id={id} className={classname}>HELLO</div>
  );
}
