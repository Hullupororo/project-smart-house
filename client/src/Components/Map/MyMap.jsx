import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mymap.css';

export default function MyMap() {
  const [allCountries, setAllCountry] = useState([]);
  const [country, setCountry] = useState({ shir: 55.76, dolg: 37.64 });
  const [myMap, setMyMap] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [country.shir, country.dolg],
        zoom: 10,
      }, {
        searchControlProvider: 'yandex#search',
      });
      setMyMap(map);
    });
  }, []);

  return (
    <div
      className="img-fluid"
      id="map"
    />
  );
}
