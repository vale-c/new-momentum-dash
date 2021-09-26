import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Description,
  Temperature,
  Town,
  WeatherBox,
  WeatherIcon,
  Wind,
} from './styled'
import { getIconFromWeather } from '../../_utils/helpers.js'

const Weather = () => {
  const [, setCurrentPosition] = useState([])
  const [town, setTown] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [, setLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        setCurrentPosition([lat, lon])
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
        )
          .then((res) => res.json())
          .then((res) => {
            setTown(res?.address?.town)
          })
        return fetch(`https://goweather.herokuapp.com/weather/${lat},${lon}`)
          .then((res) => res.json())
          .then((res) => {
            setWeatherData(res)
            setLoading(false)
            console.log('weather', res)
          })
      })
    }
  }, [])

  const temperature = weatherData?.temperature
  const condition = weatherData?.description?.toLowerCase()
  const wind = weatherData?.wind

  return (
    <WeatherBox>
      <Town>{town}</Town>
      <Temperature>{temperature}</Temperature>
      {condition && (
        <WeatherIcon
          alt={`weather-icon-${condition}`}
          src={getIconFromWeather(condition)}
        />
      )}
      <Description>{condition}</Description>
      <Wind>Wind speed: {wind}</Wind>
    </WeatherBox>
  )
}

Weather.propTypes = {
  data: PropTypes.object,
}

export default Weather
