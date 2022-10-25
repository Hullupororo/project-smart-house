import React, { useEffect } from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './Components/MainPage/MainPage';
import MyNavBar from './Components/NavBar/MyNavBar';
import LocationPage from './Components/LocationPage/LocationPage';
import AddDevicePage from './Components/AddDevicePage/AddDevicePage';
import ManageDevice from './Components/ManageDevice/ManageDevice';
import SignUp from './Components/Auth/signup/SignUp';
import Login from './Components/Auth/login/Login';
import { userCheck } from './app/slices/userSlice';
import GuestPage from './Components/GuestPage/GuestPage';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';
import DropLocation from './Components/DropLocation/DropLocation';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCheck());
  }, []);
  const user = useSelector((state) => state.user);
  return (
    <>
      <MyNavBar />
      <Container>

        {user.fetching ? (
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
          </svg>

        ) : (
          <Routes>

            <Route element={<ProtectedRoute isAllowed={user && user?.id} redirect="/quest" />}>
              <Route path="/" element={<MainPage />} />
            </Route>
            <Route path="/drag" element={<DragAndDrop />} />
            <Route path="/quest" element={<GuestPage />} />
            <Route path="/user/registration" element={<SignUp />} />
            <Route path="/user/authorization" element={<Login />} />
            <Route path="/locations/:id" element={<LocationPage />} />
            <Route path="/device/new" element={<AddDevicePage />} />
            <Route path="/locations/new" element={<DropLocation />} />
            <Route path="/device/edit" element={<ManageDevice />} />
          </Routes>

        )}

      </Container>
    </>
  );
}

export default App;
