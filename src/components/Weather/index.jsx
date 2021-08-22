import React, { useEffect, useState } from 'react'

const OW_API = '13b0886c7c035390785605fc1c637712'

const locInfo = (pos) => {
  if (navigator.geolocation) {
    let coordinates = pos.coords
    console.log('coord', coordinates)

    const lon = coordinates.longitude
    const lat = coordinates.latitude

    useEffect =
      (() => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
        ).then((res) => {})
      },
      [])
  }
}

const Weather = () => {
  return <div />
}

export default Weather
