import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {Description, Temperature, Town, WeatherBox, WeatherIcon } from './styled'

const OW_API = '13b0886c7c035390785605fc1c637712';
const CORS = 'https://cors-anywhere.herokuapp.com/'

const Weather = ({ className }) => {
  const [currentPosition, setCurrentPosition] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
      const pos = [position.coords.latitude, position.coords.longitude];
      setCurrentPosition(pos);

      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos[0]}&lon=${pos[1]}`)
        .then((res) => {
          setData(res);
         // console.log(res);
        })
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos[0]}&lon=${pos[1]}&units=metric&appid=${OW_API}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          console.log(res);
        })
        .catch(error => setError(true));
        console.log('Error: ', error);
    })
  }
  }, []);

  const iconId = data?.weather?.[0]?.id
  const icon = data?.weather?.[0]?.icon
  const description = data?.weather?.[0]?.description
  const town = data?.name

  return (
  <WeatherBox>
    <Town>{town}</Town>
    <Temperature>{data?.main?.temp}°C</Temperature>
    <WeatherIcon alt={`weather-icon-${iconId}`} src={`http://openweathermap.org/img/w/${icon}.png`} />
    <Description>{description}</Description>
  </WeatherBox>);
};

Weather.propTypes = {
  data: PropTypes.object,
};

export default Weather;
