// /* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { userLogin } from '../../../app/slices/userSlice';

export default function Login() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(Object.fromEntries(new FormData(e.target)), navigate));
  };

  return (
    <form onSubmit={handleLogin} className="main main-login">
      {user.error
      && (
      <div>
        {user.error}
      </div>
      )}
      <div className="form__group field">
        <input type="email" className="form__field" placeholder="Email" name="email" />
        <label htmlFor="name" className="form__label">Email</label>
      </div>
      <div className="form__group field">
        <input type="password" className="form__field" placeholder="Password" name="password" />
        <label htmlFor="name" className="form__label">Password</label>
      </div>
      <button
        type="submit"
        className="button-54 button-54Pro"
        // onClick={handleLogin}
      >
        Sign In

      </button>
    </form>

  );
}
