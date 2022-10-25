import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../../../app/slices/userSlice';
import './signup.css';

export default function SignUp() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSignUp(Object.fromEntries(new FormData(e.target)), navigate));
  };

  return (
    <div className="form-containerPro">
      <form onSubmit={submitHandler} className="main main-signup">
        {user.error
      && (
      <div>
        {user.error}
      </div>
      )}
        <div className="form__group field">
          <input type="name" className="form__field" placeholder="Name" name="name" />
          <label htmlFor="name" className="form__label">Name</label>
        </div>
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
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
