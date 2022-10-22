import React, { useEffect } from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './Components/MainPage/MainPage';
import MyNavBar from './Components/NavBar/MyNavBar';
import LocationPage from './Components/LocationPage/LocationPage';
import AddDevicePage from './Components/AddDevicePage/AddDevicePage';
import AddLocation from './Components/AddLocation/AddLocation';
import ManageDevice from './Components/ManageDevice/ManageDevice';
import SignUp from './Components/Auth/signup/SignUp';
import Login from './Components/Auth/login/Login';
import { userCheck } from './app/slices/userSlice';
import GuestPage from './Components/GuestPage/GuestPage';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';
import Animation from './Components/Animation/Animation';
import MyModal from './Components/MyModal/MyModal';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCheck());
  }, []);

  return (
    <>
      <MyNavBar />
      <Container>
        <Routes>
          <Route path="/drag" element={<DragAndDrop />} />
          <Route path="/" element={<GuestPage />} />
          <Route path="/user/registration" element={<SignUp />} />
          <Route path="/user/authorization" element={<Login />} />
          <Route path="/locations" element={<MainPage />} />
          <Route path="/locations/:id" element={<LocationPage />} />
          <Route path="/device/new" element={<AddDevicePage />} />
          <Route path="/locations/new" element={<AddLocation />} />
          <Route path="/device/edit" element={<ManageDevice />} />
          {/* <Route path="/animation" element={<Animation />} /> */}
        </Routes>
      </Container>
    </>
  );
}

export default App;
