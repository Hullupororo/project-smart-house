import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSignUp } from '../../../app/slices/userSlice';
import './signup.css';

export default function SignUp() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSignUp(Object.fromEntries(new FormData(e.target))));
  };

  return (
  // <form onSubmit={submitHandler} autoComplete="off" className="form">
  //   <div className="control">
  //     <h1>
  //       Sign Up
  //     </h1>
  //   </div>

  //   <div className="control block-cube block-input">
  //     <input name="name" placeholder="Name" type="name" />
  //     <div className="bg-top">
  //       <div className="bg-inner" />
  //     </div>
  //     <div className="bg-right">
  //       <div className="bg-inner" />
  //     </div>
  //     <div className="bg">
  //       <div className="bg-inner" />
  //     </div>
  //   </div>

  //   <div className="control block-cube block-input">
  //     <input name="email" placeholder="Email" type="text" />
  //     <div className="bg-top">
  //       <div className="bg-inner" />
  //     </div>
  //     <div className="bg-right">
  //       <div className="bg-inner" />
  //     </div>
  //     <div className="bg">
  //       <div className="bg-inner" />
  //     </div>
  //   </div>

  //   <div className="control block-cube block-input">
  //     <input name="password" placeholder="Password" type="password" />
  //     <div className="bg-top">
  //       <div className="bg-inner" />
  //     </div>
  //     <div className="bg-right">
  //       <div className="bg-inner" />
  //     </div>
  //     <div className="bg">
  //       <div className="bg-inner" />
  //     </div>
  //   </div>

  //   <button className="btn block-cube block-cube-hover" type="submit">
  //     <div className="bg-top">
  //       <div className="bg-inner" />
  //     </div>
  //     <div className="bg-right">
  //       <div className="bg-inner" />
  //     </div>
  //     <div className="bg">
  //       <div className="bg-inner" />
  //     </div>
  //     <div className="text">
  //       Sign Up
  //     </div>
  //   </button>

    // </form>
    <form onSubmit={submitHandler} className="main">
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
        className="button-54"
      >
        Sign Up
      </button>
    </form>
  );
}
