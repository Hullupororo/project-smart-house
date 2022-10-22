import React from 'react';
import GuestPage from '../../../Components/GuestPage/GuestPage';
import styles from './interact.module.scss';
import altStyles from './alternative.interact.module.scss';

export default function TestDevice({ parent, id }) {
  console.log(parent, id);
  return (
    <>
      <div check={id} id={styles.yesdrop} className={styles.dragdrop}> #yes-drop </div>
      {parent
     && <GuestPage />}
    </>
  );
}
