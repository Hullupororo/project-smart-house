import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainPage from './Components/MainPage/MainPage';
import MyNavBar from './Components/NavBar/MyNavBar';
import LocationPage from './Components/LocationPage/LocationPage';
import AddDevicePage from './Components/AddDevicePage/AddDevicePage';
import AddLocation from './Components/AddLocation/AddLocation';
import ManageDevice from './Components/ManageDevice/ManageDevice';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';

function App() {
  return (
    <Container>

      <MyNavBar />
      <Routes>
        <Route path="/drag" element={<DragAndDrop />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/locations" element={<MainPage />} />
        <Route path="/locations/:id" element={<LocationPage />} />
        <Route path="/device/new" element={<AddDevicePage />} />
        <Route path="/locations/new" element={<AddLocation />} />
        <Route path="/device/edit" element={<ManageDevice />} />

      </Routes>
    </Container>
  );
}

export default App;
