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
    dispatch(userLogin(Object.fromEntries(new FormData(e.target))));
  };

  return (
    <form onSubmit={handleLogin} className="main">
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
// <form onSubmit={handleLogin} autoComplete="off" className="form">
//   <div className="control">
//     <h1>
//       Sign In
//     </h1>
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
//       Log In
//     </div>
//   </button>

// </form>
