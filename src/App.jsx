import '@fontsource/raleway'
import { TodayWeather } from './components/TodayWeather'
import { WeatherContent } from './components/WeatherContent'

function App() {
  return (
    <div className='md:flex'>
      <TodayWeather />
      <WeatherContent />
    </div>
  )
}

export default App

