// /* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './login.css';
import { userLogin } from '../../../app/slices/userSlice';

export default function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target);
    dispatch(userLogin(Object.fromEntries(new FormData(e.target))));
  };

  return (
    <form onSubmit={handleLogin} autoComplete="off" className="form">
      <div className="control">
        <h1>
          Sign In
        </h1>
      </div>

      <div className="control block-cube block-input">
        <input name="email" placeholder="Email" type="text" />
        <div className="bg-top">
          <div className="bg-inner" />
        </div>
        <div className="bg-right">
          <div className="bg-inner" />
        </div>
        <div className="bg">
          <div className="bg-inner" />
        </div>
      </div>

      <div className="control block-cube block-input">
        <input name="password" placeholder="Password" type="password" />
        <div className="bg-top">
          <div className="bg-inner" />
        </div>
        <div className="bg-right">
          <div className="bg-inner" />
        </div>
        <div className="bg">
          <div className="bg-inner" />
        </div>
      </div>
      <button className="btn block-cube block-cube-hover" type="submit">
        <div className="bg-top">
          <div className="bg-inner" />
        </div>
        <div className="bg-right">
          <div className="bg-inner" />
        </div>
        <div className="bg">
          <div className="bg-inner" />
        </div>
        <div className="text">
          Log In
        </div>
      </button>

    </form>

  );
}
