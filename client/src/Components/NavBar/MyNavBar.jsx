import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './MyNavBar.css';
import { userLogout } from '../../app/slices/userSlice';

function MyNavBar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    navigate('/');
  };
  return (
    <div className="bar">
      <nav className="navMenu">
        {user?.id ? (

          <>
            <div className="title">
              {user.email === 'tapac@tapac'
                ? (
                  <a href="/platformer/index.html">
                    <img src="/platformer/data/img/mushroom.png" alt="" style={{ width: '30px' }} />
                  </a>
                ) : (
                  <Link to="/">smarthouse</Link>
                )}
            </div>
            {/* <div className="title">
              <Link to="/">device</Link>
            </div> */}
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
    </div>
  );
}

export default MyNavBar;
