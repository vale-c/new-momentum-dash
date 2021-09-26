import sunny from '../components/Weather/icons/sun.svg'
import cloudy from '../components/Weather/icons/cloud.svg'
import rain from '../components/Weather/icons/cloud-rain.svg'
import thunder from '../components/Weather/icons/cloud-lightning.svg'
import snow from '../components/Weather/icons/cloud-snow.svg'

export const getIconFromWeather = (condition) => {
  if (!condition) return null
  if (condition.includes('sunny', 'sun')) {
    return sunny
  }
  if (condition.includes('cloudy', 'cloud')) {
    return cloudy
  }
  if (condition.includes('thunderstorm')) {
    return thunder
  }
  if (condition.includes('rain', 'shower', 'mist')) {
    return rain
  }
  if (condition.includes('snow')) {
    return snow
  }
}
