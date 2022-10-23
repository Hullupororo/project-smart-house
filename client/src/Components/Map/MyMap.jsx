/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mymap.css';

export default function MyMap() {
  // const [allCountries, setAllCountry] = useState([{ place: [55.684758, 37.738521] }]);
  const [location, setLocation] = useState([]);
  const [country, setCountry] = useState({ shir: 55.76, dolg: 37.64 });
  const [myMap, setMyMap] = useState(null);
  const navigate = useNavigate();
  useEffect(
    () => {
      ymaps.ready(() => {
        const map = new ymaps.Map('map', {
          // Moscow
          center: [country.shir, country.dolg],
          zoom: 10,
        }, {
          searchControlProvider: 'yandex#search',
        });

        setMyMap(map);
      });
    },
    [],
  );
  const hardcode = [[55.687086, 37.529789], [55.782392, 37.614924], [55.642063, 37.656123]];
  useEffect(() => {
    const obj = hardcode.map((el) => new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: 'Point',
        coordinates: el,
      },
      // Свойства.
      properties: {
        // Контент метки.
        iconContent: 'Я тащусь',
        hintContent: 'Ну давай уже тащи',
      },
    }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blackStretchyIcon',
      // Метку можно перемещать.
      draggable: true,
    }));
    setLocation(obj);
  }, []);

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
