import React, { useEffect, useState } from 'react'
import { ClockWrapper } from './styled'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <ClockWrapper>
      {date.toLocaleTimeString()} {date < 12 ? 'AM' : 'PM'}
    </ClockWrapper>
  )
}

export default Clock
