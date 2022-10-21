import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MyNavBar.css';
import { userLogout } from '../../app/slices/userSlice';

function MyNavBar() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(userLogout());
  };
  return (
  // <div className="bar">
    <nav className="navMenu">
      {user?.id ? (

        <>
          <div className="title">
            <Link to="/">smarthouse</Link>
          </div>
          <div className="title">
            <Link to="/">device</Link>
          </div>
          <div className="title">
            <Link to="/">Home</Link>
          </div>
          <div className="title">
            <Link to="/" onClick={logoutHandler}>logout</Link>
          </div>
        </>
      )
        : (
          <>
            <div className="title titlePro">
              <Link to="/user/authorization">sign in</Link>
            </div>
            <div className="title titlePro">
              <Link to="/user/registration">sign up</Link>
            </div>
          </>

        )}
      <div className={`dot ${user?.id ? null : 'dotPro'}`} />
    </nav>
  // </div>
  );
}

export default MyNavBar;
