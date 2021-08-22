import React from 'react'
import './App.css'
import Clock from './components/Clock'
import Quotes from './components/Quotes'
import Weather from './components/Weather'

const App = () => {
  return (
    <div>
      <Clock />
      <Quotes />
      <Weather />
    </div>
  )
}

export default App
