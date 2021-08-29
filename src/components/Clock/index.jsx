import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { ClockWrapper } from './styled'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  let dateTime = date.toLocaleTimeString()
  return (
    <ClockWrapper>
      {dateTime}
    </ClockWrapper>
  )
}

Clock.propTypes = {
  dateTime: PropTypes.string,
}

export default Clock
