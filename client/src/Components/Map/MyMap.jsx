/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './mymap.css';

export default function MyMap() {
  const locationPro = useSelector((state) => state.loc);
  const [location, setLocation] = useState([]);
  const [myMap, setMyMap] = useState(null);
  const navigate = useNavigate();

  useEffect(
    () => {
      ymaps.ready(() => {
        const map = new ymaps.Map('map', {
          // Moscow
          center: [55.76, 37.64],
          zoom: 10,
        }, {
          searchControlProvider: 'yandex#search',
        });

        setMyMap(map);
      });
    },
    [],
  );
  // const hardcode = [[55.687086, 37.529789], [55.782392, 37.614924], [55.642063, 37.656123]];

  useEffect(() => {
    const obj = locationPro.map((el) => new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: 'Point',
        coordinates: [el.dolg, el.shir],
      },
      // Свойства.
      properties: {
        // Контент метки.
        iconContent: el.title,
        hintContent: el.address,
      },
      // preset: 'islands#blueHomeIcon',
      // iconColor: '#272727',

    }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blueHomeIcon',
      iconColor: '#272727',
      // Метку можно перемещать.
      draggable: false,
    }));
    setLocation(obj);
  }, [locationPro]);

  if (myMap) {
    location?.map((el) => myMap.geoObjects
      .add(el));
  }
  // console.log(location, myMap);

  return (
    <div
      className="img-fluid"
      id="map"
    />
  );
}
