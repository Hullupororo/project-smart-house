import React from 'react';
import { useNavigate } from 'react-router-dom';
import Animation from '../Animation/Animation';
import './guestPage.css';

export default function GuestPage() {
  const navigate = useNavigate();

  const regHandler = () => {
    navigate('/user/registration');
  };
  return (
    <div>
      <div className="introText">
        <p className="paragraph">
          Умный дом - решение
        </p>
        <p className="paragraph">
          по автоматизации вашего дома
        </p>
      </div>
      <Animation />
      <div className="button-54ProMax-cont">

        <button
          type="button"
          className="button-54 button-54ProMax"
          onClick={regHandler}
        >
          Get Started

        </button>
      </div>
    </div>
  );
}
